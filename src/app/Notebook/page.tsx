"use client";

import { useEffect, useState, useRef, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  PenLine,
  Star,
  Search,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  FileText,
  Plus,
  Download,
  Trash2,
  ChevronDown,
  Eraser,
} from "lucide-react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExtension from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontSize } from "@tiptap/extension-font-size";
import { TextSelection } from "prosemirror-state";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModuleSidebarAccordion from "../components/module-lessons/ModuleSidebarAccordion";
import ModuleLessonCanvas from "../components/module-lessons/ModuleLessonCanvas";
import { getSectionMeta } from "../components/module-lessons/moduleSectionRegistry";

const HEADER_H = 56;
const SIDEBAR_W = 401;
const DOC_WIDTH = 816;
const DOC_MIN_HEIGHT = 1056;
const DEFAULT_FONT_SIZE = 11;


type ModuleKey =
  | "analyzing"
  | "brainstorming"
  | "drafting"
  | "revision"
  | "editing"
  | "citing"
  | "researching";

type FormatKey = "bold" | "italic" | "underline";


const EMOTION_TO_MODULE: Record<string, ModuleKey> = {
  lost_assignment: "analyzing",
  asking_assignment: "analyzing",
  no_ideas: "brainstorming",
  brain_blank: "brainstorming",
  messy_draft: "drafting",
  dont_know_start: "drafting",
  weak_argument: "revision",
  does_it_make_sense: "revision",
  fix_grammar: "editing",
  sounds_off: "editing",
  citations_panic: "citing",
  citing_right: "citing",
};

const INLINE_FORMAT_BUTTONS: {
  key: FormatKey;
  icon: React.ElementType;
  label: string;
}[] = [
  { key: "bold", icon: Bold, label: "Bold" },
  { key: "italic", icon: Italic, label: "Italic" },
  { key: "underline", icon: Underline, label: "Underline" },
];

const BLOCK_FORMAT_BUTTONS: {
  command: string;
  icon: React.ElementType;
  label: string;
}[] = [
  { command: "insertUnorderedList", icon: List, label: "Bullet list" },
  { command: "insertOrderedList", icon: ListOrdered, label: "Numbered list" },
  { command: "blockquote", icon: Quote, label: "Quote" },
];


