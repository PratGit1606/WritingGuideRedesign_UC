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
