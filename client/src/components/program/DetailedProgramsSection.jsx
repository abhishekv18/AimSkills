// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   BriefcaseBusiness,
//   Building2,
//   CheckCircle2,
//   GraduationCap,
//   Handshake,
//   Presentation,
//   Sprout,
// } from "lucide-react";

// const programs = [
//   {
//     title: "Professional & Vocational Training Programs",
//     description:
//       "AIM SKILLS offers varied line of work and skilled Education Qualifications, Certifications, Diplomas, take a look at Programs on varied segments for job the demand of all the age teams. It works with skilled Organizations and Bodies so as to bridge the ability gap within the Economy. AIM SKILLS works on varied skilled qualifications on Business and Finance, data Technology, Science & Engineering, Media and diversion in association with supposed skilled organizations, subsidization bodies and Universities.",
//     icon: GraduationCap,
//     accent: "white",
//     highlights: [
//       "Job-ready skill modules",
//       "Practical classroom delivery",
//       "Employability-focused outcomes",
//     ],
//   },
//   {
//     title: "Faculty Development Programs / TTT",
//     description:
//       "At Aim Skills, we are offering scientifically designed Train the Trainer / Faculty development programs that are designed to improve teaching and learning experience. These programs are helping various institutions to improve their overall teaching quality and reflecting in their annual results of the students. AIM SKILLS conjointly develops varied Assessment Tests and its preparative Programs to assess the data level of aspirants in skilled and vocational training segments.",
//     icon: Presentation,
//     accent: "ice",
//     highlights: [
//       "Train-the-trainer modules",
//       "Pedagogy and delivery skills",
//       "Institutional capacity building",
//     ],
//   },
//   {
//     title: "Rural Development Projects",
//     description:
//       "​At Aim Skills, we believe learning has no limits – we are able to give learners with the abilities they have to reach the planet of labor and supply employers with the proficient staff they have to spice up their long – term profit and growth. AIM SKILLS offers their skilled and line of work Programs either directly through its centre’s/schools/colleges or in association with their partners like company, colleges, universities or alternative skilled and vocational training players.",
//     icon: Sprout,
//     accent: "white",
//     highlights: [
//       "Community needs assessment",
//       "Livelihood-linked interventions",
//       "Local ecosystem strengthening",
//     ],
//   },
//   {
//     title: "Corporate Training Programs",
//     description:
//       "We are offering custom-made training programs to many corporate entities, government organizations and alternative organizations. Aim Skills facilitates each skilled and education. Our training services provides a range of training solutions through a team of pros with expertise in varied segments. We develop custom-made training and preparation as per client’s specifications. We conjointly provides trainers to deliver the content developed by the purchasers. Our team assists in identification of training desires, training calendar and conjointly develops tests to work out the training effectiveness.",
//     icon: BriefcaseBusiness,
//     accent: "ice",
//     highlights: [
//       "Customized training solutions",
//       "Workplace readiness programs",
//       "Professional development tracks",
//     ],
//   },
//   {
//     title: "Campus Training Programs",
//     description:
//       "We regularly get in touch with corporate employers and analyze their recruiting trends, technological and infrastructure changes. further we analyze the campuses and try to find the gap between the skills set that the students have and the skills set required by corporate world. After analyzing the gap between the corporate and academia we develop training programs to upgrade the skills of the candidates for a best industry fit. We work on hire and train model for few companies. In which we get candidates interviewed by the employers and after their LOI we impart training to the confirmed candidates.",
//     icon: Building2,
//     accent: "white",
//     highlights: [
//       "Campus-to-career preparation",
//       "Interview readiness support",
//       "Soft skills and communication",
//     ],
//   },
//   {
//     title: "Consulting Services",
//     description:
//       "We practice services notice innovative solutions to deliver property modification in skilled and vocational training. The practice support of AIM SKILLS includes the bid writing by systematically successful writers to assist access different funding, localized practicability studies, recommendation on collaborations, new models of partnerships and mergers, travel learn mapping and market share analysis, labor marketing research for academic cases, info analyses and reviews, inspector level support with quality improvement , self assessment and validation, establishment media practice.",
//     icon: Handshake,
//     accent: "ice",
//     highlights: [
//       "CSR program advisory",
//       "Project planning and execution",
//       "Impact-oriented consulting",
//     ],
//   },
// ];

