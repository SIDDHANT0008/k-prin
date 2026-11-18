"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HeartBurst from "./HeartBurst";

const replies = {
  forever: {
    emoji: "🥰",
    title: "Hamesha, Kavita.",
    text: "Tum meri favourite ho, aaj bhi, kal bhi, aur har us din jab tum hans kar mujhe dekhogi. Thank you for being you, my Pyaara Baccha 💗",
  },
  silly: {
    emoji: "😚",
    title: "Hehe, meri silly Baccha!",
    text: "Bilkul sahi jawab. Tum jo bhi socho, jaise bhi feel karo, mere liye tum hamesha special rahogi. Koi pressure nahi, bas pyaar hi pyaar 🌷",
  },
};

export default function Question() {
  const [choice, setChoice] = useState(null);
  const [burst, setBurst] = useState(0);

  const pick = (c) => {
    setChoice(c);
    setBurst((b) => b + 1);
  };

  return (
    <section className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-6 py-20 text-center">
      <motion.h2
        className="max-w-sm font-display italic font-medium text-[2.6rem] leading-[1.05] text-wine sm:max-w-2xl sm:text-7xl"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9 }}
      >
        Ek chhota sa sawaal hai, Pyaara Baccha... ❤️
      </motion.h2>

      <motion.p
        className="mt-6 max-w-xs font-display text-2xl text-berry sm:max-w-md sm:text-3xl"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.9 }}
      >
        Will you always be my favourite person?
      </motion.p>

      <div className="relative mt-10 flex w-full max-w-sm flex-col items-center gap-4">
        <HeartBurst burstKey={burst} count={26} />
        <motion.button
          className="btn-love w-full" onClick={() => pick("forever")}
          whileTap={{ scale: 0.93 }} whileHover={{ scale: 1.04 }}
          animate={!choice ? { scale: [1, 1.04, 1] } : {}} transition={{ duration: 1.6, repeat: Infinity }}
        >
          Always &amp; Forever ❤️
        </motion.button>
        <motion.button
          className="btn-soft w-full" onClick={() => pick("silly")}
          whileTap={{ scale: 0.93 }} whileHover={{ scale: 1.04 }}
        >
          Of Course, Silly! 🥺
        </motion.button>
      </div>

      <div className="mt-10 min-h-[11rem] w-full max-w-sm" aria-live="polite">
        <AnimatePresence mode="wait">
          {choice && (
            <motion.div
              key={choice}
              className="rounded-3xl bg-white p-6 shadow-soft"
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <motion.div className="text-4xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.9, repeat: Infinity }}>
                {replies[choice].emoji}
              </motion.div>
              <h3 className="mt-2 font-display text-3xl font-semibold italic text-berry">{replies[choice].title}</h3>
              <p className="mt-2 leading-relaxed text-mauve">{replies[choice].text}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
