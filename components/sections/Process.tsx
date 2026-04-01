"use client";

import { motion, Variants } from "framer-motion";
import { processSteps } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {processSteps.map((step) => (
          <motion.div key={step.num} variants={fadeUp} className="space-y-4">
            <div className="font-headline font-black text-[8rem] md:text-[10rem] text-heading/5 leading-none select-none">
              {step.num}
            </div>
            <div className="space-y-4 -mt-20 relative z-10">
              <h3 className="font-headline font-bold text-2xl md:text-3xl text-heading">
                {step.title}
              </h3>
              <p className="text-secondary text-base md:text-lg">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