// const sectionVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.14,
//       delayChildren: 0.14,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 34,
//     scale: 0.96,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function ProgramCard({ program }) {
//   const Icon = program.icon;
//   const isIce = program.accent === "ice";

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={{
//         y: -8,
//         scale: 1.015,
//       }}
//       transition={{
//         duration: 0.22,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`group relative overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md sm:p-8 ${
//         isIce ? "bg-[#EEF3FC]" : "bg-white"
//       }`}
//     >
//       <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-[#F5E8C0]/0 blur-3xl transition-opacity duration-300 group-hover:bg-[#F5E8C0]/70" />

//       <div className="relative">
//         <div className="mb-7 flex items-start justify-between gap-5">
//           <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-sm ring-1 ring-[#B8CCF0]/50 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//             <Icon size={27} strokeWidth={2.2} />
//           </div>

//           <span className="rounded-full border border-[#B8CCF0]/60 bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A4DA8]">
//             Program
//           </span>
//         </div>

//         <h3 className="max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-[#0D2B6B]">
//           {program.title}
//         </h3>

//         <div className="mt-4 h-1 w-14 rounded-full bg-[#B8952A]" />

//         <p className="mt-5 text-base font-medium leading-8 text-slate-600">
//           {program.description}
//         </p>

//         <div className="mt-7 space-y-3 border-t border-slate-200 pt-6">
//           {program.highlights.map((highlight) => (
//             <div
//               key={highlight}
//               className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"
//             >
//               <CheckCircle2
//                 size={18}
//                 strokeWidth={2.3}
//                 className="mt-0.5 shrink-0 text-[#B8952A]"
//               />
//               {highlight}
//             </div>
//           ))}
//         </div>

//         <motion.a
//           href="/contact"
//           whileHover={{
//             x: 3,
//           }}
//           className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#2E6FD9]"
//         >
//           Learn More
//           <ArrowRight size={16} strokeWidth={2.4} />
//         </motion.a>
//       </div>
//     </motion.article>
//   );
// }

// export default function DetailedProgramsSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.14,
//         }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={cardVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <BadgeCheck size={17} strokeWidth={2.2} />
//             Flagship Programs
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Transformative Programs Designed for{" "}
//             <span className="text-[#B8952A]">Growth & Opportunity</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             AimSkills empowers youth, institutions, and organizations through
//             industry-focused learning, career development, and scalable
//             community impact initiatives.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2"
//         >
//           {programs.map((program) => (
//             <ProgramCard key={program.title} program={program} />
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Presentation,
  Sprout,
} from "lucide-react";

const programs = [
  {
    title: "Professional & Vocational Training Programs",
    description:
      "AIM SKILLS offers varied line of work and skilled Education Qualifications, Certifications, Diplomas, take a look at Programs on varied segments for job the demand of all the age teams. It works with skilled Organizations and Bodies so as to bridge the ability gap within the Economy. AIM SKILLS works on varied skilled qualifications on Business and Finance, data Technology, Science & Engineering, Media and diversion in association with supposed skilled organizations, subsidization bodies and Universities.",
    icon: GraduationCap,
    accent: "white",
    highlights: [
      "Job-ready skill modules",
      "Practical classroom delivery",
      "Employability-focused outcomes",
    ],
  },
  {
    title: "Faculty Development Programs / TTT",
    description:
      "At Aim Skills, we are offering scientifically designed Train the Trainer / Faculty development programs that are designed to improve teaching and learning experience. These programs are helping various institutions to improve their overall teaching quality and reflecting in their annual results of the students. AIM SKILLS conjointly develops varied Assessment Tests and its preparative Programs to assess the data level of aspirants in skilled and vocational training segments.",
    icon: Presentation,
    accent: "ice",
    highlights: [
      "Train-the-trainer modules",
      "Pedagogy and delivery skills",
      "Institutional capacity building",
    ],
  },
  {
    title: "Rural Development Projects",
    description:
      "​At Aim Skills, we believe learning has no limits – we are able to give learners with the abilities they have to reach the planet of labor and supply employers with the proficient staff they have to spice up their long – term profit and growth. AIM SKILLS offers their skilled and line of work Programs either directly through its centre's/schools/colleges or in association with their partners like company, colleges, universities or alternative skilled and vocational training players.",
    icon: Sprout,
    accent: "white",
    highlights: [
      "Community needs assessment",
      "Livelihood-linked interventions",
      "Local ecosystem strengthening",
    ],
  },
  {
    title: "Corporate Training Programs",
    description:
      "We are offering custom-made training programs to many corporate entities, government organizations and alternative organizations. Aim Skills facilitates each skilled and education. Our training services provides a range of training solutions through a team of pros with expertise in varied segments. We develop custom-made training and preparation as per client's specifications. We conjointly provides trainers to deliver the content developed by the purchasers. Our team assists in identification of training desires, training calendar and conjointly develops tests to work out the training effectiveness.",
    icon: BriefcaseBusiness,
    accent: "ice",
    highlights: [
      "Customized training solutions",
      "Workplace readiness programs",
      "Professional development tracks",
    ],
  },
  {
    title: "Campus Training Programs",
    description:
      "We regularly get in touch with corporate employers and analyze their recruiting trends, technological and infrastructure changes. further we analyze the campuses and try to find the gap between the skills set that the students have and the skills set required by corporate world. After analyzing the gap between the corporate and academia we develop training programs to upgrade the skills of the candidates for a best industry fit. We work on hire and train model for few companies. In which we get candidates interviewed by the employers and after their LOI we impart training to the confirmed candidates.",
    icon: Building2,
    accent: "white",
    highlights: [
      "Campus-to-career preparation",
      "Interview readiness support",
      "Soft skills and communication",
    ],
  },
  {
    title: "Consulting Services",
    description:
      "We practice services notice innovative solutions to deliver property modification in skilled and vocational training. The practice support of AIM SKILLS includes the bid writing by systematically successful writers to assist access different funding, localized practicability studies, recommendation on collaborations, new models of partnerships and mergers, travel learn mapping and market share analysis, labor marketing research for academic cases, info analyses and reviews, inspector level support with quality improvement , self assessment and validation, establishment media practice.",
    icon: Handshake,
    accent: "ice",
    highlights: [
      "CSR program advisory",
      "Project planning and execution",
      "Impact-oriented consulting",
    ],
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

function ProgramCard({ program }) {
  const Icon = program.icon;
  const isIce = program.accent === "ice";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 p-5 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md sm:p-8 ${
        isIce ? "bg-[#EEF3FC]" : "bg-white"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-[#F5E8C0]/0 blur-3xl transition-opacity duration-300 group-hover:bg-[#F5E8C0]/70" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4 sm:mb-7 sm:gap-5">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-sm ring-1 ring-[#B8CCF0]/50 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] sm:size-14">
            <Icon size={24} strokeWidth={2.2} className="sm:size-[27px]" />
          </div>

          <span className="shrink-0 rounded-full border border-[#B8CCF0]/60 bg-white/80 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#1A4DA8] sm:px-3 sm:text-xs">
            Program
          </span>
        </div>

        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#0D2B6B] sm:text-2xl">
          {program.title}
        </h3>

        <div className="mt-3 h-1 w-12 rounded-full bg-[#B8952A] sm:mt-4 sm:w-14" />

        <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
          {program.description}
        </p>

        <div className="mt-6 space-y-2.5 border-t border-slate-200 pt-5 sm:mt-7 sm:space-y-3 sm:pt-6">
          {program.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-slate-700 sm:gap-3"
            >
              <CheckCircle2
                size={17}
                strokeWidth={2.3}
                className="mt-0.5 shrink-0 text-[#B8952A] sm:size-[18px]"
              />
              {highlight}
            </div>
          ))}
        </div>

        <motion.a
          href="/contact"
          whileHover={{
            x: 3,
          }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#2E6FD9] sm:mt-8 sm:py-3"
        >
          Learn More
          <ArrowRight size={16} strokeWidth={2.4} />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function DetailedProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#B8CCF0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.14,
        }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-3 py-1.5 text-xs font-bold text-[#1A4DA8] sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            <BadgeCheck size={16} strokeWidth={2.2} className="sm:size-[17px]" />
            Flagship Programs
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-3xl lg:text-5xl">
            Transformative Programs Designed for{" "}
            <span className="text-[#B8952A]">Growth & Opportunity</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            AimSkills empowers youth, institutions, and organizations through
            industry-focused learning, career development, and scalable
            community impact initiatives.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-10 grid gap-4 sm:gap-6 lg:mt-12 lg:grid-cols-2"
        >
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}