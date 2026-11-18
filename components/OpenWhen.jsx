"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { openWhen } from "@/lib/content";

export default function OpenWhen() {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative z-10 px-5 py-24 sm:px-10">
      <motion.div className="mx-auto mb-12 max-w-xl text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <h2 className="h2 text-5xl sm:text-7xl">Open When...</h2>
        <div className="hairline mx-auto mt-5 w-32" />
        <p className="mt-5 text-mauve">Chhote chhote letters, jab bhi zaroorat ho. Tap karke kholo.</p>
      </motion.div>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {openWhen.map((o, i) => {
          const isOpen = open === i;
          return (
            <motion.button key={o.title} type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} layout className={`rounded-3xl p-6 text-left shadow-card ${isOpen ? "bg-white" : "glass"}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileTap={{ scale: 0.98 }}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-2xl font-semibold italic text-berry">{o.title}</span>
                <motion.span aria-hidden animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-rose">+</motion.span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pt-3 leading-relaxed text-mauve">
                    {o.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
