"use client";
import { motion } from "framer-motion";
import { rnd } from "@/lib/rand";

const E = ["💗", "💖", "💕", "🌸", "✨", "💞", "🩷"];

// Render with a changing `burstKey` to replay the burst.
export default function HeartBurst({ burstKey, count = 22 }) {
  if (!burstKey) return null;
  return (
    <div aria-hidden key={burstKey} className="pointer-events-none absolute inset-0 overflow-visible">
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2 + rnd(i, burstKey) * 0.6;
        const d = 90 + rnd(i, burstKey + 3) * 150;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 text-2xl will-gpu"
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d - 60, scale: [0, 1.3, 1], opacity: [1, 1, 0] }}
            transition={{ duration: 1.6 + rnd(i, 9) * 0.8, ease: "easeOut" }}
          >
            {E[i % E.length]}
          </motion.span>
        );
      })}
    </div>
  );
}
