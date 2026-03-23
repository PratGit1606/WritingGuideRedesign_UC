import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isFavourite: boolean;
}

const redis = Redis.fromEnv();
const NOTES_KEY = "notes";
const normalizeId = (id: unknown): string => String(id);
const parseNote = (n: unknown): Note => {
  if (typeof n === "string") return JSON.parse(n) as Note;
  return n as Note;
};

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    const newNote: Note = {
      id: crypto.randomUUID(),
      title: title ?? "Untitled",
      content: content ?? "",
      createdAt: new Date().toISOString(),
      isFavourite: false,
    };

    await redis.lpush(NOTES_KEY, JSON.stringify(newNote));

    return NextResponse.json({ success: true, note: newNote });
  } catch (err) {
    console.error("save-note POST error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to create note" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, title, content, isFavourite } = await req.json();

    const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);
    const notes = notesRaw.map(parseNote);
    const normalizedId = normalizeId(id);

    const updatedNotes = notes.map((note) =>
      normalizeId(note.id) === normalizedId
        ? {
            ...note,
            title: title !== undefined ? title : note.title,
            content: content !== undefined ? content : note.content,
            isFavourite: isFavourite !== undefined ? isFavourite : note.isFavourite,
          }
        : note
    );

    if (updatedNotes.length > 0) {
      await redis.del(NOTES_KEY);
      await redis.rpush(NOTES_KEY, ...updatedNotes.map((n) => JSON.stringify(n)));
    }

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("save-note PUT error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to update note" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id, deleteAll } = await req.json();

    if (deleteAll === true) {
      await redis.del(NOTES_KEY);
      return NextResponse.json({ success: true });
    }

    const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);
    const notes = notesRaw.map(parseNote);
    const normalizedId = normalizeId(id);

    const updatedNotes = notes.filter(
      (note) => normalizeId(note.id) !== normalizedId
    );

    await redis.del(NOTES_KEY);
    if (updatedNotes.length > 0) {
      await redis.rpush(NOTES_KEY, ...updatedNotes.map((n) => JSON.stringify(n)));
    }

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("save-note DELETE error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to delete note" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);
    const notes = notesRaw.map(parseNote);
    return NextResponse.json({ notes });
  } catch (err) {
    console.error("save-note GET error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch notes" },
      { status: 500 }
    );
  }
}