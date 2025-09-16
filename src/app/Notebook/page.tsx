"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotebookPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [notes, setNotes] = useState<any[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/notes.json")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        if (data.length > 0) setActiveNoteId(data[0].id);
      });
  }, []);

  const activeNote = notes.find((note) => note.id === activeNoteId);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!activeNote) return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === activeNoteId ? { ...note, title: e.target.value } : note
      )
    );
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!activeNote) return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === activeNoteId ? { ...note, content: e.target.value } : note
      )
    );
  };

  const handleSave = async () => {
    if (!activeNote) return;

    await fetch("/api/save-note", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: activeNote.id,
        title: activeNote.title,
        content: activeNote.content,
      }),
    });
  };

  const handleNewNote = async () => {
    const res = await fetch("/api/save-note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Untitled Note",
        content: "",
      }),
    });
    const data = await res.json();

    setNotes((prev) => [data.note, ...prev]);
    setActiveNoteId(data.note.id);
  };

  const handleDelete = async () => {
    if (!activeNote) return;

    await fetch("/api/save-note", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: activeNote.id }),
    });

    setNotes((prev) => prev.filter((note) => note.id !== activeNote.id));
    setActiveNoteId(null);
  };


  return (
    <div
      className="min-h-screen flex flex-col bg-[url(/background.jpeg)] bg-cover bg-center text-black"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <header className="flex items-center justify-between px-10 py-4 shadow-sm bg-white">
        <Image
          src="/logo.png"
          alt="ASU Logo"
          width={100}
          height={100}
          className="h-20 w-auto"
        />
        <nav className="hidden md:flex gap-8 text-lg text-black">
          <Link href="/" className="hover:text-[#FFC627]">Home</Link>
          <a href="#" className="hover:text-[#FFC627]">Resources</a>
          <a href="#" className="hover:text-[#FFC627]">Tutors</a>
          <a href="#" className="hover:text-[#FFC627]">About</a>
          <a href="#" className="hover:text-[#FFC627]">Contact</a>
        </nav>
        <div>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800">
            Sign Out
          </button>
        </div>
      </header>

      <div className="flex flex-1 p-8 gap-8">
        <aside className="w-1/3 bg-white border rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-3xl font-bold">
            My <span style={{ color: "#FFC627" }}>Notebook</span>
          </h2>
          <div className="space-y-4">
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => setActiveNoteId(note.id)}
                className={`p-4 rounded-xl shadow-sm border cursor-pointer transition ${note.id === activeNoteId
                  ? "bg-[#FFC627] text-black"
                  : "bg-white hover:bg-gray-100"
                  }`}
              >
                <h3 className="text-sm font-semibold">{note.title}</h3>
                <p className="text-xs text-black line-clamp-2 mt-1">
                  {note.content}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex-1 bg-white border rounded-xl shadow-md">
          <div className="flex justify-between items-center bg-black text-white px-6 py-3 rounded-t-xl">
            <h2 className="text-[25px] font-bold">Writer’s Section</h2>
            <button
              onClick={handleNewNote}
              className="bg-[#FFC627] px-4 py-2 rounded-full border border-black font-semibold hover:bg-yellow-500 text-black"
            >
              + New Note
            </button>
          </div>

          {activeNote ? (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Title</label>
                <input
                  type="text"
                  value={activeNote.title}
                  onChange={handleTitleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Content</label>
                <textarea
                  value={activeNote.content}
                  onChange={handleContentChange}
                  className="w-full border border-gray-300 rounded-lg p-3 h-40 bg-white resize-none text-black"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleDelete}
                  className="bg-black text-white px-6 py-2 rounded-full border border-black font-semibold hover:bg-red-800"
                >
                  Delete
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#FFC627] px-6 py-2 rounded-full border border-black font-semibold hover:bg-yellow-500 text-black"
                >
                  Save
                </button>
              </div>

            </div>
          ) : (
            <p className="p-6">No note selected</p>
          )}
        </section>
      </div>

      <footer className="bg-[#FFC627] text-black py-4 text-sm border-t">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#">Maps and Locations</a>
            <a href="#">Jobs</a>
            <a href="#">Directory</a>
            <a href="#">Contact ASU</a>
            <a href="#">My ASU</a>
          </div>
          <span className="font-bold">#1 in the U.S. for innovation</span>
        </div>
        <div className="text-center text-xs mt-2 text-black">
          © Copyright and Trademark · Accessibility · Privacy · Terms of Use ·
          Emergency · COVID-19 Information
        </div>
      </footer>
    </div>
  );
}
