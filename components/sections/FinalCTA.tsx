"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function FinalCTA() {
  return (
    <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center space-y-10 md:space-y-12">
      <motion.h2
        className="font-headline font-extrabold text-5xl md:text-7xl text-heading max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        Stop browsing. Start growing.
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <a href="#lead-capture">
          <Button variant="brand" size="lg">
            Claim your 48h preview
          </Button>
        </a>
        <a href="#portfolio">
          <Button variant="ghost" size="lg">
            View Portfolio
          </Button>
        </a>
      </motion.div>
      <p className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm">
        Join 50+ businesses dominating their local markets
      </p>
    </section>
  );
}
