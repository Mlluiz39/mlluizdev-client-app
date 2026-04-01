"use client";

import { motion, Variants } from "framer-motion";
import { outcomes } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-surface-container-low py-24 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-heading mb-6">
            Built for Outcomes.
          </h2>
          <div className="h-1 w-24 bg-primary-container" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {outcomes.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-surface p-8 md:p-12 rounded-2xl space-y-6 hover:-translate-y-2 transition-transform tonal-shadow"
            >
              <span className="material-symbols-outlined text-5xl text-heading-container">
                {item.icon}
              </span>
              <h3 className="font-headline font-bold text-2xl md:text-3xl text-heading">
                {item.title}
              </h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
