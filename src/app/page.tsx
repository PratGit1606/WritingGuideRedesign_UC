'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaBookOpen, FaRegStickyNote } from 'react-icons/fa';
import Link from 'next/link';
import NotebookBlock from './components/Notebook';




const WritingGuidePage: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <header className="flex items-center justify-between px-10 py-6 shadow-sm bg-white bg-cover bg-center">
        <img src="/logo.png" alt="ASU Logo" className="h-20" />
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Resources</a>
          <a href="#" className="hover:text-yellow-500">Tutors</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-black text-lg">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
        </div>
      </header>

      <section className="px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
              Build your <br /> Paper from <br />
              <span className="text-yellow-400">Draft to Final.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-md">
              Personalized writing assistance for ASU students. Interactive tools, expert tutoring, and resources to help you excel.
            </p>
            <Link href="/EditingPage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                Get Started
              </motion.button>
            </Link>

          </motion.div>

          <NotebookBlock />

        </div>
      </section>

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image with Label Overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
          <img
            src="/GuideHero.jpg" // Replace with actual path
            alt="Writing Center"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-yellow-400 text-black text-xl font-bold px-4 py-2 rounded-sm shadow-md">
            Writing Centers
          </div>
        </div>

        <div className="text-left max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold text-black leading-tight">
            About the <span className="text-yellow-400">Writing Guide</span>
          </h2>

          <p className="mt-6 text-lg font-medium text-gray-700 leading-relaxed">
            Our comprehensive writing guide is designed specifically for ASU students across all disciplines. Whether you&lsquo;re writing a research paper, literary analysis, lab report, or personal essay, our guide provides step-by-step instructions and examples to help you excel.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Structured writing process from brainstorming to final draft",
              "Discipline-specific writing conventions and formats",
              "Common pitfalls and how to avoid them",
              "Expert tips from experienced ASU writing tutors",
              "Interactive examples and templates you can customize"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                <div className="w-6 h-6 flex items-center justify-center mt-1 bg-yellow-400 border border-black rounded-full">
                  <span className="-ml-[0.5px] text-sm font-semibold text-black">{'▶'}</span>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="px-6 md:px-10 py-20">
        <h2 className="text-center text-4xl font-bold mb-12">
          Our <span className="text-yellow-400">Writing Tools</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {/* Citation Generator */}
          <div className="bg-white border border-yellow-400 rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaQuoteRight className="text-3xl text-black" />
              <h3 className="text-xl md:text-2xl font-bold">Citation Generator</h3>
              <p className="text-gray-700">
                Generate perfect citations in APA, MLA, Chicago, and more formats with our easy-to-use tool.
              </p>
            </div>
            <button className="mt-6 bg-black text-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition">
              Try Now
            </button>
          </div>

          {/* Writing Guide */}
          <div className="bg-white border border-yellow-400 rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaBookOpen className="text-3xl text-black" />
              <h3 className="text-xl md:text-2xl font-bold">Writing Guide</h3>
              <p className="text-gray-700">
                Get inspired with our interactive writing guide to overcome writer&apos;s block.
              </p>
            </div>
            <button className="mt-6 bg-black text-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition">
              Try Now
            </button>
          </div>

          {/* Notebook */}
          <div className="bg-white border border-yellow-400 rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaRegStickyNote className="text-3xl text-black" />
              <h3 className="text-xl md:text-2xl font-bold">Notebook</h3>
              <p className="text-gray-700">
                Save your progress, notes, and drafts in your personal notebook as you work.
              </p>
            </div>
            <button className="mt-6 bg-black text-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition">
              Try Now
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-yellow-400 py-6 px-10 text-sm text-black text-center">
        <div className="mb-2">Maps and Locations | Jobs | Directory | Contact ASU | My ASU</div>
        <div className="text-xs">© 2025 Arizona State University | Privacy | Terms of Use | Emergency | COVID-19 Information</div>
      </footer>
    </div>
  );
};

export default WritingGuidePage;
