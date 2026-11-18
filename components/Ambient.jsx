"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { rnd } from "@/lib/rand";

const HEARTS = ["💗", "💕", "💖", "🩷", "💞"];

function Petal({ i, intense }) {
  const left = rnd(i, 2) * 100;
  const size = 14 + rnd(i, 3) * 14;
  const dur = (intense ? 9 : 14) + rnd(i, 4) * 8;
  const delay = -rnd(i, 5) * dur;
  const sway = 30 + rnd(i, 6) * 50;
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24"
      className="absolute top-0 will-gpu"
      style={{ left: `${left}%` }}
      initial={{ y: "-8vh", x: 0, rotate: 0, opacity: 0.9 }}
      animate={{ y: "108vh", x: [0, sway, -sway, sway / 2], rotate: [0, 160, 300, 420] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
    >
      <path d="M12 2C6 6 4 12 8 19c2 3 6 3 8 0 4-7 2-13-4-17z" fill={i % 3 === 0 ? "#FF8FB5" : i % 3 === 1 ? "#FFB3CB" : "#F7A8D0"} opacity=".85" />
    </motion.svg>
  );
}

function FloatHeart({ i }) {
  const left = rnd(i, 7) * 100;
  const size = 14 + rnd(i, 8) * 20;
  const dur = 11 + rnd(i, 9) * 9;
  const delay = -rnd(i, 10) * dur;
  return (
    <motion.span
      className="absolute bottom-0 will-gpu select-none"
      style={{ left: `${left}%`, fontSize: size }}
      initial={{ y: "10vh", opacity: 0 }}
      animate={{ y: "-110vh", x: [0, 18, -18, 0], opacity: [0, 0.8, 0.8, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {HEARTS[i % HEARTS.length]}
    </motion.span>
  );
}

function Sparkle({ i }) {
  const left = rnd(i, 11) * 100;
  const top = rnd(i, 12) * 100;
  const size = 8 + rnd(i, 13) * 10;
  const dur = 2.5 + rnd(i, 14) * 3;
  return (
    <motion.span
      className="absolute will-gpu select-none text-lilac"
      style={{ left: `${left}%`, top: `${top}%`, fontSize: size }}
      animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4], rotate: [0, 90, 180] }}
      transition={{ duration: dur, delay: rnd(i, 15) * 4, repeat: Infinity }}
    >
      ✦
    </motion.span>
  );
}

export default function Ambient({ petals = 7, hearts = 6, sparkles = 10, intense = false }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMounted(true);
    setMobile(window.innerWidth < 640);
  }, []);
  if (!mounted || reduce) return null;
  const k = mobile ? 0.6 : 1;
  const range = (n) => Array.from({ length: Math.round(n * k) }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {range(sparkles).map((i) => <Sparkle key={"s" + i} i={i} />)}
      {range(hearts).map((i) => <FloatHeart key={"h" + i} i={i} />)}
      {range(petals).map((i) => <Petal key={"p" + i} i={i} intense={intense} />)}
    </div>
  );
}
