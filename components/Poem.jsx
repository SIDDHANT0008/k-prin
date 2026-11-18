"use client";
import { motion } from "framer-motion";
import { poem } from "@/lib/content";

export default function Poem() {
  return (
    <section className="relative z-10 px-6 py-24">
      <motion.h2 className="h2 mb-3 text-center text-5xl sm:text-7xl" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        Mere Pyaare Bacche Ke Liye
      </motion.h2>
      <div className="hairline mx-auto mb-12 w-32" />
      <div className="glass mx-auto max-w-md rounded-[2rem] px-5 py-12 text-center shadow-soft">
        {poem.map((line, i) => line === "" ? <div key={i} className="h-7" aria-hidden /> : (
          <motion.p key={i} className="font-display text-[1.55rem] italic leading-[1.45] text-wine [text-wrap:balance] sm:text-3xl" initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.8 }}>
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
