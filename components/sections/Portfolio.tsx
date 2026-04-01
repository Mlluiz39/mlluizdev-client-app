"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { portfolioItems } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-20 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-heading">
            Curated Works.
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-xs font-medium">
            Strategic design meeting technical excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="bg-surface-container-low rounded-2xl overflow-hidden mb-6 aspect-video relative tonal-shadow">
                <Image
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.img}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h4 className="font-headline font-bold text-xl md:text-2xl text-heading mb-1">
                {item.title}
              </h4>
              <p className="text-heading-container font-bold">{item.result}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
