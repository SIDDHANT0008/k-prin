"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { photos } from "@/lib/content";

export default function Lightbox({ index, onClose, onChange }) {
  const open = index !== null;
  const go = useCallback((d) => onChange((index + d + photos.length) % photos.length), [index, onChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#2B1840]/90 p-4 backdrop-blur-md"
          role="dialog" aria-modal="true" aria-label="Photo viewer"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl text-berry shadow-soft"
            style={{ top: "max(1rem, env(safe-area-inset-top))" }}
            onClick={onClose} aria-label="Close photo"
          >✕</button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              className="flex w-full max-w-3xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.5}
              onDragEnd={(_, i) => { if (i.offset.x < -70) go(1); else if (i.offset.x > 70) go(-1); }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-md bg-[#FFFCF6] p-2.5 pb-4 shadow-2xl sm:p-4 sm:pb-6">
                <Image
                  src={photos[index].src} alt={photos[index].alt}
                  width={photos[index].w} height={photos[index].h}
                  sizes="(max-width: 768px) 92vw, 768px" priority
                  className="max-h-[68svh] w-auto max-w-full rounded-sm object-contain"
                  draggable={false}
                />
              </div>
              <figcaption className="mt-5 max-w-md text-center font-display italic text-3xl text-white">
                {photos[index].caption}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-5 flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
            <button className="btn-soft !px-5" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
            <span className="font-bold text-white/80">{index + 1} / {photos.length}</span>
            <button className="btn-soft !px-5" onClick={() => go(1)} aria-label="Next photo">›</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
