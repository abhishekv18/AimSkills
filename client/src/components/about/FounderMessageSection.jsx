// // src/components/about/FounderMessageSection.jsx
// import { motion } from "framer-motion";
// import { Quote, Sparkles } from "lucide-react";

// const sectionVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
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
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function FounderMessageSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.18 }}
//         className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8"
//       >
//         <motion.div variants={itemVariants} className="relative">
//           <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-[#EEF3FC]" />
//           <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" />

//           <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
//             <img
//               src="/src/assets/Picture1.png"
//               alt="Founder of AimSkills"
//               className="h-[420px] w-full rounded-2xl object-cover sm:h-[520px]"
//             />
//             <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
//               <p className="text-sm font-extrabold text-[#0D2B6B]">
//                 Leadership with purpose
//               </p>
//               <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                 Guided by a long-term commitment to skills, dignity, and
//                 sustainable opportunity.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div variants={sectionVariants} className="max-w-2xl">
//           <motion.div
//             variants={itemVariants}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
//           >
//             <Sparkles size={17} strokeWidth={2.2} />
//             Founder’s Message
//           </motion.div>

//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
//           >
//             A Vision Rooted in{" "}
//             <span className="text-[#B8952A]">Opportunity & Dignity</span>
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             className="mt-7 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8"
//           >
//             <Quote size={42} strokeWidth={1.8} className="text-[#B8952A]/30" />

//             <p className="mt-5 text-lg font-medium leading-9 text-slate-700">
//               “AimSkills was built with a simple belief: when young people are
//               given the right skills, guidance, and confidence, they can
//               transform not only their own lives but also the future of their
//               families and communities.”
//             </p>

//             <p className="mt-5 text-base font-medium leading-8 text-slate-600">
//               Our work is focused on creating practical learning pathways,
//               strengthening employability, and building partnerships that make
//               development measurable and sustainable.
//             </p>

//             <div className="mt-7 h-px w-full bg-slate-200" />

//             <div className="mt-6">
//               <p className="text-base font-extrabold text-[#0D2B6B]">
//                 Founder, AimSkills
//               </p>
//               <p className="mt-1 text-sm font-semibold text-slate-500">
//                 Building skills. Creating confidence. Enabling futures.
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/about/FounderMessageSection.jsx

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FounderMessageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Blur Effects */}
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8"
      >
        {/* Left Image */}
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-[#EEF3FC]" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" />

          <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-lg">
            <img
              src="/Picture1.png"
              alt="Founder of Aim Skills Education Trust"
              className="h-[430px] w-full rounded-2xl object-cover sm:h-[540px]"
            />

            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-md backdrop-blur-md">
              <p className="text-sm font-extrabold text-[#0D2B6B]">
                Leadership with Purpose
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                Building opportunities through skill development, dignity,
                confidence, and sustainable impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={sectionVariants} className="max-w-2xl">
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
          >
            <Sparkles size={17} strokeWidth={2.2} />
            Founder’s Message
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
          >
            A Vision Built on{" "}
            <span className="text-[#B8952A]">
              Skills, Dignity & Hope
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <Quote
              size={42}
              strokeWidth={1.8}
              className="text-[#B8952A]/30"
            />

            <p className="mt-5 text-lg font-medium leading-9 text-slate-700">
              “Every journey begins with a question. Mine was simple yet
              powerful: What happens when the right skill reaches the right
              person at the right time?”
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-slate-600">
              Over the years, I have met young people full of dreams but
              limited by opportunity, women waiting for a chance to stand
              independently, and families who believed education and skills
              could transform their future but did not know where to begin.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-slate-600">
              Aim Skills Education Trust was born from this responsibility —
              a belief that skill development is not only about employment,
              but also about dignity, confidence, and hope. When someone
              learns a skill, they do not just earn an income. They strengthen
              families, inspire communities, and contribute toward a stronger
              India.
            </p>

            {/* <p className="mt-5 text-base font-medium leading-8 text-slate-600">
              Our journey continues through collaboration with communities,
              educators, institutions, government bodies, and CSR partners to
              create opportunities that are meaningful, measurable, and
              lasting.
            </p> */}

            <p className="mt-5 text-base font-medium leading-8 text-slate-600">
              This mission is far from complete. But through shared commitment,
              compassion, and collective effort, we can create a future where
              no dream is limited by lack of opportunity.
            </p>

            <div className="mt-7 h-px w-full bg-slate-200" />

            <div className="mt-6">
              <p className="text-lg font-extrabold text-[#0D2B6B]">
                Ankit Kumar
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                Founder & Director, Aim Skills Education Trust
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}