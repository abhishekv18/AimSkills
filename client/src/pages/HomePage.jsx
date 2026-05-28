

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImpactSection from "../components/ImpactSection";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramSection";
import TestimonialsSection from "../components/Testimonials";

import BlogsPreviewSection from "../components/BlogsPreviewSection";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartneRSction";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionReveal({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionShell({ children, className = "", pattern = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {pattern && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:28px_28px] opacity-40" />
      )}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F5E8C0]/45 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function UpcomingSection({ title, subtitle, eyebrow, dark = false }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div
        className={`rounded-2xl border p-8 shadow-sm sm:p-10 lg:p-12 ${
          dark
            ? "border-white/10 bg-white/5 text-white"
            : "border-[#B8CCF0]/50 bg-white/80 text-[#111827] backdrop-blur-sm"
        }`}
      >
        <div
          className={`mb-4 inline-flex rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] ${
            dark
              ? "bg-white/10 text-[#B8CCF0]"
              : "bg-[#EEF3FC] text-[#1A4DA8]"
          }`}
        >
          {eyebrow}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              dark ? "text-white" : "text-[#0D2B6B]"
            }`}
          >
            {title}
          </h2>

          <p
            className={`max-w-2xl text-base font-medium leading-7 ${
              dark ? "text-white/70" : "text-slate-700"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {

    const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] antialiased">
      <Navbar />

      <HeroSection />

      <SectionReveal id="impact" className="relative bg-white">
        <SectionShell pattern>
          <ImpactSection />
        </SectionShell>
      </SectionReveal>

      <SectionReveal id="about" className="relative bg-[#EEF3FC]">
        <SectionShell>
          <AboutSection />
        </SectionShell>
      </SectionReveal>

      <SectionReveal id="programs" className="relative bg-[#F8F9FB]">
        <SectionShell pattern>
          <ProgramsSection />
        
        </SectionShell>
      </SectionReveal>

      <SectionReveal id="testimonials" className="relative bg-[#0D2B6B]">
        <SectionShell>
          <TestimonialsSection />
         
        </SectionShell>
      </SectionReveal>
      <BlogsPreviewSection />
      <SectionReveal id="cta" className="relative bg-[#F5E8C0]">
        <SectionShell>
          <CTASection />
        
        </SectionShell>
      </SectionReveal>
        <SectionReveal id="about" className="relative bg-[#EEF3FC]">
        <SectionShell>
          <PartnersSection />
        </SectionShell>
      </SectionReveal>
      <Footer/>
    </main>
  );
}
