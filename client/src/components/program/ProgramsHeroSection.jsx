import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.14,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProgramsHeroSection() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/src/assets/Gemini_Generated_Image_rdep1wrdep1wrdep.png"
          alt="AimSkills training and education program"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.nav
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-sm font-semibold text-white/75"
          >
            <a
              href="/"
              className="transition-colors hover:text-[#F5E8C0]"
            >
              Home
            </a>
            <ChevronRight size={16} strokeWidth={2.4} />
            <span className="text-[#F5E8C0]">Programs</span>
          </motion.nav>

          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#D4AF55]" />
            Skill Development Initiatives
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our Programs
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
          >
            Empowering individuals through education, skill development, and
            career-focused initiatives
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 h-1 w-24 rounded-full bg-[#B8952A]"
          />
        </motion.div>
      </div>
    </section>
  );
}
