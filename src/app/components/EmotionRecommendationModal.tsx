"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Questionnaire from "./Questionnaire";

type Props = {
  open: boolean;
  onClose: () => void;
  mode: "landing" | "opening";
};

export default function EmotionRecommendationModal({ open, onClose, mode }: Props) {
  const [loading, setLoading] = useState(false);
  const [selectedEmotionKeys, setSelectedEmotionKeys] = useState<string[]>([]);
  const router = useRouter();
  const navigateOnSubmit = mode === "landing";

  useEffect(() => {
    if (!open) {
      setLoading(false);
    }
  }, [open]);

  const handleSubmit = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      localStorage.setItem(
        "writingGuide_selectedEmotionKeys_v1",
        JSON.stringify(selectedEmotionKeys)
      );
    } catch { }

    setLoading(false);
    onClose();

    if (navigateOnSubmit) {
      router.push("/Opening");
    }
  };

  const handleSkipOpening = () => {
    try {
      localStorage.removeItem("writingGuide_selectedEmotionKeys_v1");
    } catch {
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[url(/background.jpeg)] bg-cover bg-center bg-opacity-60"
          onClick={onClose}
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
                <div className="w-12 h-12 border-4 border-asu-gold border-t-transparent rounded-full animate-spin mb-6" />
                <p className="text-lg font-semibold text-asu-gray">Sorting your path...</p>
              </div>
            ) : (
              <>
                <Questionnaire onSelectionChange={setSelectedEmotionKeys} />
                <div className="mt-10 flex justify-between gap-4">
                  {mode === "landing" ? (
                    <Link
                      href="/Opening"
                      className="px-6 py-2 rounded-full border border-asu-gray/40 text-asu-gray hover:bg-asu-gray/10 transition"
                      onClick={() => {
                        try {
                          localStorage.removeItem("writingGuide_selectedEmotionKeys_v1");
                        } catch {
                          // ignore
                        }
                      }}
                    >
                      Skip
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSkipOpening}
                      className="px-6 py-2 rounded-full border border-asu-gray/40 text-asu-gray hover:bg-asu-gray/10 transition"
                    >
                      Skip
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-asu-black text-asu-white font-semibold rounded-full shadow hover:bg-asu-black/85 transition"
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
  );
}
