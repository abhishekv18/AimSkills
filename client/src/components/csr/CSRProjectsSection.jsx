// src/components/csr/CSRProjectsSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, GraduationCap, MapPin, UsersRound } from "lucide-react";

const projects = [
  {
    title: "Youth Employability Mission",
    category: "Skill Development",
    image: "/assets/csr/project-youth.jpg",
    icon: GraduationCap,
    description:
      "A placement-oriented program for underserved youth covering communication, digital skills, interview readiness, and workplace behavior.",
    outcomes: ["Training batches", "Placement support", "Outcome reporting"],
  },
  {
    title: "Village Livelihood Initiative",
    category: "Rural Development",
    image: "/assets/csr/project-village.jpg",
    icon: MapPin,
    description:
      "A community-focused CSR model designed to strengthen awareness, livelihood readiness, and local participation in rural areas.",
    outcomes: ["Village engagement", "Livelihood awareness", "Community reports"],
  },
  {
    title: "Women & SHG Empowerment Program",
    category: "Community Impact",
    image: "/assets/csr/project-shg.jpg",
    icon: UsersRound,
    description:
      "A structured capacity-building initiative for SHGs and women-led groups focused on confidence, skills, and economic participation.",
    outcomes: ["SHG training", "Financial awareness", "Local leadership"],
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CSRProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
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
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <BadgeCheck size={17} strokeWidth={2.2} />
            CSR Project Models
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Ready-to-Scale Projects for{" "}
            <span className="text-[#B8952A]">Measurable Outcomes</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            CSR programs can be customized for geography, beneficiaries,
            implementation duration, and corporate impact objectives.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/75 via-[#0D2B6B]/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#B8952A] px-3 py-1 text-xs font-extrabold text-white">
                      {project.category}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-white text-[#1A4DA8] shadow-sm">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#0D2B6B]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                    {project.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
                        {outcome}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#partner-form"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#1A4DA8] transition-colors hover:text-[#2E6FD9]"
                  >
                    Discuss this project
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
