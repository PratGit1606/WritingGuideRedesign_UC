"use client";
import { Search, BookOpen, FileText, Pen, CheckSquare, Edit, ListChecks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

const steps = [
  {
    id: 1,
    label: "Analysing",
    desc: "Still wrapping my head around the assignment",
    icon: <Search size={20} />,
    color: "bg-[#D6F5F5]",
    highlight: true,

  },
  {
    id: 2,
    label: "Brainstorming",
    desc: "Brainstorming ideas for my paper",
    icon: <BookOpen size={20} />,
    color: "bg-[#F5E6F5]",
  },
  {
    id: 3,
    label: "Researching",
    desc: "Trying to find my sources",
    icon: <FileText size={20} />,
    color: "bg-[#FFF5CC]",
  },
  {
    id: 4,
    label: "Drafting",
    desc: "Trying to write out my ideas",
    icon: <Pen size={20} />,
    color: "bg-[#FFEFEF]",
  },
  {
    id: 5,
    label: "Revision",
    desc: "Reworking my ideas and making sure my message is coming across",
    icon: <CheckSquare size={20} />,
    color: "bg-[#E6F0FF]",
  },
  {
    id: 6,
    label: "Editing",
    desc: "Checking my grammar and word choice",
    icon: <Edit size={20} />,
    color: "bg-[#FFC627]",
    highlight: true,
  },
  {
    id: 7,
    label: "Citing",
    desc: "Making sure my citations and format are right",
    icon: <ListChecks size={20} />,
    color: "bg-[#FFE6E6]",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[url(/background.jpeg)] bg-cover bg-center font-sans text-black">
      <header className="flex items-center justify-between px-10 shadow-sm bg-white">
        <Image
          src="/logo.png"
          alt="ASU Logo"
          width={80}
          height={80}
          className="h-20 w-auto"
        />
        <nav className="hidden md:flex gap-8 text-lg">
          <Link href="/" className="hover:text-[#FFC627]">Home</Link>
          <a href="#" className="hover:text-[#FFC627]">Resources</a>
          <a href="#" className="hover:text-[#FFC627]">Tutors</a>
          <a href="#" className="hover:text-[#FFC627]">About</a>
          <a href="#" className="hover:text-[#FFC627]">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-black text-lg">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
        </div>
      </header>

      {/* Hero text */}
      <div className="bg-white mt-6 rounded-xl border-2 border-[#FFC627] text-center max-w-3xl py-10 mx-auto">
        <h1 className="text-[60px] font-bold">
          Writing <span className="text-[#FFC627]">Guide</span>
        </h1>
        <h2 className="text-[30px] mt-2 font-medium">
          Your Reference Guide for Writing Assignments
        </h2>
        <p className="mt-3 text-lg leading-relaxed">
          This comprehensive guide will walk you through each stage of the
          writing process, from analyzing your assignment to submitting your
          final draft.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 mx-6 sm:mx-10 lg:mx-16">
        {steps.map((step) => {
          const link =
            step.label === "Analysing"
              ? "/AnalysingPage"
              : step.label === "Editing"
                ? "/EditingPage"
                : null;

          const content = (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-xl p-5 mt-4 transition duration-300 ease-in-out 
        ${step.highlight
                  ? "bg-[#FFC627] font-semibold shadow-lg scale-105"
                  : "bg-white border hover:shadow-lg"
                }`}
            >
              <div
                className={`absolute -top-4 left-4 rounded-full p-3 shadow-md ring-2 ring-white ${step.color}`}
              >
                {step.icon}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold">{step.label}</h3>
                <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                {step.highlight && (
                  <p className="mt-2 text-xs font-medium italic animate-pulse text-black">
                    Available Now →
                  </p>
                )}
              </div>

              <div className="absolute bottom-3 right-3 text-sm font-bold bg-black text-white px-2 py-1 rounded-full shadow-md">
                {step.id}
              </div>
            </motion.div>
          );

          // If this step has a link, wrap it
          return link ? (
            <Link key={step.id} href={link} className="cursor-pointer">
              {content}
            </Link>
          ) : (
            content
          );
        })}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border rounded-xl shadow-sm p-5 flex flex-col justify-between bg-white hover:shadow-lg transition duration-300 ease-in-out"
        >
          <div>
            <h3 className="text-lg font-bold">Track your Progress</h3>
            <p className="mt-1 text-sm text-gray-600">
              Keep all your writing projects organized in one place. Track your
              progress and access your notes anytime, anywhere.
            </p>
          </div>
          <Link
            href="/Notebook"
            className="mt-4 block w-full bg-black text-white py-2 rounded-lg font-medium text-center hover:bg-gray-800 transition"
          >
            My Notebook
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="mb-4">
          Feel like you know the basics, but just need a look over?
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
          Talk to one of our tutors.
        </button>
      </div>
      <div className="py-4" />
    </div>
  );
}
