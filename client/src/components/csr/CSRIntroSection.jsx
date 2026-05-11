// src/components/csr/CSRIntroSection.jsx
import { motion } from "framer-motion";
import { BarChart3, FileCheck2, ShieldCheck } from "lucide-react";

const points = [
  {
    title: "Transparent Execution",
    description: "Structured implementation with clear reporting milestones.",
    icon: FileCheck2,
  },
  {
    title: "Measurable Outcomes",
    description: "Impact tracked through training, placement, and community data.",
    icon: BarChart3,
  },
  {
    title: "Trusted Governance",
    description: "Professional systems designed for institutional accountability.",
    icon: ShieldCheck,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CSRIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={itemVariants}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
              Corporate Social Responsibility
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
              A Professional Implementation Partner for{" "}
              <span className="text-[#B8952A]">Sustainable Impact</span>
            </h2>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base font-medium leading-8 text-slate-700 sm:text-lg">
              AimSkills works with corporations, institutions, and development
              partners to design and execute CSR initiatives that create
              measurable change. Our programs combine skill development,
              employability training, village engagement, SHG support, and
              outcome-oriented documentation.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-slate-700 sm:text-lg">
              We help partners transform CSR investments into accountable,
              scalable, and human-centered social progress.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                  <Icon size={23} strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#0D2B6B]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
