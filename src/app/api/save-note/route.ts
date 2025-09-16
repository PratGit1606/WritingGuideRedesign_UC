import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const filePath = path.join(process.cwd(), "public", "notes.json");

  let notes = [];
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    notes = JSON.parse(fileData);
  } catch {
    notes = [];
  }

  const newNote = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  notes.unshift(newNote);
  await fs.writeFile(filePath, JSON.stringify(notes, null, 2));

  return NextResponse.json({ success: true, note: newNote });
}

export async function PUT(req: Request) {
  const filePath = path.join(process.cwd(), "public", "notes.json");
  const { id, title, content } = await req.json();

  let notes = [];
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    notes = JSON.parse(fileData);
  } catch {
    notes = [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedNotes = notes.map((note: any) =>
    note.id === id ? { ...note, title, content } : note
  );

  await fs.writeFile(filePath, JSON.stringify(updatedNotes, null, 2));

  return NextResponse.json({ success: true, id });
}

export async function DELETE(req: Request) {
  const filePath = path.join(process.cwd(), "public", "notes.json");
  const { id } = await req.json();

  let notes = [];
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    notes = JSON.parse(fileData);
  } catch {
    notes = [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedNotes = notes.filter((note: any) => note.id !== id);

  await fs.writeFile(filePath, JSON.stringify(updatedNotes, null, 2));

  return NextResponse.json({ success: true, id });
}
