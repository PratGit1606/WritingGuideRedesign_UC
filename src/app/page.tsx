'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaQuoteRight, FaBookOpen, FaRegStickyNote } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import LandingDesktopMock from './components/LandingDesktopMock';
import { useRouter } from 'next/navigation';
import Questionnaire from './components/Questionnaire';


const WritingGuidePage: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/Opening');
    }, 4000);
  };
  return (
    <div className="relative min-h-screen font-sans text-asu-gray bg-[url(/background.jpeg)] bg-cover bg-center">

      <section className="px-6 sm:px-10 py-16 md:py-24 pb-28 md:pb-36">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-asu-black">
              Write with confidence,
              <br />
              from idea to <span className="text-asu-gold">final draft</span>.
            </h1>
            <p className="mt-6 text-lg text-asu-gray max-w-xl mx-auto">
              Personalized writing assistance for ASU students. Interactive tools, expert tutoring, and resources to help you excel.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
              className="mt-8 bg-asu-maroon text-asu-white px-8 py-3 rounded-full text-lg shadow-md transition hover:bg-asu-maroon/90"
            >
              Get Started
            </motion.button>
          </motion.div>

          <LandingDesktopMock />
        </div>
      </section>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[url(/background.jpeg)] bg-cover bg-center bg-opacity-60"
            onClick={() => setShowPopup(false)} 
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-asu-white max-w-2xl w-full mx-4 rounded-2xl shadow-xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-12 h-12 border-4 border-asu-gold border-t-transparent rounded-full animate-spin mb-6"></div>
                  <p className="text-lg font-semibold text-asu-gray">Sorting your path...</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-center text-asu-black mb-6">
                    The Quest Begins ✨
                  </h2>
                  <p className="text-center text-asu-gray mb-8">
                    Choose one path at a time to guide your writing journey.
                  </p>

                  <Questionnaire />
                  <div className="mt-10 flex justify-between">
                    <Link
                      href="/Opening"
                      className="px-6 py-2 rounded-full border border-asu-gray/40 text-asu-gray hover:bg-asu-gray/10 transition"
                    >
                      Skip
                    </Link>
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-2 bg-asu-gold text-asu-black font-semibold rounded-full shadow hover:bg-asu-gold/90 transition"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
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
      </section>


      <section className="px-6 md:px-10 py-20">
        <h2 className="text-center text-4xl font-bold text-asu-black mb-12">
          Our <span className="text-asu-maroon">Writing Tools</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          <div className="bg-asu-white border border-asu-gold rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaQuoteRight className="text-3xl text-asu-maroon" />
              <h3 className="text-xl md:text-2xl font-bold text-asu-black">Citation Generator</h3>
              <p className="text-asu-gray">
                Generate perfect citations in APA, MLA, Chicago, and more formats with our easy-to-use tool.
              </p>
            </div>
            <button className="mt-6 bg-asu-maroon text-asu-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition hover:bg-asu-maroon/90">
              Try Now
            </button>
          </div>

          <div className="bg-asu-white border border-asu-gold rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaBookOpen className="text-3xl text-asu-maroon" />
              <h3 className="text-xl md:text-2xl font-bold text-asu-black">Writing Guide</h3>
              <p className="text-asu-gray">
                Get inspired with our interactive writing guide to overcome writer&apos;s block.
              </p>
            </div>
            <Link href="/Opening" className="mt-6 bg-asu-maroon text-asu-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition hover:bg-asu-maroon/90">
              Try Now
            </Link>
          </div>

          <div className="bg-asu-white border border-asu-gold rounded-[24px] p-6 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition hover:scale-105 transition">
            <div className="flex flex-col gap-3">
              <FaRegStickyNote className="text-3xl text-asu-maroon" />
              <h3 className="text-xl md:text-2xl font-bold text-asu-black">Notebook</h3>
              <p className="text-asu-gray">
                Save your progress, notes, and drafts in your personal notebook as you work.
              </p>
            </div>
            <Link
              href="/Notebook"
              className="mt-6 bg-asu-maroon text-asu-white font-semibold px-6 py-2 rounded-full w-fit self-start shadow hover:scale-105 transition hover:bg-asu-maroon/90"
            >
              Try Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WritingGuidePage;
