"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HeartBurst from "./HeartBurst";

export default function ILoveYou() {
  const [burst, setBurst] = useState(0);
  const line = (text, d) => text.split("").map((c, i) => (
    <motion.span key={i} className="inline-block" style={{ whiteSpace: "pre" }} initial={{ opacity: 0, y: 40, filter: "blur(12px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: d + i * 0.07, duration: 0.8 }}>{c}</motion.span>
  ));
  return (
    <section className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="relative">
        <HeartBurst burstKey={burst} count={30} />
        <motion.button type="button" aria-label="Send love" onClick={() => setBurst((b) => b + 1)} whileTap={{ scale: 0.94 }} className="relative">
          <h2 className="font-display text-[5.2rem] font-medium italic leading-[0.9] text-berry sm:text-[11rem]">
            <span className="block">{line("I love", 0)}</span>
            <span className="block">{line("you", 0.6)}</span>
          </h2>
        </motion.button>
      </div>
      <motion.svg aria-hidden viewBox="0 0 24 24" className="mt-8 h-14 w-14" animate={{ scale: [1, 1.22, 1, 1.15, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <path d="M12 21C4 15 2 11 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3-2 7-10 13z" fill="#D9567F" />
      </motion.svg>
      <motion.p className="mt-8 max-w-sm text-lg leading-relaxed text-mauve" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 1 }}>
        Kavita, ye sirf teen shabd nahi hain. Ye meri har subah ki wajah hain. Tap karke mera pyaar bhej do.
      </motion.p>
    </section>
  );
}
