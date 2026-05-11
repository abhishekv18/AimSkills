// src/components/about/TeamOverviewSection.jsx
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  UsersRound,
} from "lucide-react";

const teamPillars = [
  {
    title: "Program Leadership",
    description:
      "Guiding strategy, partnerships, and long-term institutional direction.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Training Experts",
    description:
      "Delivering practical, learner-centered training across skill domains.",
    icon: GraduationCap,
  },
  {
    title: "Community Coordinators",
    description:
      "Connecting programs with beneficiaries, local institutions, and field needs.",
    icon: UsersRound,
  },
  {
    title: "Placement & Support",
    description:
      "Helping learners move toward opportunities with guidance and readiness.",
    icon: Handshake,
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

export default function TeamOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <BookOpenCheck size={17} strokeWidth={2.2} />
            Our People
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            A Team Built for{" "}
            <span className="text-[#B8952A]">Field Impact</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            AimSkills brings together trainers, coordinators, program leaders,
            and partners who share one mission: creating practical pathways for
            youth and communities to grow.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
          >
            <img
              src="/assets/about/team-overview.jpg"
              alt="AimSkills team and training coordinators"
              className="h-[360px] w-full rounded-2xl object-cover sm:h-[500px]"
            />

            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
              <p className="text-sm font-extrabold text-[#0D2B6B]">
                Professional execution, human connection
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                Our work is delivered through people who understand both
                institutional expectations and community realities.
              </p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="grid gap-5 sm:grid-cols-2">
            {teamPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
