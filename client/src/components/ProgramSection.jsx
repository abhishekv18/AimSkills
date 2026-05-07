
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HandCoins,
  Handshake,
  Landmark,
  Lightbulb,
  Presentation,
  Sprout,
  UsersRound,
} from "lucide-react";

const programs = [
  {
    title: "Training to Underprivileged Youth",
    description: "Skill-building programs that improve employability and confidence.",
    icon: GraduationCap,
  },
  {
    title: "Consultancy for Rural Development",
    description: "Advisory support for sustainable rural growth initiatives.",
    icon: Sprout,
  },
  {
    title: "Develop SHGs in Rural Areas",
    description: "Helping self-help groups build capability and financial independence.",
    icon: UsersRound,
  },
  {
    title: "Implement Government Social Schemes",
    description: "Supporting access and execution of welfare-focused programs.",
    icon: Landmark,
  },
  {
    title: "Assist Students in Bank Loan Support",
    description: "Guidance for students seeking education and career finance.",
    icon: Banknote,
  },
  {
    title: "Rural Development Programs",
    description: "Community-led programs focused on upliftment and opportunity.",
    icon: Building2,
  },
  {
    title: "Livelihood Focused Programs",
    description: "Training pathways designed for income generation and stability.",
    icon: HandCoins,
  },
  {
    title: "Corporate Training Programs",
    description: "Professional learning modules for workplace readiness and growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Tutorials and Support",
    description: "Academic and mentoring support for learners who need guidance.",
    icon: BookOpenCheck,
  },
  {
    title: "Faculty Development Programs",
    description: "Capacity-building sessions for educators and training teams.",
    icon: Presentation,
  },
  {
    title: "Placement Oriented Training Programs",
    description: "Career-focused preparation for interviews, jobs, and industry needs.",
    icon: Handshake,
  },
  {
    title: "Training & Development Workshops",
    description: "Comprehensive capacity-building workshops designed to enhance professional skills and organizational effectiveness.",
    icon: Lightbulb,
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -7,
        scale: 1.02,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-600/10 opacity-80 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-amber-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

      <div className="relative">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-amber-400 shadow-sm transition-all duration-300 group-hover:bg-amber-500/20 group-hover:text-amber-300 group-hover:-rotate-3 group-hover:scale-105">
          <Icon size={23} strokeWidth={2.2} />
        </div>

        <h3 className="text-base font-extrabold leading-6 text-white">
          {program.title}
        </h3>

        <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
          {program.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn more
          <ArrowRight size={15} strokeWidth={2.4} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-20 sm:py-24 lg:py-28">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/10 blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

      {/* Subtle diagonal lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.15) 10px,
            rgba(255,255,255,0.15) 11px
          )`,
        }} />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.18,
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-amber-200 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            What we offer
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Explore Our Programs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
            Comprehensive initiatives designed to empower individuals and uplift
            communities
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-amber-400" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4"
        >
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </motion.div>

        <motion.div variants={cardVariants} className="mt-12 flex justify-center">
          <motion.a
            href="/about"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-7 py-4 text-base font-extrabold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-400/30"
          >
            Know More About Us
            <ArrowRight size={18} strokeWidth={2.4} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}