function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hr ago`;
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString();
}


function NotebookPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [notes, setNotes] = useState<
    {
      id: string;
      title: string;
      content: string;
      createdAt: string;
      isFavourite?: boolean;
    }[]
  >([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"notes" | "modules" | "favourites">("notes");
  const [recommendedModules, setRecommendedModules] = useState<ModuleKey[]>([]);
  const [selectedModuleSectionId, setSelectedModuleSectionId] = useState<string | null>(null);
  const [expandedModuleKey, setExpandedModuleKey] = useState<ModuleKey | null>(null);
  const [formatActive, setFormatActive] = useState<Record<FormatKey, boolean>>({
    bold: false,
    italic: false,
    underline: false,
  });
  const [blockFormat, setBlockFormat] = useState<"p" | "h1" | "h2" | "h3">("p");
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [isCustomFontSize, setIsCustomFontSize] = useState(false);
  const [isStyleMenuOpen, setIsStyleMenuOpen] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const isCreatingRef = useRef(false);
  const isSettingContentRef = useRef(false);
  const styleMenuRef = useRef<HTMLDivElement>(null);
  const activeNoteIdRef = useRef<string | null>(null);
  const activeTitleRef = useRef<string>("Untitled");
  const activeFavouriteRef = useRef<boolean>(false);
  const latestHTMLRef = useRef<string>("");
  const saveTimerRef = useRef<number | null>(null);
  const docCanvasRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    fetch("/api/save-note", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        const list = data.notes ?? [];
        setNotes(list);
        if (list.length > 0) {
          setActiveNoteId((prev) => prev ?? list[0].id);
        }
      });
  }, []);


  useEffect(() => {
    try {
      const raw = localStorage.getItem("writingGuide_selectedEmotionKeys_v1");
      if (!raw) return;
      const emotionKeys = JSON.parse(raw) as string[];
      const moduleSet = new Set<ModuleKey>();
      for (const key of emotionKeys) {
        const mk = EMOTION_TO_MODULE[key];
        if (mk) moduleSet.add(mk);
      }
      const list = Array.from(moduleSet);
      setRecommendedModules(list);
      if (list.length > 0) setActiveTab("modules");
    } catch {}
  }, []);


  const handleNavigateModuleSection = useCallback(
    (id: string) => {
      setSelectedModuleSectionId(id);
      const meta = getSectionMeta(id);
      if (meta) setExpandedModuleKey(meta.moduleKey);
      router.replace(`/Notebook?tab=modules&section=${encodeURIComponent(id)}`, {
        scroll: false,
      });
    },
    [router]
  );

  useEffect(() => {
    const tab = searchParams.get("tab");
    const section = searchParams.get("section");
    if (tab === "modules") setActiveTab("modules");
    if (section) {
      setSelectedModuleSectionId(section);
      const meta = getSectionMeta(section);
      if (meta) setExpandedModuleKey(meta.moduleKey);
    }
  }, [searchParams]);


  const activeNote = notes.find((n) => n.id === activeNoteId);

  const filteredNotes = searchQuery.trim()
    ? notes.filter(
        (n) =>
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (n.content &&
            n.content
              .replace(/<[^>]*>/g, "")
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      )
    : notes;

  const favouriteNotes = notes.filter((n) => n.isFavourite);

  const displayNotes =
    activeTab === "notes"
      ? filteredNotes
      : activeTab === "favourites"
        ? favouriteNotes
        : [];

  const normalizeHTML = (html: string) => {
    const text = html
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return text.length === 0 ? "" : html;
  };


  useEffect(() => {
    activeNoteIdRef.current = activeNoteId;
    activeTitleRef.current = activeNote?.title?.trim() || "Untitled";
    activeFavouriteRef.current = !!activeNote?.isFavourite;
  }, [activeNoteId, activeNote]);


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!activeNote) return;
    const title = e.target.value.trim() || "Untitled";
    setNotes((prev) =>
      prev.map((note) => (note.id === activeNoteId ? { ...note, title } : note))
    );
    activeTitleRef.current = title;
    if (latestHTMLRef.current !== undefined) {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = window.setTimeout(() => {
        if (activeNoteIdRef.current === null) return;
        void fetch("/api/save-note", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: activeNoteIdRef.current,
            title,
            content: latestHTMLRef.current,
            isFavourite: activeFavouriteRef.current,
          }),
        });
      }, 600);
    }
  };


  const handleNewNote = async (
    initialContent: string = ""
  ): Promise<
    | {
        note: {
          id: string;
          title: string;
          content: string;
          createdAt: string;
          isFavourite: boolean;
        };
      }
    | undefined
  > => {
    if (isCreatingRef.current) return;
    isCreatingRef.current = true;
    try {
      const res = await fetch("/api/save-note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Untitled", content: initialContent }),
      });
      const text = await res.text();
      let data: {
        note?: {
          id: string;
          title: string;
          content: string;
          createdAt: string;
          isFavourite?: boolean;
        };
        success?: boolean;
      };
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      const note = data?.note ?? {
        id: crypto.randomUUID(),
        title: "Untitled",
        content: initialContent,
        createdAt: new Date().toISOString(),
        isFavourite: false,
      };

      const normalisedNote = {
        ...note,
        content: note.content ?? initialContent ?? "",
        isFavourite: !!note.isFavourite,
      };

      setNotes((prev) => [normalisedNote, ...prev]);
      setActiveNoteId(normalisedNote.id);
      return { note: normalisedNote };
    } finally {
      isCreatingRef.current = false;
    }
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      TextStyle,
      FontSize,
      UnderlineExtension,
      Placeholder.configure({
        placeholder: "Start typing to create a new document...",
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
      }),
    ],
    content: activeNote?.content ?? "",
    onUpdate: ({ editor }) => {
      if (isSettingContentRef.current) return;
      const html = normalizeHTML(editor.getHTML());
      latestHTMLRef.current = html;

      if (activeNoteIdRef.current === null) {
        void handleNewNote(html);
        return;
      }

      const id = activeNoteIdRef.current;
      setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, content: html } : n)));

      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = window.setTimeout(() => {
        void fetch("/api/save-note", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            title: activeTitleRef.current,
            content: html,
            isFavourite: activeFavouriteRef.current,
          }),
        });
      }, 600);
    },
    editorProps: {
      attributes: { class: "doc-canvas" },
      handleDOMEvents: {
        mousedown: (view) => {
          const isEmpty = view.state.doc.textContent.trim().length === 0;
          if (!isEmpty) return false;
          const tr = view.state.tr.setSelection(
            TextSelection.create(view.state.doc, 1)
          );
          view.dispatch(tr);
          return true;
        },
      },
    },
  });

  useEffect(() => {
    if (!editor) return;

    const updateToolbar = () => {
      setFormatActive({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        underline: editor.isActive("underline"),
      });

      if (editor.isActive("heading", { level: 1 })) setBlockFormat("h1");
      else if (editor.isActive("heading", { level: 2 })) setBlockFormat("h2");
      else if (editor.isActive("heading", { level: 3 })) setBlockFormat("h3");
      else setBlockFormat("p");

      const textStyleAttrs = editor.getAttributes("textStyle") as {
        fontSize?: string;
      };
      const currentFontSize = textStyleAttrs?.fontSize;
      if (typeof currentFontSize === "string" && currentFontSize.trim() !== "") {
        const px = parseFloat(currentFontSize);
        if (!Number.isNaN(px)) {
          setFontSize(px);
          setIsCustomFontSize(true);
        } else {
          setFontSize(DEFAULT_FONT_SIZE);
          setIsCustomFontSize(false);
        }
      } else {
        setFontSize(DEFAULT_FONT_SIZE);
        setIsCustomFontSize(false);
      }
    };

    updateToolbar();
    editor.on("selectionUpdate", updateToolbar);
    editor.on("transaction", updateToolbar);
    return () => {
      editor.off("selectionUpdate", updateToolbar);
      editor.off("transaction", updateToolbar);
    };
  }, [editor]);


  useEffect(() => {
    if (!editor) return;
    const target = activeNote?.content ?? "";
    const current = normalizeHTML(editor.getHTML());
    if (current === target) return;

    isSettingContentRef.current = true;
    editor.commands.setContent(target || "");
    setTimeout(() => {
      isSettingContentRef.current = false;
    }, 0);
  }, [activeNoteId, editor]); // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    if (!isStyleMenuOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (!styleMenuRef.current?.contains(e.target as Node)) {
        setIsStyleMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isStyleMenuOpen]);

  
  const FORMAT_COMMANDS: Record<string, () => void> = {
    bold: () => editor?.chain().focus().toggleBold().run(),
    italic: () => editor?.chain().focus().toggleItalic().run(),
    underline: () => editor?.chain().focus().toggleUnderline().run(),
    insertUnorderedList: () => editor?.chain().focus().toggleBulletList().run(),
    insertOrderedList: () => editor?.chain().focus().toggleOrderedList().run(),
    blockquote: () => editor?.chain().focus().toggleBlockquote().run(),
  };

  const handleFormat = (command: string) => FORMAT_COMMANDS[command]?.();


  const handleBlockFormat = (tag: "p" | "h1" | "h2" | "h3") => {
    if (!editor) return;
    if (tag === "p") { editor.chain().focus().setParagraph().run(); return; }
    if (tag === "h1") { editor.chain().focus().setHeading({ level: 1 }).run(); return; }
    if (tag === "h2") { editor.chain().focus().setHeading({ level: 2 }).run(); return; }
    if (tag === "h3") { editor.chain().focus().setHeading({ level: 3 }).run(); return; }
  };

  const adjustFontSize = (delta: 1 | -1) => {
    if (!editor) return;
    const next = Math.min(72, Math.max(8, fontSize + delta));
    if (next === DEFAULT_FONT_SIZE) {
      editor.chain().focus().unsetFontSize().run();
    } else {
      editor.chain().focus().setFontSize(`${next}px`).run();
    }
  };


  const handleDelete = async () => {
    if (!activeNote) return;
    try {
      const res = await fetch("/api/save-note", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: activeNote.id }),
      });
      if (!res.ok) throw new Error("Delete failed");
      const remainingNotes = notes.filter((n) => n.id !== activeNote.id);
      setNotes(remainingNotes);
      setActiveNoteId(remainingNotes[0]?.id ?? null);
    } catch (err) {
      console.error("Failed to delete note:", err);
    }
  };

  const handleClearAll = async () => {
    try {
      const res = await fetch("/api/save-note", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deleteAll: true }),
      });
      if (!res.ok) throw new Error("Clear all failed");
      setNotes([]);
      setActiveNoteId(null);
      editor?.commands.setContent("");
    } catch (err) {
      console.error("Failed to clear all notes:", err);
    } finally {
      setShowClearConfirm(false);
    }
  };

  const handleDownloadPDF = async () => {
    const el = docCanvasRef.current;
    if (!el || isDownloading) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowHeight: el.scrollHeight,
        height: el.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();

      const imgH = (canvas.height * pageW) / canvas.width;

      let yOffset = 0;
      while (yOffset < imgH) {
        if (yOffset > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -yOffset, pageW, imgH);
        yOffset += pageH;
      }

      const filename = `${activeTitleRef.current || "note"}.pdf`;
      pdf.save(filename);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setIsDownloading(false);
    }
  };


  const handleToggleFavourite = async () => {
    if (!activeNote) return;
    const next = !activeNote.isFavourite;
    setNotes((prev) =>
      prev.map((n) => (n.id === activeNoteId ? { ...n, isFavourite: next } : n))
    );
    try {
      await fetch("/api/save-note", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: activeNote.id,
          title: activeNote.title || "Untitled",
          content: activeNote.content,
          isFavourite: next,
        }),
      });
    } catch {
      setNotes((prev) =>
        prev.map((n) => (n.id === activeNoteId ? { ...n, isFavourite: !next } : n))
      );
    }
  };


  const displayTitle = activeNote ? activeNote.title.trim() || "Untitled" : "";

  const moduleBarTitle =
    selectedModuleSectionId !== null
      ? (getSectionMeta(selectedModuleSectionId)?.label ?? "Module")
      : "Writing modules";

  const typeButtonLabel =
    blockFormat === "p"
      ? "Normal text"
      : blockFormat === "h1"
        ? "Title"
        : blockFormat === "h2"
          ? "Subtitle"
          : "Heading 3";

  const textTypeOptions: { label: string; value: "p" | "h1" | "h2" | "h3" }[] = [
    { label: "Normal text", value: "p" },
    { label: "Title", value: "h1" },
    { label: "Subtitle", value: "h2" },
    { label: "Heading 1", value: "h1" },
    { label: "Heading 2", value: "h2" },
    { label: "Heading 3", value: "h3" },
  ];

  const getTypePreviewPx = (tag: "p" | "h1" | "h2" | "h3") => {
    if (isCustomFontSize) return fontSize;
    if (tag === "p") return fontSize;
    if (tag === "h1") return fontSize * 2.36;
    if (tag === "h2") return fontSize * 1.27;
    return fontSize * 1.09;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-asu-black">

      {showClearConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold text-asu-black">Clear all notes?</h2>
              <p className="text-sm text-asu-gray">
                This will permanently delete all your notes. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-asu-black bg-[#f1f1f1] hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}

      <header
        className="sticky top-0 z-50 bg-white border-b border-asu-gray/20 shadow-[0px_2px_12px_rgba(0,0,0,0.08)] shrink-0"
        style={{ height: HEADER_H }}
      >
        <div className="max-w-[1440px] mx-auto px-5 h-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="text-asu-black hover:opacity-80" aria-label="Back">
              <ArrowLeft className="size-8" strokeWidth={2} />
            </Link>
            <div className="flex items-center gap-2">
              <div className="bg-asu-black p-1.5 rounded-md shadow-sm">
                <PenLine className="size-5 text-asu-gold" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-asu-black">Writing Studio</span>
            </div>
          </div>
          <Link
            href="/"
            className="bg-asu-black text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-asu-black/90 transition"
          >
            Log out
          </Link>
        </div>
      </header>

      <div className="flex flex-1 min-h-0 relative">

        <aside
          className="fixed left-0 bottom-0 border-r border-asu-gray/50 flex flex-col bg-white overflow-hidden z-30"
          style={{ top: HEADER_H, width: SIDEBAR_W }}
        >
          <div className="px-4 pt-4 pb-2 shrink-0">
            <div className="h-12 rounded-[40px] bg-[#f1f1f1] flex items-center relative p-1">
              <div
                className="absolute top-1 bottom-1 w-[calc(33.33%-2px)] rounded-[60px] bg-asu-black transition-all duration-200 ease-out"
                style={{
                  left:
                    activeTab === "notes"
                      ? "4px"
                      : activeTab === "modules"
                        ? "calc(33.33% + 2px)"
                        : "calc(66.66% + 2px)",
                }}
              />
              {(["notes", "modules", "favourites"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    router.replace(
                      tab === "modules" ? "/Notebook?tab=modules" : "/Notebook",
                      { scroll: false }
                    );
                  }}
                  className={`relative z-10 flex-1 text-sm font-normal py-2 rounded-full transition capitalize ${
                    activeTab === tab ? "text-white" : "text-asu-gray"
                  }`}
                >
                  {tab === "favourites" ? "Favourites" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-2 shrink-0">
            <div className="flex items-center justify-between gap-2 bg-[#f1f1f1] rounded-lg px-4 py-3">
              <input
                type="text"
                placeholder={activeTab === "modules" ? "Search modules" : "Search"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-asu-gray placeholder:text-asu-gray outline-none"
              />
              <Search className="size-5 text-asu-gray shrink-0" />
            </div>
          </div>

          {activeTab !== "modules" && notes.length > 0 && (
            <div className="px-4 pb-1 shrink-0 flex justify-end">
              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1.5 text-xs text-asu-gray hover:text-red-600 transition py-1"
              >
                <Eraser className="size-3.5" />
                Clear all
              </button>
            </div>
          )}

          <div className="flex-1 overflow-auto px-4 pt-2 pb-6 min-h-0">
            <div className="space-y-0">
              {activeTab === "modules" ? (
                <ModuleSidebarAccordion
                  searchQuery={searchQuery}
                  recommendedModules={recommendedModules}
                  expandedModuleKey={expandedModuleKey}
                  onExpandedChange={setExpandedModuleKey}
                  selectedSectionId={selectedModuleSectionId}
                  onSelectSection={(id) => {
                    setSelectedModuleSectionId(id);
                    const meta = getSectionMeta(id);
                    if (meta) setExpandedModuleKey(meta.moduleKey);
                    router.replace(
                      `/Notebook?tab=modules&section=${encodeURIComponent(id)}`,
                      { scroll: false }
                    );
                  }}
                />
              ) : (
                displayNotes.map((note) => {
                  const isActive = note.id === activeNoteId;
                  return (
                    <button
                      key={note.id}
                      type="button"
                      onClick={() => setActiveNoteId(note.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-5 rounded transition ${
                        isActive
                          ? "bg-asu-gold border border-asu-black"
                          : "border-b border-[#dedede] text-asu-gray hover:bg-gray-50/80"
                      }`}
                    >
                      <span
                        className={`text-sm truncate pr-2 ${
                          isActive ? "font-bold text-asu-black" : "font-normal"
                        }`}
                      >
                        {note.title?.trim() || "Untitled"}
                      </span>
                      <span className={`text-xs shrink-0 ${isActive ? "text-asu-gray" : ""}`}>
                        {formatRelativeTime(note.createdAt)}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </aside>

        <main
          className="flex-1 flex flex-col min-w-0 min-h-0 bg-[#f7f7f7]"
          style={{ marginLeft: SIDEBAR_W }}
        >
          <div className="sticky top-14 z-40 shrink-0 bg-white border-b border-asu-gray/50 px-4 py-3 flex flex-col gap-2 shadow-sm">
            {activeTab === "modules" ? (
              <div className="flex items-center min-h-[44px]">
                <p className="text-xl font-semibold text-asu-black truncate pr-4">
                  {moduleBarTitle}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-start">
                  <input
                    type="text"
                    value={displayTitle}
                    onChange={handleTitleChange}
                    disabled={!activeNote}
                    className="text-xl font-normal text-asu-black text-left bg-transparent border-none outline-none focus:ring-0 w-full max-w-md disabled:bg-transparent disabled:placeholder:text-asu-black/40"
                    placeholder={
                      activeNote ? "Untitled" : "Start typing to create a document"
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 h-11">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      {INLINE_FORMAT_BUTTONS.map(({ key, icon: Icon, label }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleFormat(key)}
                          aria-label={label}
                          className={`p-2 rounded-md size-9 flex items-center justify-center transition ${
                            formatActive[key]
                              ? "bg-asu-gray/20 text-asu-black"
                              : "bg-[#f1f1f1] hover:bg-gray-200 text-asu-black"
                          }`}
                        >
                          <Icon className="size-4" />
                        </button>
                      ))}

                      {BLOCK_FORMAT_BUTTONS.map(({ command, icon: Icon, label }) => (
                        <button
                          key={command}
                          type="button"
                          onClick={() => handleFormat(command)}
                          aria-label={label}
                          className="p-2 rounded-md bg-[#f1f1f1] hover:bg-gray-200 transition size-9 flex items-center justify-center text-asu-black"
                        >
                          <Icon className="size-4" />
                        </button>
                      ))}
                    </div>

                    <div className="relative" ref={styleMenuRef}>
                      <button
                        type="button"
                        onClick={() => setIsStyleMenuOpen((v) => !v)}
                        className="bg-[#f9f9f9] rounded px-3 py-2 h-9 text-sm text-asu-black border-0 cursor-pointer min-w-[140px] focus:ring-2 focus:ring-asu-gold/50 focus:outline-none flex items-center justify-between gap-2"
                        aria-label="Paragraph style"
                      >
                        <span className="truncate">{typeButtonLabel}</span>
                        <ChevronDown
                          className={`size-4 text-asu-gray transition ${
                            isStyleMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isStyleMenuOpen && (
                        <div
                          className="absolute left-0 mt-2 bg-white border border-asu-gray/20 shadow-lg rounded-lg overflow-hidden z-50"
                          role="menu"
                          aria-label="Paragraph style options"
                        >
                          {textTypeOptions.map((opt) => {
                            const isActive = opt.value === blockFormat;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => {
                                  handleBlockFormat(opt.value);
                                  setIsStyleMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition flex items-center justify-between gap-3 ${
                                  isActive ? "bg-asu-gold/20" : ""
                                }`}
                                role="menuitem"
                              >
                                <span
                                  className={`text-sm ${
                                    isActive
                                      ? "text-asu-black font-semibold"
                                      : "text-asu-gray"
                                  }`}
                                >
                                  {opt.label}
                                </span>
                                <span
                                  className={`leading-none ${
                                    opt.value === "p" ? "font-normal" : "font-bold"
                                  } text-asu-black`}
                                  style={{
                                    fontSize: `${getTypePreviewPx(opt.value)}px`,
                                  }}
                                >
                                  Aa
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 bg-[#f9f9f9] rounded px-3 py-2 h-9">
                      <span className="text-sm text-asu-gray">Arial</span>
                      <ChevronDown className="size-4 text-asu-gray" />
                    </div>

                    <div className="flex items-center rounded bg-[#f9f9f9] overflow-hidden h-9">
                      <button
                        type="button"
                        onClick={() => adjustFontSize(-1)}
                        className="p-2 hover:bg-gray-200"
                        aria-label="Decrease font size"
                      >
                        <span className="text-xs text-asu-black">−</span>
                      </button>
                      <span className="text-sm text-asu-black px-2 min-w-[2rem] text-center">
                        {fontSize}
                      </span>
                      <button
                        type="button"
                        onClick={() => adjustFontSize(1)}
                        className="p-2 hover:bg-gray-200"
                        aria-label="Increase font size"
                      >
                        <span className="text-xs text-asu-black">+</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleToggleFavourite}
                      disabled={!activeNote}
                      className={`size-9 rounded flex items-center justify-center transition disabled:opacity-50 ${
                        activeNote?.isFavourite
                          ? "bg-asu-gold/20 text-asu-gold hover:bg-asu-gold/30"
                          : "bg-[#f1f1f1] text-asu-gray hover:text-asu-black hover:bg-gray-200"
                      }`}
                      aria-label={
                        activeNote?.isFavourite
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                    >
                      <Star
                        className={`size-5 ${activeNote?.isFavourite ? "fill-asu-gold" : ""}`}
                        strokeWidth={1.5}
                      />
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-asu-black text-sm text-asu-black hover:bg-gray-100"
                    >
                      Open in doc
                      <FileText className="size-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNewNote("")}
                      className="size-9 rounded flex items-center justify-center bg-asu-black text-white hover:bg-asu-black/90 shadow-sm"
                      aria-label="New note"
                    >
                      <Plus className="size-5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={!activeNote}
                      className="size-9 rounded flex items-center justify-center bg-[#f1f1f1] text-asu-black hover:bg-gray-200 disabled:opacity-50"
                      aria-label="Delete note"
                    >
                      <Trash2 className="size-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadPDF}
                      disabled={!activeNote || isDownloading}
                      className="size-9 rounded flex items-center justify-center bg-[#f1f1f1] text-asu-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      aria-label={isDownloading ? "Generating PDF…" : "Download as PDF"}
                      title="Download as PDF"
                    >
                      {isDownloading ? (
                        // Simple spinner while generating
                        <svg
                          className="animate-spin size-4 text-asu-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                      ) : (
                        <Download className="size-4" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            className={`flex-1 overflow-auto py-8 min-h-0 flex justify-center px-4 ${
              activeTab === "modules" ? "hidden" : ""
            }`}
            aria-hidden={activeTab === "modules"}
          >
            <div
              className="bg-white border border-asu-gray/50 rounded shadow-sm overflow-hidden flex flex-col"
              style={{ width: DOC_WIDTH, minHeight: DOC_MIN_HEIGHT }}
            >
              <div
                ref={docCanvasRef}
                className="flex-1 min-h-[1000px] w-full px-12 py-12 text-asu-black leading-6 tracking-[0.28px] font-normal focus:outline-none"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <EditorContent editor={editor} />
              </div>
            </div>
          </div>

          <div
            className={`flex-1 overflow-auto py-6 min-h-0 flex justify-center px-4 bg-[#f7f7f7] ${
              activeTab !== "modules" ? "hidden" : ""
            }`}
            aria-hidden={activeTab !== "modules"}
          >
            {selectedModuleSectionId ? (
              <ModuleLessonCanvas
                sectionId={selectedModuleSectionId}
                onNavigateToSection={handleNavigateModuleSection}
              />
            ) : (
              <p className="text-center text-asu-gray py-16 text-sm max-w-md">
                Select a module section from the left to open the lesson.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function NotebookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] text-asu-gray text-sm">
          Loading notebook…
        </div>
      }
    >
      <NotebookPageInner />
    </Suspense>
  );
}