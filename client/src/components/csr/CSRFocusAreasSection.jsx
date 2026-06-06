// // src/components/csr/CSRFocusAreasSection.jsx
// import { motion } from "framer-motion";
// import {
//   BriefcaseBusiness,
//   Building2,
//   GraduationCap,
//   HandHeart,
//   Landmark,
//   Sprout,
// } from "lucide-react";

// const focusAreas = [
//   {
//     title: "Youth Skill Development",
//     description:
//       "Training programs that prepare learners for employment, interviews, communication, and workplace readiness.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Placement-Linked Training",
//     description:
//       "Career pathways focused on practical employability, confidence, and transition into livelihood opportunities.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Rural Development",
//     description:
//       "Community initiatives that build local capability, awareness, and sustainable village-level progress.",
//     icon: Sprout,
//   },
//   {
//     title: "SHG Empowerment",
//     description:
//       "Support for self-help groups through training, capacity building, and livelihood-linked awareness.",
//     icon: HandHeart,
//   },
//   {
//     title: "Institutional Capacity Building",
//     description:
//       "Faculty development, trainer enablement, and structured learning systems for institutions.",
//     icon: Building2,
//   },
//   {
//     title: "Government Scheme Enablement",
//     description:
//       "Implementation support that helps communities access relevant social and development schemes.",
//     icon: Landmark,
//   },
// ];

// const sectionVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.58,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function CSRFocusAreasSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.16 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={cardVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             CSR Focus Areas
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Impact Areas Designed for{" "}
//             <span className="text-[#B8952A]">Corporate Partnership</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Choose from structured CSR themes that can be customized based on
//             geography, beneficiary group, budget, and impact goals.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
//         >
//           {focusAreas.map((area) => {
//             const Icon = area.icon;

//             return (
//               <motion.article
//                 key={area.title}
//                 variants={cardVariants}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//               >
//                 <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//                 <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//                 <div className="relative">
//                   <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                     <Icon size={23} strokeWidth={2.2} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-extrabold text-[#0D2B6B]">
//                     {area.title}
//                   </h3>

//                   <div className="mt-4 h-1 w-12 rounded-full bg-[#B8952A] transition-all duration-300 group-hover:w-20" />

//                   <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
//                     {area.description}
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
// src/components/csr/CSRFocusAreasSection.jsx
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HandHeart,
  Landmark,
  Sprout,
} from "lucide-react";

const focusAreas = [
  {
    title: "Youth Skill Development",
    description:
      "Training programs that prepare learners for employment, interviews, communication, and workplace readiness.",
    icon: GraduationCap,
  },
  {
    title: "Placement-Linked Training",
    description:
      "Career pathways focused on practical employability, confidence, and transition into livelihood opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Rural Development",
    description:
      "Community initiatives that build local capability, awareness, and sustainable village-level progress.",
    icon: Sprout,
  },
  {
    title: "SHG Empowerment",
    description:
      "Support for self-help groups through training, capacity building, and livelihood-linked awareness.",
    icon: HandHeart,
  },
  {
    title: "Institutional Capacity Building",
    description:
      "Faculty development, trainer enablement, and structured learning systems for institutions.",
    icon: Building2,
  },
  {
    title: "Government Scheme Enablement",
    description:
      "Implementation support that helps communities access relevant social and development schemes.",
    icon: Landmark,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CSRFocusAreasSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A]" />
            CSR Focus Areas
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Impact Areas Designed for{" "}
            <span className="text-[#B8952A]">Corporate Partnership</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Choose from structured CSR themes that can be customized based on
            geography, beneficiary group, budget, and impact goals.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Focus Areas Grid */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-extrabold text-[#0D2B6B]">
                    {area.title}
                  </h3>

                  {/* Animated divider */}
                  <div className="mt-3 sm:mt-4 h-1 w-10 sm:w-12 rounded-full bg-[#B8952A] transition-all duration-300 group-hover:w-16 sm:group-hover:w-20" />

                  {/* Description */}
                  <p className="mt-4 sm:mt-5 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {area.description}
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