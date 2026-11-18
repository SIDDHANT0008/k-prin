"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { photos } from "@/lib/content";
import Lightbox from "./Lightbox";

function Card({ p, i, onOpen }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <motion.figure ref={ref} className="mb-6 break-inside-avoid will-gpu" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
      <motion.button type="button" onClick={() => onOpen(i)} aria-label={`Open photo: ${p.caption}`} className="group block w-full overflow-hidden rounded-[1.6rem] bg-white p-2.5 text-left shadow-card" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
        <motion.div className="overflow-hidden rounded-[1.1rem] bg-blush" initial={false} animate={{ clipPath: seen ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}>
          <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 380px" loading={i < 2 ? "eager" : "lazy"} className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
        </motion.div>
        <figcaption className="px-2 pb-1.5 pt-3.5 font-display text-[1.35rem] italic leading-snug text-wine">{p.caption}</figcaption>
      </motion.button>
    </motion.figure>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);
  return (
    <section id="memories" className="relative z-10 px-5 py-24 sm:px-10">
      <motion.div className="mx-auto mb-14 max-w-xl text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <h2 className="h2 text-5xl sm:text-7xl">Our Memories</h2>
        <div className="hairline mx-auto mt-5 w-32" />
        <p className="mt-5 text-mauve">Kisi bhi photo par tap karo. Har ek mein meri favourite insaan hai.</p>
      </motion.div>
      <div className="mx-auto max-w-md columns-1 gap-6 sm:max-w-5xl sm:columns-2 lg:columns-3">
        {photos.map((p, i) => <Card key={p.src} p={p} i={i} onOpen={setActive} />)}
      </div>
      <Lightbox index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}
