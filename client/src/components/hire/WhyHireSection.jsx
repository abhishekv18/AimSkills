// src/components/hire/WhyHireSection.jsx
import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, GraduationCap } from "lucide-react";

const cards = [
  {
    title: "Industry-Ready Training",
    description:
      "Candidates are trained with practical modules aligned to real workplace expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Practical Skill Development",
    description:
      "Learners build communication, technical basics, confidence, and role-readiness.",
    icon: BrainCircuit,
  },
  {
    title: "Placement-Oriented Learning",
    description:
      "Programs focus on interviews, professional behavior, and employment outcomes.",
    icon: GraduationCap,
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
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyHireSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            Why Hire From AimSkills
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Candidates Prepared for{" "}
            <span className="text-[#B8952A]">Real-World Careers</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            AimSkills bridges training and employment by preparing candidates
            with job-focused skills and workplace readiness.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] group-hover:-rotate-3 group-hover:scale-105">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-[#0D2B6B]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
