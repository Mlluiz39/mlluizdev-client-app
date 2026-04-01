"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

type FormData = { name: string; email: string; whatsapp: string; company: string };

export function LeadCapture() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", whatsapp: "", company: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const field = (
    label: string,
    key: keyof FormData,
    type: string,
    placeholder: string
  ) => (
    <div className="space-y-1.5 md:space-y-2">
      <label className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        required
        className="w-full bg-white/10 border-none rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:ring-2 focus:ring-primary-container focus:bg-white/20 transition-all p-3.5 sm:p-4"
        placeholder={placeholder}
        type={type}
        value={formData[key]}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
      />
    </div>
  );

  return (
    <section id="lead-capture" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div
        className="bg-primary rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/10 -skew-x-12 translate-x-1/4" />

        <div className="relative z-10 space-y-4 md:space-y-8 text-center lg:text-left">
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-6xl text-white leading-tight">
            Ready to curate your success?
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl font-medium">
            Leave your details and get your free high-fidelity preview within 48
            hours. No commitments, just results.
          </p>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 w-full">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {field("Full Name", "name", "text", "John Doe")}
              {field("Company", "company", "text", "acme.com")}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {field("Work Email", "email", "email", "john@company.com")}
              {field("WhatsApp", "whatsapp", "tel", "+55 11 99999-9999")}
            </div>

            {formError && (
              <p className="text-red-400 text-sm font-medium text-center">
                {formError}
              </p>
            )}
            <Button
              type="submit"
              variant="brand"
              disabled={loading || submitted}
              className="w-full mt-2 sm:mt-4 py-4 sm:py-5 text-base sm:text-lg shadow-2xl"
            >
              {submitted
                ? "✓ Sent Successfully!"
                : loading
                ? "Sending…"
                : "Request My Free Preview"}
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
