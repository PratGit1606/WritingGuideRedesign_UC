import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const NOTES_KEY = "notes"; 

console.log("URL", process.env.UPSTASH_REDIS_REST_URL);
console.log("TOKEN", process.env.UPSTASH_REDIS_REST_TOKEN?.slice(0,6));

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const newNote = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  await redis.lpush(NOTES_KEY, JSON.stringify(newNote));

  return NextResponse.json({ success: true, note: newNote });
}

export async function PUT(req: Request) {
  const { id, title, content } = await req.json();

  // fetch all notes
  const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);
  const notes = notesRaw.map((n: string) => JSON.parse(n));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedNotes = notes.map((note: any) =>
    note.id === id ? { ...note, title, content } : note
  );

  // overwrite the list in Redis
  if (updatedNotes.length > 0) {
    await redis.del(NOTES_KEY);
    await redis.rpush(NOTES_KEY, ...updatedNotes.map((n) => JSON.stringify(n)));
  }

  return NextResponse.json({ success: true, id });
}

// DELETE
export async function DELETE(req: Request) {
  const { id } = await req.json();

  const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);
  const notes = notesRaw.map((n: string) => JSON.parse(n));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedNotes = notes.filter((note: any) => note.id !== id);

  await redis.del(NOTES_KEY);
  if (updatedNotes.length > 0) {
    await redis.rpush(NOTES_KEY, ...updatedNotes.map((n) => JSON.stringify(n)));
  }

  return NextResponse.json({ success: true, id });
}

export async function GET() {
  const notesRaw = await redis.lrange(NOTES_KEY, 0, -1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const notes = notesRaw.map((n: any) => {
    if (typeof n === "string") {
      try {
        return JSON.parse(n);
      } catch {
        return n;
      }
    }
    return n;
  });

  return NextResponse.json({ notes });
}

