"use client";

import { motion, Variants } from "framer-motion";
import { testimonials } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low rounded-b-[3rem] md:rounded-b-[5rem]">
      <motion.div
        className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-heading">
          Words from the Gallery.
        </h2>
      </motion.div>

      <motion.div
        className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className="bg-surface p-8 md:p-12 rounded-2xl tonal-shadow space-y-6"
          >
            <div className="flex gap-1 text-heading-container">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="text-heading text-lg md:text-xl font-medium leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-heading-container">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="text-left">
                <p className="font-headline font-bold text-heading">{t.name}</p>
                <p className="text-secondary text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
