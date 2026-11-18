"use client";
import { motion } from "framer-motion";

export default function MusicButton({ playing, onToggle }) {
  return (
    <motion.button
      type="button" onClick={onToggle}
      aria-label={playing ? "Pause music" : "Play music"} aria-pressed={playing}
      className="fixed right-4 z-[70] flex h-12 items-center gap-2 rounded-full bg-white/90 px-4 font-bold text-berry shadow-soft backdrop-blur"
      style={{ top: "max(1rem, env(safe-area-inset-top))" }}
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
    >
      <motion.span
        aria-hidden className="inline-block"
        animate={playing ? { rotate: [0, 12, -12, 0], scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1.2, repeat: Infinity }}
      >🎵</motion.span>
      <span className="text-sm">{playing ? "Pause" : "Play"}</span>
    </motion.button>
  );
}
