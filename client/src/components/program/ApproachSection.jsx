import { motion } from "framer-motion";
import { BadgeCheck, BarChart3, Lightbulb } from "lucide-react";

const approaches = [
  {
    step: "01",
    title: "Research & Innovation",
    description:
      "Our team carefully studies industry trends and develops modern training methodologies aligned with real-world demands.",
    icon: Lightbulb,
    position: "lg:translate-y-10",
  },
  {
    step: "02",
    title: "Quality & Commitment",
    description:
      "We focus on delivering high-quality learning experiences through structured programs, skilled trainers, and practical execution.",
    icon: BadgeCheck,
    position: "lg:-translate-y-6 lg:scale-[1.04]",
    featured: true,
  },
  {
    step: "03",
    title: "Feedback Management",
    description:
      "We continuously monitor performance, gather feedback, and improve training outcomes using data-driven evaluation systems.",
    icon: BarChart3,
    position: "lg:translate-y-14",
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
      delayChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ApproachCard({ approach }) {
  const Icon = approach.icon;

  return (
    <motion.article
      variants={cardVariants}
      animate={{
        y: [0, approach.featured ? -8 : -5, 0],
      }}
      transition={{
        duration: approach.featured ? 5.2 : 5.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -10,
        scale: approach.featured ? 1.055 : 1.025,
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 shadow-xl shadow-[#0D2B6B]/8 backdrop-blur-xl transition-all duration-300 hover:border-[#B8CCF0] hover:shadow-2xl hover:shadow-[#0D2B6B]/14 sm:p-8 ${approach.position}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#EEF3FC] opacity-90 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-[#F5E8C0] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#B8952A]/25 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] text-white shadow-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
              <Icon size={31} strokeWidth={2.1} />
            </div>
          </div>

          {/* <span className="rounded-full border border-[#B8CCF0]/70 bg-[#EEF3FC] px-4 py-2 text-sm font-extrabold tracking-wide text-[#1A4DA8]">
            {approach.step}
          </span> */}
        </div>

        <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-[#0D2B6B]">
          {approach.title}
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-[#B8952A] transition-all duration-300 group-hover:w-24" />

        <p className="mt-6 text-base font-medium leading-8 text-slate-600">
          {approach.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF3FC] via-white to-[#F8F9FB] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-35" />
      <div className="pointer-events-none absolute -left-28 top-16 h-96 w-96 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-96 w-96 rounded-full bg-[#F5E8C0]/70 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EEF3FC]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.16,
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            Our Method
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Approaches That Drive{" "}
            <span className="text-[#B8952A]">Real Impact</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            We combine research, skill-focused training, and continuous support
            to create meaningful learning experiences and long-term growth
            opportunities.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="relative mt-16 grid gap-6 lg:mt-24 lg:grid-cols-3 lg:gap-7"
        >
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#B8CCF0] to-transparent lg:block" />

          {approaches.map((approach) => (
            <ApproachCard key={approach.step} approach={approach} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
