"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function Hero() {
  const whatsapp = env.NEXT_PUBLIC_WHATSAPP;

  return (
    <section className="relative pt-36 md:pt-44 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            className="font-headline font-extrabold text-5xl md:text-7xl lg:text-[7.5rem] hero-headline text-heading"
          >
            Get more customers{" "}
            <span className="text-heading-container">with a</span>{" "}
            high-converting website.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-secondary text-lg md:text-2xl max-w-xl font-medium leading-relaxed"
          >
            We build bespoke digital engines that turn casual browsers into
            loyal clients. Stop settling for templates; start scaling your
            revenue.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 md:gap-6 pt-4">
            <a href="#lead-capture">
              <Button variant="brand" size="lg" className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-xl">
                Get a free website preview
              </Button>
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg" className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg">
                Talk on WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex flex-wrap items-center gap-6 md:gap-10 pt-4 md:pt-8"
          >
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-heading-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
                No upfront payment
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-heading-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                schedule
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
                48h Preview Delivery
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-surface-container-low rounded-2xl p-4 shadow-2xl">
            <Image
              alt="Premium UI Dashboard"
              className="rounded-xl w-full h-auto object-cover aspect-[4/5]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIB5K_zi5aQzTYJCb5wSv-yHqUYsoHNJuXAHWA5rkJDzrRkNyQevmC0xt9BP0dKih9cb5NVS-a4ak1QG0WunNPia661VXKWeG0eD3Z32PiL-JeR1BVU66M6gnd2neH1zVEh3SIUG8kXuKY_oAQBsRhDHzIGe5sKI0wiIQ91jp3RfZynoy3EdTvD-acumhijRqEsM8a5yImGNbeJtZzJSJhab1BVZbdYcn1YhpFk3ti3n5EWrZRt2CfJj7hp30hU_zLNPqr0qCthI"
              width={600}
              height={750}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
