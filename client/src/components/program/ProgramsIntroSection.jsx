import { motion } from "framer-motion";
import { BadgeCheck, BriefcaseBusiness, GraduationCap, Target } from "lucide-react";

const highlights = [
  {
    label: "Career-Oriented Programs",
    icon: GraduationCap,
  },
  {
    label: "Corporate Training Excellence",
    icon: BriefcaseBusiness,
  },
  {
    label: "Industry-Focused Learning",
    icon: Target,
  },
];

const containerVariants = {
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProgramsIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EEF3FC]/60 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
        >
          <BadgeCheck size={17} strokeWidth={2.2} />
          Professional Training Excellence
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-5xl"
        >
          India’s Trusted Training &{" "}
          <span className="text-[#B8952A]">Skill Development</span> Partner
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-7 h-1 w-24 rounded-full bg-[#B8952A]"
        />

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-slate-700 sm:text-lg"
        >
          Our clients recognize AimSkills as one of the leading training
          organizations in India for delivering career-oriented learning
          programs, industry-focused training, and impactful corporate
          development solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] group-hover:-rotate-3 group-hover:scale-105">
                  <Icon size={21} strokeWidth={2.2} />
                </div>

                <div className="mt-4 text-sm font-extrabold leading-6 text-[#0D2B6B]">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
