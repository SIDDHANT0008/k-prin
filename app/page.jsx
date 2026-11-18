"use client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Ambient from "@/components/Ambient";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Poem from "@/components/Poem";
import Question from "@/components/Question";
import Finale from "@/components/Finale";
import Marquee from "@/components/Marquee";
import Reasons from "@/components/Reasons";
import ILoveYou from "@/components/ILoveYou";
import OpenWhen from "@/components/OpenWhen";
import MusicButton from "@/components/MusicButton";

export default function Page() {
  const [stage, setStage] = useState("envelope");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  const play = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.volume = 0.5;
      await a.play();
      setPlaying(true);
    } catch {
      setPlaying(false); // file missing or browser said no, the button still works later
    }
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) play();
    else { a.pause(); setPlaying(false); }
  };

  // Only runs from the "Open Your Surprise" tap, so audio never autoplays
  const handleOpened = () => {
    play();
    setTimeout(() => {
      setStage("main");
      window.scrollTo(0, 0);
    }, 2300);
  };

  useEffect(() => {
    if (stage === "main") document.documentElement.style.scrollBehavior = "smooth";
  }, [stage]);

  return (
    <>
      <audio ref={audioRef} src="/audio/love-song.mp3" loop preload="none" />
      <AnimatePresence mode="wait">
        {stage === "envelope" ? (
          <Envelope key="env" onOpened={handleOpened} />
        ) : (
          <motion.div
            key="main"
            className="mesh relative"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Ambient petals={9} hearts={8} sparkles={14} />
            <motion.div aria-hidden className="fixed left-0 right-0 top-0 z-[75] h-[3px] origin-left bg-gradient-to-r from-petal to-berry" style={{ scaleX: bar }} />
            <MusicButton playing={playing} onToggle={toggle} />
            <main className="relative z-10">
              <Hero onEnter={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })} />
              <Marquee />
              <Gallery />
              <Reasons />
              <Letter />
              <ILoveYou />
              <Poem />
              <OpenWhen />
              <Question />
              <Finale />
            </main>
            <footer className="relative z-10 bg-[#2E1740] pb-8 text-center text-sm text-lavender/80">
              Made with all my love, only for you.
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
