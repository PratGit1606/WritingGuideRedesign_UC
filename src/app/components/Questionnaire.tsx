import { motion, AnimatePresence } from 'framer-motion';
import React, {useState} from 'react'
const questions = [
  {
    id: 1,
    main: "You’ve got an assignment, but you're staring at it like it just started speaking a foreign language. What do you need?",
    sub: [
      "A map to decode this mysterious assignment. (Analyzing the Assignment)",
      "A brainstorm blast to spark some ideas. (Brainstorming)",
    ],
  },
  {
    id: 2,
    main: "Your fingers are flying across the keyboard, but your words feel like they’re running in circles. What’s the vibe?",
    sub: [
      "I need to whip these scattered thoughts into shape! (Drafting)",
      "My argument needs a serious makeover. (Revision)",
    ],
  },
  {
    id: 3,
    main: "The paper is written, but now you’re caught in the vortex of commas and citations. What’s next?",
    sub: [
      "Polishing this bad boy until it shines. (Editing)",
      "Double-checking my citations to avoid accidental plagiarism. (Citing)",
    ],
  },
];

export default function Questionnaire() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});

  const handleMainClick = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const handleSubClick = (qId: number, subIndex: number) => {
    setAnswers({ ...answers, [qId]: subIndex });
  };

  return (
    <div className="space-y-6">
      {questions.map((q) => (
        <motion.div
          key={q.id}
          layout
          className={`rounded-xl p-5 border-2 cursor-pointer transition 
            ${activeQuestion === q.id ? "bg-yellow-50 border-yellow-400" : "bg-gray-100 border-gray-300"}`}
          onClick={() => handleMainClick(q.id)}
        >
          <p className="font-semibold text-gray-800">{q.main}</p>

          <AnimatePresence>
            {activeQuestion === q.id && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 space-y-3"
              >
                {q.sub.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                      ${answers[q.id] === index
                        ? "bg-yellow-400 text-black border-yellow-600"
                        : "bg-white border-gray-300 hover:bg-yellow-100"}`}
                    onClick={(e) => {
                      e.stopPropagation(); // don’t collapse
                      handleSubClick(q.id, index);
                    }}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={answers[q.id] === index}
                      readOnly
                      className="accent-yellow-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

