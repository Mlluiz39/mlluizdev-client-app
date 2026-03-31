"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/* ============================================================
   DATA
   ============================================================ */

const portfolioItems = [
  {
    title: "Aura Financial",
    result: "+214% online bookings",
    alt: "Elegant fintech application interface",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm458RB1PiIpIfqDNhCWJF8_8mXj2ldb--nNZQ37-f3Jx9pW2zc54qaKGcmNHIHFDHhytf-qcE401OmflT5a7vaXybg7KjYRSi_rCeq0Ts_OSLsYCrECC-xC3dFgV8-N1QXplmJD1w50NgdzcKBKEaEnRgWRKkpg27CQNHuGNbwT-xcOL87LeVKN2Uqgv_YrMd2sivf68x0X1Q-AS2yZeBaP1WVFyDy2a7IpdXX01fmoZHBeDvg45ycPNJd4LT7GbOB7eP1ZEuo94",
  },
  {
    title: "Nexus Hub",
    result: "7x more contacts",
    alt: "Contemporary co-working space landing page",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6y-5CqzurOQrbDz_emZQc2Nwuk-HlisMdO9lII8gpPYTYNIfKacd85eIg2hH8io6m4pbdWqIhl95cfrP69ImXgygDExjOzz8dyE-QjkMyfvOJuL-aNr5w168jiZJg7HiofKhiCfXjcDkXfvOJ4WFByjUuO1kapt9q1VS1NZ0T3pKMNPCbznqr9tGuHfb3w9T2Y7YX80AoQIhMZTO8VN_PBEQQQssCoOqx1hdmaXWlx-fbJVfVXCpOdzQfH5Pi6_YCWU7e8Y1ONHI",
  },
  {
    title: "Estate Elite",
    result: "Top 3 Search Results",
    alt: "Luxury real estate website",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFVpAy3n7VdCOuFXHKpeLc-UZQ9V14OwbukqncCrI2GPspVPpLEHX1KZC74nzJQW262kLItsssS_NIAhZQ8Ccw8W72RpQ8s1-ii0CpDkPf2MH63_5IzYrYgY7LiDF_YO5BWI6_ps_3-EAD5JOIt3yO0uEVxu9Ic9xbThNqXGnFBgEEPYNH8DF7XDCkxNO5sUrm-VU7ZG3l2Q-CsqBgzoagjjjbqpBQMUkGeVxYJAX1LfJ93WzN05uHLdwVkBNiZin8q8IfCX62lQo",
  },
  {
    title: "Chronos Wear",
    result: "45% Checkout Increase",
    alt: "Minimalist product page for high-end watch",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gHBcMV73mGCkAVZUVxbG_LsXkkB-AnTAHNW3h_2z3Y7vXVaRoQgRDgMxkf8cFRy3Wz17mMfI2rrYImpVoocfil_DMf2x7s2swPcEmywQVNFs1CQjBxYVc11ZVQzWxZ6wR3KhE1NeniGlEGDDwxNdtARHgpwqVC1UFGcR1lYlMALSjtZ4gtDy-tjgWzFBqMyV5yUXP2mnSsXmXpZ44SoAHRY9gTvBDlUDv0tYvGWsQeFzL7hMgZi_2go-WYCEqzbZq9hYQdVJZG4",
  },
  {
    title: "Vitalis Health",
    result: "12k Active Monthly Users",
    alt: "Health and wellness platform interface",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr9B39O4s5agfHTfW4tM2w7oGMj0t6jghtrLxOxzN_1VtIli1wzKK3mJsgY18-iP6jmvcnXLnFsZLmk9-fO_noFw9nR7HA5e4ubp9-cF4SoOlJVD-A90C4pHEVEWvqFoEShaCw2ySPp2cQy4i5PmpF-rWldO0cGrNWMcbXSzft0Pqx2_tnAbVbxwwiRiVn9zj8EJxVsu0Z0iXKMXbYXqtv3UOY8MxEve8odo1QtsBxmzcKnSzQ3kHaUD1MuXpn8iyzApQnEZMei0w",
  },
  {
    title: "Studio Kinetic",
    result: "Global Design Award",
    alt: "Creative agency portfolio landing page",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8rL3y2m2JsRYpG8pO9sf73479btOXS6PVttT9f1BFLM_Z72WmPK4B1qSQlKmTkIueDcqAISMhkoSbL03lWpf8GWin0Dv1VkQWmoIoldfqy_LnM920oWOsjqWzryi8plIXaPZ2_LV2HQTb8DvFGpd64jC2JLZfs2vbjqdm95uynF37lEw2UXsNNpuCK1M13bNpAM_i2Fn6H9CCI9_gPTSuWd2Pbe2MxVYThFM_EBv7Onhe1u49XddATJ6EVMEIRltZpRvzbZ0u0jo",
  },
];

