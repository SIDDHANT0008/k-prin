"use client";
import { motion } from "framer-motion";
import { loveLanguages } from "@/lib/content";

export default function Marquee() {
  const items = [...loveLanguages, ...loveLanguages];
  return (
    <div aria-label="I love you in many languages" className="relative z-10 overflow-hidden border-y border-petal/60 bg-white/50 py-5 backdrop-blur">
      <motion.div className="flex w-max gap-10 whitespace-nowrap will-gpu" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl italic text-berry sm:text-4xl">
            {t}
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 21C4 15 2 11 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3-2 7-10 13z" fill="#F3B6C8" /></svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
