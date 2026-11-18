"use client";
import { motion } from "framer-motion";
import { reasons } from "@/lib/content";

export default function Reasons() {
  return (
    <section className="relative z-10 px-5 py-24 sm:px-10">
      <motion.div className="mx-auto mb-14 max-w-xl text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <h2 className="h2 text-5xl sm:text-7xl">Kyun Pyaari Ho Tum</h2>
        <div className="hairline mx-auto mt-5 w-32" />
        <p className="mt-5 text-mauve">Saari wajah toh kabhi poori nahi hongi, par kuch ye rahi.</p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(([t, d], i) => (
          <motion.div key={t} className="glass rounded-3xl p-6 shadow-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, delay: (i % 4) * 0.08 }} whileHover={{ y: -6 }}>
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 21C4 15 2 11 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3-2 7-10 13z" fill={i % 2 ? "#A98BE0" : "#D9567F"} /></svg>
            <h3 className="mt-4 font-display text-2xl font-semibold italic text-berry">{t}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-mauve">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
