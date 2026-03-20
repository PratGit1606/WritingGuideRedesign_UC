'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaQuoteRight, FaBookOpen, FaRegStickyNote } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import LandingDesktopMock from './components/LandingDesktopMock';
import EmotionRecommendationModal from './components/EmotionRecommendationModal';
import ContactSection from './components/ContactSection';


const WritingGuidePage: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="relative min-h-screen font-sans text-asu-gray bg-[url(/background.jpeg)] bg-cover bg-center">

      <section className="px-6 sm:px-10 py-16 md:py-24 pb-28 md:pb-36">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="hero-metal-tag-wrap mb-4 md:mb-5"
            >
              <span className="hero-metal-tag">ASU Writing Guide</span>
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-asu-black" style={{ color: '#000' }}>
              Write with confidence,
              <br />
              from idea to <span className="text-asu-gold" style={{ color: '#FFC627' }}>final draft</span>.
            </h1>
            <p className="mt-5 text-lg max-w-xl mx-auto text-asu-gray" style={{ color: '#747474' }}>
              Personalized writing assistance for ASU students. Interactive tools, expert tutoring, and resources to help you excel.
            </p>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setShowPopup(true)}
              className="mt-5 z-50 bg-asu-black text-asu-white px-8 py-2 rounded-full text-lg shadow-md transition-colors duration-200 hover:bg-asu-black/85"
            >
              Get Started
            </motion.button>
          </motion.div>

          <LandingDesktopMock />
        </div>
      </section>

      <EmotionRecommendationModal
        open={showPopup}
        onClose={() => setShowPopup(false)}
        mode="landing"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto transition-opacity duration-200 hover:opacity-95">
          <Image
            src="/GuideHero.jpg"
            alt="Writing Center"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-asu-gold text-asu-black text-xl font-bold px-4 py-2 rounded-sm shadow-md">
            Writing Centers
          </div>
        </div>

        <div className="text-left max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold text-asu-black leading-tight">
            About the <span className="text-asu-maroon">Writing Guide</span>
          </h2>

          <p className="mt-6 text-lg font-medium text-asu-gray leading-relaxed">
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
              <li key={i} className="flex items-start gap-3 text-asu-black text-base">
                <div className="w-6 h-6 flex items-center justify-center mt-1 bg-asu-gold border border-asu-black rounded-full">
                  <span className="-ml-[0.5px] text-sm font-semibold text-asu-black">{'▶'}</span>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>


      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-semibold text-asu-black mb-14">
          Our <span className="text-asu-maroon">Writing Tools</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="group tools-card-bg rounded-3xl p-6 flex flex-col min-h-[340px] text-left transition-shadow duration-200 shadow-[0_12px_28px_rgba(0,0,0,0.25),0_4px_10px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <FaQuoteRight className="text-2xl text-asu-gray shrink-0 transition-colors duration-300 group-hover:text-asu-gold" />
            <div className="flex flex-col justify-end flex-1 mt-auto pt-6">
              <h3 className="text-lg font-semibold text-white tracking-tight">Citation Generator</h3>
              <p className="text-sm text-white/80 leading-relaxed mt-1.5">
                Generate perfect citations in APA, MLA, Chicago, and more formats with our easy-to-use tool.
              </p>
              <button className="mt-4 text-sm font-medium text-white hover:text-asu-gold transition-colors w-fit">
                Try Now →
              </button>
            </div>
          </div>

          <Link
            href="/Opening"
            className="group tools-card-bg rounded-3xl p-6 flex flex-col min-h-[340px] text-left transition-shadow duration-200 shadow-[0_12px_28px_rgba(0,0,0,0.25),0_4px_10px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <FaBookOpen className="text-2xl text-asu-gray shrink-0 transition-colors duration-300 group-hover:text-asu-gold" />
            <div className="flex flex-col justify-end flex-1 mt-auto pt-6">
              <h3 className="text-lg font-semibold text-white tracking-tight">Writing Guide</h3>
              <p className="text-sm text-white/80 leading-relaxed mt-1.5">
                Get inspired with our interactive writing guide to overcome writer&apos;s block.
              </p>
              <span className="mt-4 text-sm font-medium text-white group-hover:text-asu-gold transition-colors w-fit">
                Try Now →
              </span>
            </div>
          </Link>

          <Link
            href="/Notebook"
            className="group tools-card-bg rounded-3xl p-6 flex flex-col min-h-[340px] text-left transition-shadow duration-200 shadow-[0_12px_28px_rgba(0,0,0,0.25),0_4px_10px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <FaRegStickyNote className="text-2xl text-asu-gray shrink-0 transition-colors duration-300 group-hover:text-asu-gold" />
            <div className="flex flex-col justify-end flex-1 mt-auto pt-6">
              <h3 className="text-lg font-semibold text-white tracking-tight">Notebook</h3>
              <p className="text-sm text-white/80 leading-relaxed mt-1.5">
                Save your progress, notes, and drafts in your personal notebook as you work.
              </p>
              <span className="mt-4 text-sm font-medium text-white group-hover:text-asu-gold transition-colors w-fit">
                Try Now →
              </span>
            </div>
          </Link>
        </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default WritingGuidePage;
