
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   CheckCircle2,
//   GraduationCap,
//   Sparkles,
//   Target,
//   TrendingUp,
//   Users,
// } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const capabilities = [
//   {
//     icon: GraduationCap,
//     title: "Structured Skill Training",
//     description:
//       "Our programs combine technical knowledge with practical application, ensuring candidates are job-ready from day one.",
//     stats: "10,000+ trained",
//     color: "from-[#EEF3FC] to-white",
//     iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
//     borderColor: "border-[#B8CCF0]/60",
//   },
//   {
//     icon: Target,
//     title: "Placement-Focused Preparation",
//     description:
//       "Candidates undergo mock interviews, resume workshops, and professional conduct training before meeting employers.",
//     stats: "85% placement rate",
//     color: "from-[#F5E8C0]/30 to-white",
//     iconBg: "bg-[#F5E8C0] text-[#B8952A]",
//     borderColor: "border-[#D4AF55]/40",
//   },
//   {
//     icon: TrendingUp,
//     title: "Continuous Performance Tracking",
//     description:
//       "We monitor learner progress through assessments, feedback loops, and skill benchmarks that employers can trust.",
//     stats: "100+ hiring partners",
//     color: "from-emerald-50 to-white",
//     iconBg: "bg-emerald-50 text-emerald-600",
//     borderColor: "border-emerald-200",
//   },
// ];

// const differentiators = [
//   {
//     title: "Pre-screened candidates save you time",
//     description:
//       "Every candidate completes verified training modules. You meet only those who match your role requirements.",
//   },
//   {
//     title: "Industry-aligned curriculum",
//     description:
//       "Training content is designed with input from employers, ensuring relevance to current market needs and trends.",
//   },
//   {
//     title: "Post-placement support included",
//     description:
//       "We stay connected with both employer and candidate after hiring to ensure smooth onboarding and early success.",
//   },
// ];

// export default function IndustryReadySection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       {/* Background decorations */}
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/40 blur-3xl" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E6FD9]/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <Sparkles size={17} strokeWidth={2.2} />
//             Why Hire From Aim Skills
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Candidates Built for{" "}
//             <span className="text-[#B8952A]">Real Work</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Skip the long screening. Our candidates arrive with verified skills,
//             workplace readiness, and the confidence to contribute immediately.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         {/* Capability Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-14 grid gap-6 md:grid-cols-3"
//         >
//           {capabilities.map((capability) => {
//             const Icon = capability.icon;
//             return (
//               <motion.div
//                 key={capability.title}
//                 variants={itemVariants}
//                 whileHover={{ y: -6 }}
//                 className={`group relative overflow-hidden rounded-2xl border ${capability.borderColor} bg-gradient-to-b ${capability.color} p-6 shadow-sm transition-all duration-300 hover:shadow-xl`}
//               >
//                 <div className="mb-5 flex items-start justify-between">
//                   <div
//                     className={`flex size-12 items-center justify-center rounded-xl ${capability.iconBg} transition-transform duration-300 group-hover:scale-110`}
//                   >
//                     <Icon size={24} strokeWidth={2} />
//                   </div>
//                   <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0D2B6B] shadow-sm">
//                     {capability.stats}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#0D2B6B]">
//                   {capability.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   {capability.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom Section - Two Column */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12"
//         >
//           {/* What makes us different */}
//           <div className="rounded-3xl border border-[#B8CCF0]/50 bg-gradient-to-br from-[#EEF3FC] to-white p-8 shadow-lg sm:p-10">
//             <div className="mb-6 flex items-center gap-3">
//               <div className="flex size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white">
//                 <Target size={20} strokeWidth={2.2} />
//               </div>
//               <h3 className="text-xl font-extrabold text-[#0D2B6B]">
//                 What Sets Us Apart
//               </h3>
//             </div>

