import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export default async function NotebookPage() {
    const filePath = path.join(process.cwd(), "public", "notes.json");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let notes: any[] = [];

    try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        notes = JSON.parse(fileData);
    } catch {
        notes = [];
    }

    const mainNote = notes[0] || { title: "No Notes Yet", content: "" };

    return (
        <div className="min-h-screen flex flex-col bg-[url(/background.jpeg)] bg-cover bg-center text-black" style={{ fontFamily: "Arial, sans-serif" }}>
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
                                className={`p-4 rounded-xl shadow-sm border cursor-pointer transition ${note.id === mainNote.id
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
                        <h2 className="text-xl font-bold">Writer’s Section</h2>
                        <button className="bg-[#FFC627] px-4 py-2 rounded-full border border-black font-semibold hover:bg-yellow-500 text-black">
                            + New Note
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Title</label>
                            <input
                                type="text"
                                value={mainNote.title}
                                readOnly
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Content</label>
                            <textarea
                                value={mainNote.content}
                                readOnly
                                className="w-full border border-gray-300 rounded-lg p-3 h-40 bg-gray-100 resize-none text-black"
                            />
                        </div>
                        <div className="text-right">
                            <button className="bg-[#FFC627] px-6 py-2 rounded-full border border-black font-semibold hover:bg-yellow-500 text-black">
                                Save
                            </button>
                        </div>
                    </div>
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
                    <span className="font-bold">
                        #1 in the U.S. for innovation
                    </span>
                </div>
                <div className="text-center text-xs mt-2 text-black">
                    © Copyright and Trademark · Accessibility · Privacy · Terms of Use · Emergency · COVID-19 Information
                </div>
            </footer>
        </div>
    );
}
