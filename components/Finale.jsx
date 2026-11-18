"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { rnd } from "@/lib/rand";
import HeartBurst from "./HeartBurst";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 1.2, delay: d },
});

export default function Finale() {
  const [burst, setBurst] = useState(0);
  return (
    <section className="night-bg relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {Array.from({ length: 26 }, (_, i) => (
        <motion.span
          key={i} aria-hidden
          className="absolute select-none text-petal will-gpu"
          style={{ left: `${rnd(i, 31) * 100}%`, top: `${rnd(i, 32) * 100}%`, fontSize: 6 + rnd(i, 33) * 10 }}
          animate={{ opacity: [0.1, 1, 0.1], scale: [0.6, 1.3, 0.6] }}
          transition={{ duration: 2 + rnd(i, 34) * 3, repeat: Infinity, delay: rnd(i, 35) * 3 }}
        >✦</motion.span>
      ))}

      <motion.p className="font-display italic text-4xl text-petal sm:text-6xl" {...fade()}>
        One thing I want you to know...
      </motion.p>

      <motion.p className="mt-8 max-w-sm font-display text-[2rem] leading-snug text-ivory sm:max-w-2xl sm:text-5xl" {...fade(0.5)}>
        Kavita, duniya mein bahut saari beautiful cheezein hain, but meri favourite hamesha tum rahogi. ❤️
      </motion.p>

      <motion.div className="relative mt-14" {...fade(0.9)}>
        <HeartBurst burstKey={burst} count={30} />
        <motion.button
          type="button" onClick={() => setBurst((b) => b + 1)} aria-label="Send more love"
          className="relative block"
          animate={{ scale: [1, 1.12, 1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span aria-hidden className="absolute inset-0 rounded-full bg-rose/60 blur-3xl"
            animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <svg viewBox="0 0 200 180" className="relative h-56 w-56 drop-shadow-[0_0_25px_rgba(255,143,181,.9)] sm:h-72 sm:w-72">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FFB3CB" /><stop offset="1" stopColor="#E0457B" />
              </linearGradient>
            </defs>
            <path d="M100 168C28 112 10 82 10 52 10 28 29 10 52 10c20 0 36 11 48 30C112 21 128 10 148 10c23 0 42 18 42 42 0 30-18 60-90 116z" fill="url(#hg)" />
            <path d="M42 40c8-10 20-12 28-6" stroke="#fff" strokeOpacity=".6" strokeWidth="6" strokeLinecap="round" fill="none" />
            <text x="100" y="92" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontWeight="600" fontSize="44" fill="#fff">Kavita</text>
          </svg>
        </motion.button>
      </motion.div>

      <motion.h2 className="mt-12 font-display italic text-5xl font-medium leading-tight text-white sm:text-7xl" {...fade(1.2)}>
        Happy Princess Day,<br />My Pyaara Baccha 👑
      </motion.h2>

      <motion.p className="mt-6 text-base text-lavender" {...fade(1.5)}>
        Hamesha tumhara. Heart par tap karke aur pyaar bhejo.
      </motion.p>
    </section>
  );
}
