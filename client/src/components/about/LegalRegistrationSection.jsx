// // src/components/about/LegalRegistrationSection.jsx
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   ClipboardCheck,
//   FileCheck2,
//   Landmark,
//   ShieldCheck,
// } from "lucide-react";

// const legalItems = [
//   {
//     title: "Registered Non-Profit",
//     description:
//       "Operating with a formal structure dedicated to skill development, education, and social upliftment.",
//     icon: Landmark,
//   },
//   {
//     title: "Transparent Governance",
//     description:
//       "Committed to responsible execution, clear documentation, and ethical institutional practices.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Program Documentation",
//     description:
//       "Training delivery, beneficiary engagement, and impact outcomes are supported through structured records.",
//     icon: FileCheck2,
//   },
//   {
//     title: "CSR-Ready Systems",
//     description:
//       "Built to support corporate partnerships through measurable outcomes and accountable reporting.",
//     icon: ClipboardCheck,
//   },
// ];

// const sectionVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.62,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function LegalRegistrationSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.18 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//           <motion.div variants={itemVariants} className="lg:sticky lg:top-28">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//               <BadgeCheck size={17} strokeWidth={2.2} />
//               Legal Authenticity
//             </div>

//             <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//               Built on Trust, Compliance, and{" "}
//               <span className="text-[#B8952A]">Accountability</span>
//             </h2>

//             <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
//               AimSkills works as a registered non-profit organization with a
//               commitment to responsible governance, transparent implementation,
//               and long-term institutional credibility.
//             </p>

//             <div className="mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//           </motion.div>

//           <motion.div
//             variants={sectionVariants}
//             className="grid gap-5 sm:grid-cols-2"
//           >
//             {legalItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <motion.article
//                   key={item.title}
//                   variants={itemVariants}
//                   whileHover={{ y: -6, scale: 1.02 }}
//                   className="group rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//                 >
//                   <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                     <Icon size={23} strokeWidth={2.2} />
//                   </div>

//                   <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/about/LegalRegistrationSection.jsx
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const legalItems = [
  {
    title: "Registered Non-Profit",
    description:
      "Operating with a formal structure dedicated to skill development, education, and social upliftment.",
    icon: Landmark,
  },
  {
    title: "Transparent Governance",
    description:
      "Committed to responsible execution, clear documentation, and ethical institutional practices.",
    icon: ShieldCheck,
  },
  {
    title: "Program Documentation",
    description:
      "Training delivery, beneficiary engagement, and impact outcomes are supported through structured records.",
    icon: FileCheck2,
  },
  {
    title: "CSR-Ready Systems",
    description:
      "Built to support corporate partnerships through measurable outcomes and accountable reporting.",
    icon: ClipboardCheck,
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

export default function LegalRegistrationSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background patterns - responsive sizing */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[size:clamp(22px,3vw,30px)_clamp(22px,3vw,30px)] opacity-30" />
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* ── Left Column: Sticky Info ── */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-28">
            {/* Badge */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
              <BadgeCheck size={15} strokeWidth={2.2} className="sm:size-[17px]" />
              Legal Authenticity
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
              Built on Trust, Compliance, and{" "}
              <span className="text-[#B8952A]">Accountability</span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-700">
              AimSkills works as a registered non-profit organization with a
              commitment to responsible governance, transparent implementation,
              and long-term institutional credibility.
            </p>

            {/* Divider */}
            <div className="mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
          </motion.div>

          {/* ── Right Column: Legal Cards ── */}
          <motion.div
            variants={sectionVariants}
            className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2"
          >
            {legalItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-2xl border border-white/70 bg-white/85 p-5 sm:p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {item.description}
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