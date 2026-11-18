"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { photos } from "@/lib/content";

const words = ["Happy", "Princess", "Day,", "Kavita"];

export default function Hero({ onEnter }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-24 sm:px-12">
      <motion.div aria-hidden className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-petal/50 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p className="text-sm font-medium text-mauve" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Ek chhota sa surprise, sirf tumhare liye
          </motion.p>
          <h1 className="mt-4 font-display text-[3.4rem] font-medium italic leading-[0.98] text-wine sm:text-8xl">
            {words.map((w, i) => (
              <motion.span key={w} className={`mr-3 inline-block ${i === 3 ? "text-berry" : ""}`}
                initial={{ opacity: 0, y: 36, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.45 + i * 0.16, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}>
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p className="mt-6 max-w-md text-lg leading-relaxed text-mauve sm:text-xl" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.9 }}>
            My Pyaara Baccha, you make my world beautiful. And before anything else, I just want to say it:
            <span className="ml-1 font-display text-2xl font-semibold italic text-berry sm:text-3xl">I love you.</span>
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-4" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.8 }}>
            <motion.button className="btn-love" onClick={onEnter} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }}>
              Enter Our Little World
            </motion.button>
            <span className="text-sm text-mauve">scroll karte jao, bohot kuch hai</span>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-md lg:max-w-none" initial={{ opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ delay: 0.8, duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="rounded-[2rem] bg-white p-3 shadow-soft">
            <Image src={photos[0].src} alt={photos[0].alt} width={photos[0].w} height={photos[0].h} priority sizes="(max-width:1024px) 90vw, 560px" className="h-auto w-full rounded-[1.4rem] object-contain" />
          </motion.div>
          <motion.div className="glass absolute -bottom-5 -left-2 rounded-2xl px-4 py-3 shadow-card sm:-left-6" animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <p className="font-display text-xl italic text-berry">My Kavita</p>
            <p className="text-xs text-mauve">my favourite person</p>
          </motion.div>
          <motion.svg aria-hidden viewBox="0 0 24 24" className="absolute -right-2 -top-4 h-12 w-12 drop-shadow" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.1, repeat: Infinity }}>
            <path d="M12 21C4 15 2 11 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3-2 7-10 13z" fill="#D9567F" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
