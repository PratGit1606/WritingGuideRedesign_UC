'use client'
import { useState } from "react";

export default function GrammarExercise() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInput, setUserInput] = useState("");

  const unedited = `when editing your writing its important to read aloud. this helps you catch mistakes you might miss, also ask a friend for feedback they might notice things you dont. creating a checklist can also help you stay on track and make sure your writing is clear and effective`;

  const corrected = `When editing your writing, it’s important to read aloud. This helps you catch mistakes you might miss. Also, ask a friend for feedback—they might notice things you don’t. Creating a checklist can also help you stay on track and make sure your writing is clear and effective.`;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md border">
      <h2 className="text-2xl font-bold mb-4">
        Your grammar game is about to get “write”!
      </h2>
      <p className="font-semibold mb-2">Your Mission:</p>
      <p className="mb-4 text-gray-700">
        This paragraph requires <span className="font-bold">careful revision</span>. 
        It contains <span className="font-bold">several grammatical and punctuation errors </span> 
        that should be addressed to improve clarity and readability. 
        <span className="font-bold"> Can you revise it to enhance its overall quality?</span>
      </p>
      <p className="font-semibold mb-2">Unedited Paragraph:</p>
      <div className="bg-[#FFC627] p-4 rounded-lg shadow-sm text-sm text-black mb-6">
        {unedited}
      </div>
      <p className="font-semibold mb-2">
        Time to show us your &quot;grammarnificence&quot;!
      </p>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter Your Answer Here"
        className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        rows={5}
      />
      <button
        onClick={() => setShowAnswer(true)}
        className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition"
      >
        Show Answer
      </button>
      {showAnswer && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="font-semibold text-green-800 mb-2">Correct Answer:</p>
          <p className="text-gray-800 mb-4">{corrected}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Did you get it right? Wanna try again?
            </p>
            <button
              onClick={() => {
                setShowAnswer(false);
                setUserInput("");
              }}
              className="px-4 py-1 text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
