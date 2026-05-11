// src/components/csr/CSRProposalSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, FileCheck2, Layers3, MessageSquareText, Send } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & CSR Mapping",
    description:
      "We understand your CSR goals, target communities, budget, geography, and desired social outcomes.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Project Design & Proposal",
    description:
      "AimSkills prepares a structured implementation plan with activities, timelines, outcomes, and reporting milestones.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Implementation & Reporting",
    description:
      "Programs are executed with monitoring, documentation, progress reporting, and final impact summaries.",
    icon: FileCheck2,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CSRProposalSection() {
  return (
    <section
      id="proposal"
      className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#B8952A]/35 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] bg-[length:28px_28px] opacity-25" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md">
            <Send size={17} strokeWidth={2.2} />
            Partnership Process
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From CSR Intent to Field-Level Impact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-200 sm:text-lg">
            Our proposal process is designed to help corporate teams make
            confident, informed, and impact-aligned partnership decisions.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#D4AF55]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.step}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-3xl border border-white/15 bg-white/10 p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:bg-white/15"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  <span className="rounded-full bg-[#B8952A] px-4 py-2 text-sm font-extrabold text-white">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-extrabold text-white">
                  {step.title}
                </h3>

                <div className="mt-4 h-1 w-12 rounded-full bg-[#D4AF55] transition-all duration-300 group-hover:w-24" />

                <p className="mt-6 text-sm font-medium leading-7 text-slate-200">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex justify-center">
          <a
            href="#partner-form"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
          >
            Request CSR Proposal
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
