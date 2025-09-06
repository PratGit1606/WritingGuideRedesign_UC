'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotebookBlock() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();


  const handleSave = async () => {
    await fetch("/api/save-note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    router.push("/Notebook");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="relative bg-white shadow-xl p-6 rounded-[32px] border border-black w-full max-w-xl mx-auto"
    >
      <div className="absolute -top-5 left-5 hover:scale-105 transition">
        <div className="bg-gray-300 border border-black text-black text-sm font-semibold px-4 py-1 rounded-full shadow-sm">
          My Notebook
        </div>
      </div>

      <input
        type="text"
        placeholder="Your Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-black rounded-full px-4 py-3 mb-6 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <textarea
        placeholder="Your Text Here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-black rounded-[20px] p-4 h-36 text-gray-800 placeholder:italic placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6 resize-none"
      />

      <div className="text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="bg-yellow-400 px-6 py-2 rounded-full border border-black font-semibold text-black shadow-sm"
        >
          Save
        </motion.button>
      </div>
    </motion.div>
  );
}
