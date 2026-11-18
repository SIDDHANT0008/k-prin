"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { letter } from "@/lib/content";

export default function Letter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const [n, setN] = useState(0);
  const done = n >= letter.length;
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setN((v) => (v >= letter.length ? (clearInterval(id), v) : v + 2)), 34);
    return () => clearInterval(id);
  }, [inView]);
  return (
    <section className="relative z-10 px-5 py-24 sm:px-8">
      <motion.h2 className="h2 mb-3 text-center text-5xl sm:text-7xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        A Little Letter For You, Kavita
      </motion.h2>
      <div className="hairline mx-auto mb-12 w-32" />
      <motion.div ref={ref} className="paper relative mx-auto max-w-xl rounded-2xl p-7 pt-9 shadow-soft sm:p-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1 }} onClick={() => setN(letter.length)}>
        <p className="sr-only">{letter}</p>
        <p aria-hidden className="min-h-[27rem] whitespace-pre-wrap font-hand text-[1.5rem] leading-[36px] text-wine sm:text-[1.65rem]">
          {letter.slice(0, n)}
          {!done && <motion.span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-rose" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }} />}
        </p>
        {!done && inView && <p className="mt-3 text-center text-xs text-mauve">poora padhne ke liye letter par tap karo</p>}
      </motion.div>
    </section>
  );
}
