// // src/components/hire/IndustryReadySection.jsx
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   CheckCircle2,
//   MessageSquareText,
//   MonitorCheck,
//   UserCheck,
// } from "lucide-react";

// const blocks = [
//   {
//     eyebrow: "Skilled Workforce Development",
//     title: "A Talent Pipeline Built Through Practical Training",
//     description:
//       "AimSkills prepares candidates through structured programs that focus on communication, technical fundamentals, workplace readiness, and career confidence.",
//     image: "/assets/hire/workforce.jpg",
//     direction: "image-left",
//     highlights: [
//       "Communication Skills",
//       "Technical Training",
//       "Workplace Readiness",
//     ],
//     icon: MonitorCheck,
//     stat: "10,000+ trained learners",
//   },
//   {
//     eyebrow: "Corporate-Ready Candidate Training",
//     title: "Candidates Prepared for Hiring Conversations",
//     description:
//       "Our placement-oriented learning approach helps candidates understand interview expectations, professional conduct, and the needs of modern workplaces.",
//     image: "/assets/hire/corporate-ready.jpg",
//     direction: "content-left",
//     highlights: [
//       "Interview Preparation",
//       "Role Readiness",
//       "Professional Behavior",
//     ],
//     icon: UserCheck,
//     stat: "85% placement success",
//   },
// ];

// const sectionVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.16,
//       delayChildren: 0.12,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.68,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function IndustryBlock({ block }) {
//   const Icon = block.icon;
//   const imageFirst = block.direction === "image-left";

//   const imageContent = (
//     <motion.div
//       variants={itemVariants}
//       whileHover={{ y: -6, scale: 1.015 }}
//       className="group relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
//     >
//       <img
//         src={block.image}
//         alt={block.title}
//         className="h-[340px] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
//       />
//       <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/58 via-transparent to-transparent" />
//       <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
//         <div className="flex items-start gap-4">
//           <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//             <Icon size={21} strokeWidth={2.2} />
//           </div>
//           <div>
//             <p className="text-sm font-extrabold text-[#0D2B6B]">
//               {block.stat}
//             </p>
//             <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
//               Training designed for employment-focused outcomes.
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );

//   const textContent = (
//     <motion.div variants={itemVariants} className="flex items-center">
//       <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:p-10">
//         <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//           <Icon size={17} strokeWidth={2.2} />
//           {block.eyebrow}
//         </div>

//         <h3 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl">
//           {block.title}
//         </h3>

//         <div className="mt-6 h-1 w-20 rounded-full bg-[#B8952A]" />

//         <p className="mt-6 text-base font-medium leading-8 text-slate-700 sm:text-lg">
//           {block.description}
//         </p>

//         <div className="mt-8 grid gap-3">
//           {block.highlights.map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8F9FB] px-4 py-3 text-sm font-bold text-[#0D2B6B]"
//             >
//               <CheckCircle2
//                 size={18}
//                 strokeWidth={2.4}
//                 className="shrink-0 text-[#B8952A]"
//               />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//       {imageFirst ? (
//         <>
//           {imageContent}
//           {textContent}
//         </>
//       ) : (
//         <>
//           {textContent}
//           {imageContent}
//         </>
//       )}
//     </div>
//   );
// }

// export default function IndustryReadySection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.12 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <MessageSquareText size={17} strokeWidth={2.2} />
//             Industry-Ready Talent
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Trained Candidates for{" "}
//             <span className="text-[#B8952A]">Modern Hiring Needs</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             AimSkills develops candidate readiness through applied learning,
//             career guidance, and placement-oriented preparation.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <div className="space-y-12 lg:space-y-16">
//           {blocks.map((block) => (
//             <IndustryBlock key={block.title} block={block} />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/hire/IndustryReadySection.jsx
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const capabilities = [
  {
    icon: GraduationCap,
    title: "Structured Skill Training",
    description:
      "Our programs combine technical knowledge with practical application, ensuring candidates are job-ready from day one.",
    stats: "10,000+ trained",
    color: "from-[#EEF3FC] to-white",
    iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
    borderColor: "border-[#B8CCF0]/60",
  },
  {
    icon: Target,
    title: "Placement-Focused Preparation",
    description:
      "Candidates undergo mock interviews, resume workshops, and professional conduct training before meeting employers.",
    stats: "85% placement rate",
    color: "from-[#F5E8C0]/30 to-white",
    iconBg: "bg-[#F5E8C0] text-[#B8952A]",
    borderColor: "border-[#D4AF55]/40",
  },
  {
    icon: TrendingUp,
    title: "Continuous Performance Tracking",
    description:
      "We monitor learner progress through assessments, feedback loops, and skill benchmarks that employers can trust.",
    stats: "100+ hiring partners",
    color: "from-emerald-50 to-white",
    iconBg: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-200",
  },
];

const differentiators = [
  {
    title: "Pre-screened candidates save you time",
    description:
      "Every candidate completes verified training modules. You meet only those who match your role requirements.",
  },
  {
    title: "Industry-aligned curriculum",
    description:
      "Training content is designed with input from employers, ensuring relevance to current market needs and trends.",
  },
  {
    title: "Post-placement support included",
    description:
      "We stay connected with both employer and candidate after hiring to ensure smooth onboarding and early success.",
  },
];

export default function IndustryReadySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E6FD9]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Sparkles size={17} strokeWidth={2.2} />
            Why Hire From Aim Skills
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Candidates Built for{" "}
            <span className="text-[#B8952A]">Real Work</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Skip the long screening. Our candidates arrive with verified skills,
            workplace readiness, and the confidence to contribute immediately.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl border ${capability.borderColor} bg-gradient-to-b ${capability.color} p-6 shadow-sm transition-all duration-300 hover:shadow-xl`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${capability.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0D2B6B] shadow-sm">
                    {capability.stats}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0D2B6B]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section - Two Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* What makes us different */}
          <div className="rounded-3xl border border-[#B8CCF0]/50 bg-gradient-to-br from-[#EEF3FC] to-white p-8 shadow-lg sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white">
                <Target size={20} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-extrabold text-[#0D2B6B]">
                What Sets Us Apart
              </h3>
            </div>

            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      strokeWidth={2.4}
                      className="mt-0.5 shrink-0 text-[#B8952A]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#0D2B6B]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats showcase */}
          <div className="rounded-3xl border border-[#D4AF55]/30 bg-gradient-to-br from-[#F5E8C0]/20 to-white p-8 shadow-lg sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#B8952A] text-white">
                <Users size={20} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-extrabold text-[#0D2B6B]">
                Talent Pool by Numbers
              </h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-[#B8952A]">
                  10,000+
                </div>
                <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
                  Candidates trained and ready
                </div>
              </div>

              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-[#B8952A]">
                  85%
                </div>
                <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
                  Placement success rate
                </div>
              </div>

              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-[#B8952A]">
                  100+
                </div>
                <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
                  Organizations hiring regularly
                </div>
              </div>
            </div>

            <a
              href="#hire-form"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#B8952A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] hover:shadow-xl"
            >
              <Briefcase size={18} strokeWidth={2.4} />
              Start Hiring Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}