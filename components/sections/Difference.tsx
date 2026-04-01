"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Difference() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          className="space-y-10 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-headline font-extrabold text-4xl md:text-6xl text-heading leading-tight"
          >
            The mlluizdevtech <br />
            Difference
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              className="flex gap-6 items-start opacity-50"
            >
              <span className="material-symbols-outlined text-red-500 mt-1">
                cancel
              </span>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">
                  Generic Templates
                </h4>
                <p className="text-secondary">
                  Slow, cluttered with unneeded code, and visually identical to
                  every competitor in your niche.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-heading-container mt-1">
                check_circle
              </span>
              <div>
                <h4 className="font-headline font-bold text-xl md:text-2xl text-heading mb-2">
                  mlluizdevtech Engines
                </h4>
                <p className="text-secondary text-base md:text-lg">
                  Bespoke, outcome-driven architectures designed to solve
                  specific business friction and maximize ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-surface-container-low rounded-2xl p-8 md:p-12 relative overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-block bg-white px-6 py-2 rounded-full font-headline font-bold text-heading-container text-sm uppercase tracking-widest shadow-sm">
              Real Performance
            </div>
            <div className="font-headline font-black text-7xl md:text-9xl text-heading">
              +114%
            </div>
            <div className="text-secondary text-lg md:text-xl font-medium italic">
              Growth in online qualified leads
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