//             <div className="space-y-4">
//               {differentiators.map((item) => (
//                 <div
//                   key={item.title}
//                   className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
//                 >
//                   <div className="flex items-start gap-3">
//                     <CheckCircle2
//                       size={18}
//                       strokeWidth={2.4}
//                       className="mt-0.5 shrink-0 text-[#B8952A]"
//                     />
//                     <div>
//                       <h4 className="text-sm font-bold text-[#0D2B6B]">
//                         {item.title}
//                       </h4>
//                       <p className="mt-1 text-sm leading-6 text-slate-600">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats showcase */}
//           <div className="rounded-3xl border border-[#D4AF55]/30 bg-gradient-to-br from-[#F5E8C0]/20 to-white p-8 shadow-lg sm:p-10">
//             <div className="mb-6 flex items-center gap-3">
//               <div className="flex size-10 items-center justify-center rounded-xl bg-[#B8952A] text-white">
//                 <Users size={20} strokeWidth={2.2} />
//               </div>
//               <h3 className="text-xl font-extrabold text-[#0D2B6B]">
//                 Talent Pool by Numbers
//               </h3>
//             </div>

//             <div className="space-y-4">
//               <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
//                 <div className="text-3xl font-extrabold text-[#B8952A]">
//                   10,000+
//                 </div>
//                 <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
//                   Candidates trained and ready
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
//                 <div className="text-3xl font-extrabold text-[#B8952A]">
//                   85%
//                 </div>
//                 <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
//                   Placement success rate
//                 </div>
//               </div>

//               <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-5 shadow-sm">
//                 <div className="text-3xl font-extrabold text-[#B8952A]">
//                   100+
//                 </div>
//                 <div className="mt-1 text-sm font-semibold text-[#0D2B6B]">
//                   Organizations hiring regularly
//                 </div>
//               </div>
//             </div>

//             <a
//               href="#hire-form"
//               className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#B8952A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] hover:shadow-xl"
//             >
//               <Briefcase size={18} strokeWidth={2.4} />
//               Start Hiring Now
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background decorations - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E6FD9]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Sparkles size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Why Hire From Aim Skills
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Candidates Built for{" "}
            <span className="text-[#B8952A]">Real Work</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Skip the long screening. Our candidates arrive with verified skills,
            workplace readiness, and the confidence to contribute immediately.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 sm:mt-12 lg:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl border ${capability.borderColor} bg-gradient-to-b ${capability.color} p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl`}
              >
                <div className="mb-4 sm:mb-5 flex items-start justify-between">
                  <div
                    className={`flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-xl ${capability.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} strokeWidth={2} className="sm:size-[22px] md:size-[24px]" />
                  </div>
                  <span className="rounded-full bg-white px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-[#0D2B6B] shadow-sm">
                    {capability.stats}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0D2B6B]">
                  {capability.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
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
          className="mt-12 sm:mt-14 lg:mt-16 grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2"
        >
          {/* What makes us different */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#B8CCF0]/50 bg-gradient-to-br from-[#EEF3FC] to-white p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="mb-5 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white">
                <Target size={18} strokeWidth={2.2} className="sm:size-[20px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0D2B6B]">
                What Sets Us Apart
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.4}
                      className="mt-0.5 shrink-0 text-[#B8952A] sm:size-[18px]"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0D2B6B]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats showcase */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#D4AF55]/30 bg-gradient-to-br from-[#F5E8C0]/20 to-white p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="mb-5 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-[#B8952A] text-white">
                <Users size={18} strokeWidth={2.2} className="sm:size-[20px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0D2B6B]">
                Talent Pool by Numbers
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B8952A]">
                  10,000+
                </div>
                <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-[#0D2B6B]">
                  Candidates trained and ready
                </div>
              </div>

              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B8952A]">
                  85%
                </div>
                <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-[#0D2B6B]">
                  Placement success rate
                </div>
              </div>

              <div className="rounded-xl border border-[#D4AF55]/30 bg-white p-4 sm:p-5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B8952A]">
                  100+
                </div>
                <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-[#0D2B6B]">
                  Organizations hiring regularly
                </div>
              </div>
            </div>

            <a
              href="#hire-form"
              className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#B8952A] px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-[#B8952A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] hover:shadow-xl"
            >
              <Briefcase size={16} strokeWidth={2.4} className="sm:size-[18px]" />
              Start Hiring Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}