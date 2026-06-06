// // src/components/csr/WhyPartnerSection.jsx
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   ClipboardCheck,
//   Layers3,
//   LineChart,
//   Network,
// } from "lucide-react";

// const reasons = [
//   {
//     title: "Scalable Implementation",
//     description:
//       "Programs can be structured across communities, institutions, and learner groups with repeatable execution systems.",
//     icon: Layers3,
//   },
//   {
//     title: "Outcome Reporting",
//     description:
//       "Clear impact documentation helps CSR teams track progress, outcomes, and measurable social returns.",
//     icon: LineChart,
//   },
//   {
//     title: "Community Network",
//     description:
//       "Ground-level experience helps us connect with beneficiaries, trainers, local partners, and institutions.",
//     icon: Network,
//   },
//   {
//     title: "Compliance-Ready Process",
//     description:
//       "Professional project planning, monitoring, and reporting support stronger corporate governance.",
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

// export default function WhyPartnerSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
//       <div className="pointer-events-none absolute -left-28 top-16 h-96 w-96 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-96 w-96 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.16 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <BadgeCheck size={17} strokeWidth={2.2} />
//             Why Partner With Aim Skills
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             CSR Programs Built for{" "}
//             <span className="text-[#B8952A]">Trust & Scale</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             We bring the discipline of institutional execution together with
//             the empathy of grassroots development.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-4"
//         >
//           {reasons.map((reason) => {
//             const Icon = reason.icon;

//             return (
//               <motion.article
//                 key={reason.title}
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.025 }}
//                 className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#B8CCF0] hover:shadow-md"
//               >
//                 <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//                 <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//                 <div className="relative">
//                   <div className="flex size-13 h-13 w-13 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] group-hover:-rotate-3 group-hover:scale-105">
//                     <Icon size={25} strokeWidth={2.2} />
//                   </div>

//                   <h3 className="mt-7 text-lg font-extrabold text-[#0D2B6B]">
//                     {reason.title}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
//                     {reason.description}
//                   </p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/csr/WhyPartnerSection.jsx
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  Layers3,
  LineChart,
  Network,
} from "lucide-react";

const reasons = [
  {
    title: "Scalable Implementation",
    description:
      "Programs can be structured across communities, institutions, and learner groups with repeatable execution systems.",
    icon: Layers3,
  },
  {
    title: "Outcome Reporting",
    description:
      "Clear impact documentation helps CSR teams track progress, outcomes, and measurable social returns.",
    icon: LineChart,
  },
  {
    title: "Community Network",
    description:
      "Ground-level experience helps us connect with beneficiaries, trainers, local partners, and institutions.",
    icon: Network,
  },
  {
    title: "Compliance-Ready Process",
    description:
      "Professional project planning, monitoring, and reporting support stronger corporate governance.",
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

export default function WhyPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background patterns - responsive sizing */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[size:clamp(22px,3vw,30px)_clamp(22px,3vw,30px)] opacity-30" />
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-72 sm:h-84 md:h-96 w-72 sm:w-84 md:w-96 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-72 sm:h-84 md:h-96 w-72 sm:w-84 md:w-96 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <BadgeCheck size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Why Partner With Aim Skills
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            CSR Programs Built for{" "}
            <span className="text-[#B8952A]">Trust & Scale</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            We bring the discipline of institutional execution together with
            the empathy of grassroots development.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#B8CCF0] hover:shadow-md"
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex size-11 sm:size-12 md:size-13 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] group-hover:-rotate-3 group-hover:scale-105">
                    <Icon size={22} strokeWidth={2.2} className="sm:size-[24px] md:size-[25px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 md:mt-7 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}