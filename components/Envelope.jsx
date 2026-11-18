"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Ambient from "./Ambient";
import HeartBurst from "./HeartBurst";

export default function Envelope({ onOpened }) {
  const [open, setOpen] = useState(false);
  const [burst, setBurst] = useState(0);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setBurst(1);
    onOpened?.(); // lets the page start music (this is a real user tap)
  };

  return (
    <motion.main
      key="envelope"
      className="mesh relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
      transition={{ duration: 0.9 }}
    >
      <Ambient petals={6} hearts={8} sparkles={12} />

      <motion.h1
        className="relative z-10 font-display italic font-medium text-[2.9rem] leading-[1.05] text-wine sm:text-7xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        Heyyy My Pyaara Baccha 💗
      </motion.h1>
      <motion.p
        className="relative z-10 mt-3 max-w-xs font-sans text-base text-mauve sm:max-w-md sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        Someone has made something special just for you...
      </motion.p>

      {/* Envelope */}
      <div className="relative z-10 mt-10 h-[190px] w-[290px] [perspective:900px] sm:h-[220px] sm:w-[340px]">
        <motion.div
          className="relative h-full w-full"
          animate={open ? { y: 0 } : { y: [0, -8, 0] }}
          transition={open ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFC2D6] to-[#F58BB0] shadow-soft" />

          {/* the note inside */}
          <motion.div
            className="paper absolute left-4 right-4 top-[34%] flex h-[58%] items-center justify-center rounded-xl p-3 shadow-md"
            animate={open ? { y: -125, scale: 1.04, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.9, type: "spring", stiffness: 90, damping: 14 }}
            style={{ zIndex: 2 }}
          >
            <span className="font-display italic text-2xl text-berry">For Kavita ❤️</span>
          </motion.div>

          {/* front pocket */}
          <div
            className="absolute inset-0 z-[3] rounded-2xl"
            style={{
              background: "linear-gradient(135deg,#FFB3CB 0%,#FF9CBE 100%)",
              clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
              opacity: 0.0,
            }}
          />
          <div
            className="absolute inset-0 z-[3] rounded-2xl"
            style={{
              background: "linear-gradient(160deg,#FFC9DB,#F77FA9)",
              clipPath: "polygon(0 100%, 0 28%, 50% 62%, 100% 28%, 100% 100%)",
            }}
          />

          {/* flap */}
          <motion.div
            className="absolute left-0 right-0 top-0 h-[58%] origin-top"
            style={{
              background: "linear-gradient(180deg,#FF9CBE,#FFB3CB)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              zIndex: open ? 1 : 4,
              backfaceVisibility: "hidden",
            }}
            animate={{ rotateX: open ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* wax heart seal */}
          <motion.div
            className="absolute left-1/2 top-[44%] z-[5] -translate-x-1/2 text-4xl drop-shadow"
            animate={open ? { scale: 0, opacity: 0 } : { scale: [1, 1.15, 1] }}
            transition={open ? { duration: 0.3 } : { duration: 1.2, repeat: Infinity }}
          >
            💗
          </motion.div>
          <HeartBurst burstKey={burst} count={26} />
        </motion.div>
      </div>

      <motion.button
        className="btn-love relative z-10 mt-14 text-lg"
        onClick={handleOpen}
        disabled={open}
        whileTap={{ scale: 0.94 }}
        animate={open ? { opacity: 0.5 } : { scale: [1, 1.05, 1] }}
        transition={open ? {} : { duration: 1.6, repeat: Infinity }}
        aria-label="Open Your Surprise"
      >
        Open Your Surprise 💌
      </motion.button>
    </motion.main>
  );
}
