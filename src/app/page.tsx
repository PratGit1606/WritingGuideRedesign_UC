'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="group relative flex flex-col min-h-[340px] rounded-2xl p-6 text-left overflow-hidden
              bg-white/20 backdrop-blur-md
              border border-white/40
              shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]
              hover:bg-white/30 hover:border-white/60
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.1)]
              transition-all duration-300 ease-out
              hover:-translate-y-1">

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center
                bg-white/30 border border-white/40 backdrop-blur-sm
                group-hover:bg-asu-gold/20 group-hover:border-asu-gold/40
                transition-all duration-300">
                <FaQuoteRight className="text-lg text-black/80 group-hover:text-asu-gold transition-colors duration-300" />
              </div>

              <div className="flex flex-col text-black justify-end flex-1 mt-auto pt-6">
                <h3 className="text-lg font-semibold text-black tracking-tight drop-shadow-sm">
                  Citation Generator
                </h3>
                <p className="text-sm text-black/75 leading-relaxed mt-2">
                  Generate perfect citations in APA, MLA, Chicago, and more formats with our easy-to-use tool.
                </p>
                <button className="mt-5 w-fit text-sm font-medium text-black/80 hover:text-asu-gold
                  flex items-center gap-1.5 transition-colors duration-200
                  border-b border-black/20 hover:border-asu-gold/60 pb-0.5">
                  Try Now <span className="text-xs">→</span>
                </button>
              </div>
            </div>

            {/* Writing Guide Card */}
            <Link
              href="/Opening"
              className="group relative flex flex-col min-h-[340px] rounded-2xl p-6 text-left overflow-hidden
                bg-white/20 backdrop-blur-md
                border border-white/40
                shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]
                hover:bg-white/30 hover:border-white/60
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-out
                hover:-translate-y-1">

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center
                bg-white/30 border border-white/40 backdrop-blur-sm
                group-hover:bg-asu-gold/20 group-hover:border-asu-gold/40
                transition-all duration-300">
                <FaBookOpen className="text-lg text-black/80 group-hover:text-asu-gold transition-colors duration-300" />
              </div>

              <div className="flex flex-col justify-end flex-1 mt-auto pt-6">
                <h3 className="text-lg font-semibold text-black tracking-tight drop-shadow-sm">
                  Writing Guide
                </h3>
                <p className="text-sm text-black/75 leading-relaxed mt-2">
                  Get inspired with our interactive writing guide to overcome writer&apos;s block.
                </p>
                <span className="mt-5 w-fit text-sm font-medium text-black/80 group-hover:text-asu-gold
                  flex items-center gap-1.5 transition-colors duration-200
                  border-b border-white/20 group-hover:border-asu-gold/60 pb-0.5">
                  Try Now <span className="text-xs">→</span>
                </span>
              </div>
            </Link>

            {/* Notebook Card */}
            <Link
              href="/Notebook"
              className="group relative flex flex-col min-h-[340px] rounded-2xl p-6 text-left overflow-hidden
                bg-white/20 backdrop-blur-md
                border border-white/40
                shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]
                hover:bg-white/30 hover:border-white/60
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-out
                hover:-translate-y-1">

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center
                bg-white/30 border border-white/40 backdrop-blur-sm
                group-hover:bg-asu-gold/20 group-hover:border-asu-gold/40
                transition-all duration-300">
                <FaRegStickyNote className="text-lg text-black/80 group-hover:text-asu-gold transition-colors duration-300" />
              </div>

              <div className="flex flex-col justify-end flex-1 mt-auto pt-6">
                <h3 className="text-lg font-semibold text-black tracking-tight drop-shadow-sm">
                  Notebook
                </h3>
                <p className="text-sm text-black/75 leading-relaxed mt-2">
                  Save your progress, notes, and drafts in your personal notebook as you work.
                </p>
                <span className="mt-5 w-fit text-sm font-medium text-black/80 group-hover:text-asu-gold
                  flex items-center gap-1.5 transition-colors duration-200
                  border-b border-white/20 group-hover:border-asu-gold/60 pb-0.5">
                  Try Now <span className="text-xs">→</span>
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