const outcomes = [
  {
    icon: "trending_up",
    title: "3x more contacts",
    desc: "Our conversion-first layouts are engineered to guide visitors directly to your primary call-to-action.",
  },
  {
    icon: "location_on",
    title: "Top 3 Local Search",
    desc: "Advanced semantic SEO optimization ensures your brand dominates regional search results consistently.",
  },
  {
    icon: "bolt",
    title: "0.8s Load Speed",
    desc: "Ultra-lightweight code architecture for instantaneous loading, keeping bounce rates at an absolute minimum.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Preview",
    desc: "We deliver a high-fidelity interactive prototype within 48 hours based on your goals. Zero risk.",
  },
  {
    num: "02",
    title: "Adjust",
    desc: "Direct feedback loop. We refine the experience until the curator's vision perfectly matches yours.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Technical deployment on our ultra-fast architecture with full ongoing support and SEO monitoring.",
  },
];

const testimonials = [
  {
    quote:
      "Kinetic transformed our stagnant brochure site into a lead-generating machine. We saw a return on investment within the first two weeks of launch.",
    name: "Sarah Jennings",
    role: "CEO, Jennings Architecture",
  },
  {
    quote:
      "The aesthetic precision is unmatched. They don't just build websites; they build digital brand identities that command immediate trust from premium clients.",
    name: "Marcello Rossi",
    role: "Founder, Rossi Interiors",
  },
];

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */

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

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
    setFormData({ name: "", email: "", whatsapp: "", company: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ========== TOP NAV ========== */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto">
          <div className="font-headline text-2xl font-black tracking-tighter text-heading">
            mlluizdevtech
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              className="font-headline font-bold tracking-tight uppercase text-sm text-heading-container border-b-2 border-primary-container pb-1 hover:text-heading transition-all duration-300"
              href="#outcomes"
            >
              Results
            </a>
            <a
              className="font-headline font-bold tracking-tight uppercase text-sm text-secondary hover:text-heading transition-all duration-300"
              href="#portfolio"
            >
              Portfolio
            </a>
            <a
              className="font-headline font-bold tracking-tight uppercase text-sm text-secondary hover:text-heading transition-all duration-300"
              href="#process"
            >
              Process
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#lead-capture">
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 md:px-8 py-3 rounded-2xl font-headline font-bold text-sm brand-btn shadow-lg cursor-pointer">
                Get Free Preview
              </button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ========== SECTION 1: HERO ========== */}
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
                  <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-headline font-bold text-base md:text-lg brand-btn shadow-xl cursor-pointer">
                    Get a free website preview
                  </button>
                </a>
                <a
                  href="https://wa.me/55SEUNUMERO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-surface-container-low text-heading px-8 md:px-10 py-4 md:py-5 rounded-2xl font-headline font-bold text-base md:text-lg hover:opacity-80 transition-colors cursor-pointer">
                    Talk on WhatsApp
                  </button>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Premium UI Dashboard"
                  className="rounded-xl w-full h-auto object-cover aspect-[4/5]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIB5K_zi5aQzTYJCb5wSv-yHqUYsoHNJuXAHWA5rkJDzrRkNyQevmC0xt9BP0dKih9cb5NVS-a4ak1QG0WunNPia661VXKWeG0eD3Z32PiL-JeR1BVU66M6gnd2neH1zVEh3SIUG8kXuKY_oAQBsRhDHzIGe5sKI0wiIQ91jp3RfZynoy3EdTvD-acumhijRqEsM8a5yImGNbeJtZzJSJhab1BVZbdYcn1YhpFk3ti3n5EWrZRt2CfJj7hp30hU_zLNPqr0qCthI"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== SECTION 2: OUTCOMES ========== */}
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

        {/* ========== SECTION 3: THE mlluizdevtech DIFFERENCE ========== */}
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
                      Slow, cluttered with unneeded code, and visually identical
                      to every competitor in your niche.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="flex gap-6 items-start"
                >
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

        {/* ========== SECTION 4: PORTFOLIO ========== */}
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                    />
                  </div>
                  <h4 className="font-headline font-bold text-xl md:text-2xl text-heading mb-1">
                    {item.title}
                  </h4>
                  <p className="text-heading-container font-bold">
                    {item.result}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== SECTION 5: PROCESS ========== */}
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
                  <p className="text-secondary text-base md:text-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========== SECTION 6: TESTIMONIALS ========== */}
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full" />
                  <div className="text-left">
                    <p className="font-headline font-bold text-heading">
                      {t.name}
                    </p>
                    <p className="text-secondary text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========== SECTION 7: LEAD CAPTURE ========== */}
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
                Leave your details and get your free high-fidelity preview
                within 48 hours. No commitments, just results.
              </p>
            </div>
            <div className="relative z-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 w-full">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full bg-white/10 border-none rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:ring-2 focus:ring-primary-container focus:bg-white/20 transition-all p-3.5 sm:p-4"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest ml-1">
                      Company
                    </label>
                    <input
                      required
                      className="w-full bg-white/10 border-none rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:ring-2 focus:ring-primary-container focus:bg-white/20 transition-all p-3.5 sm:p-4"
                      placeholder="acme.com"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest ml-1">
                      Work Email
                    </label>
                    <input
                      required
                      className="w-full bg-white/10 border-none rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:ring-2 focus:ring-primary-container focus:bg-white/20 transition-all p-3.5 sm:p-4"
                      placeholder="john@company.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest ml-1">
                      WhatsApp
                    </label>
                    <input
                      required
                      className="w-full bg-white/10 border-none rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:ring-2 focus:ring-primary-container focus:bg-white/20 transition-all p-3.5 sm:p-4"
                      placeholder="+55 11 99999-9999"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 sm:mt-4 bg-gradient-to-br from-primary to-primary-container text-white py-4 sm:py-5 rounded-2xl font-headline font-bold text-base sm:text-lg brand-btn shadow-2xl cursor-pointer"
                >
                  {submitted ? "✓ Sent Successfully!" : "Request My Free Preview"}
                </button>
              </form>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 8: FINAL CTA ========== */}
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
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-headline font-bold text-lg md:text-xl brand-btn shadow-xl cursor-pointer">
                Claim your 48h preview
              </button>
            </a>
            <a href="#portfolio">
              <button className="bg-surface-container-low text-heading px-8 md:px-12 py-4 md:py-6 rounded-2xl font-headline font-bold text-lg md:text-xl hover:opacity-80 transition-colors cursor-pointer">
                View Portfolio
              </button>
            </a>
          </motion.div>
          <p className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm">
            Join 50+ businesses dominating their local markets
          </p>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-surface-container-low w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12 md:py-16 max-w-[1440px] mx-auto">
          <div className="space-y-6">
            <div className="font-headline font-bold text-lg text-heading">
              mlluizdevtech
            </div>
            <p className="font-body text-sm leading-relaxed text-secondary max-w-sm">
              © 2026 mlluizdevtech Gallery. All rights reserved. Curating digital
              excellence for brands that demand authority.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center space-y-4">
            <div className="flex gap-8">
              {["LinkedIn", "GitHub", "Contact"].map((link) => (
                <a
                  key={link}
                  className="text-secondary hover:text-heading-container transition-colors hover:translate-x-1 transition-transform font-body text-sm"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
