// // src/components/hire/HireHeroSection.jsx
// import { motion } from "framer-motion";
// import { ArrowRight, BriefcaseBusiness, UsersRound } from "lucide-react";

// const stats = [
//   { value: "10,000+", label: "Trained Candidates" },
//   { value: "85%", label: "Placement Success" },
//   { value: "100+", label: "Training Programs" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//       delayChildren: 0.14,
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
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function HireHeroSection() {
//   return (
//     <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           src="/assets/hire/hire-hero.jpg"
//           alt="HR team interviewing trained AimSkills candidates"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/92 via-[#0D2B6B]/74 to-[#0D2B6B]/24" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-[#0D2B6B]/15" />

//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

//       <div className="pointer-events-none absolute bottom-10 right-24 hidden h-40 w-40 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm lg:block" />

//       <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-4xl"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
//           >
//             <BriefcaseBusiness size={17} strokeWidth={2.2} />
//             Placement & Hiring Support
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//           >
//             Hire Trained{" "}
//             <span className="text-[#D4AF55]">Candidates</span>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//           >
//             Connect with industry-ready candidates trained through practical,
//             career-focused programs at AimSkills.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <a
//               href="#hire-form"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//             >
//               Request Candidates
//               <ArrowRight size={18} strokeWidth={2.4} />
//             </a>

//             <a
//               href="/programs"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-7 py-4 text-base font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//             >
//               Explore Programs
//             </a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl"
//         >
//           <div className="rounded-2xl bg-white p-5">
//             <div className="flex items-start gap-4">
//               <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8]">
//                 <UsersRound size={24} strokeWidth={2.2} />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-[#0D2B6B]">
//                   Placement-ready talent pool
//                 </h3>
//                 <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                   Access trained candidates prepared for interviews, workplace
//                   expectations, and entry-level career roles.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
//             {stats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="rounded-2xl border border-white/10 bg-white/10 p-4"
//               >
//                 <div className="text-2xl font-extrabold text-[#D4AF55]">
//                   {stat.value}
//                 </div>
//                 <div className="mt-1 text-sm font-semibold text-white/80">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/hire/HireHeroSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.14,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroStats = [
  { value: "10,000+", label: "Trained Candidates" },
  { value: "85%", label: "Placement Success" },
  { value: "100+", label: "Programs Delivered" },
];

export default function HireHeroSection() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_ou17kuou17kuou17.png"
          alt="HR team interviewing trained AimSkills candidates"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      
    
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-22 lg:px-8">
        <div className="grid gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm"
            >
              <BriefcaseBusiness size={17} strokeWidth={2.2} />
              Placement & Hiring Support
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hire Trained
              <br />
            <span className="text-[#D4AF55]"> Candidates</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
            >
              Connect with industry-ready candidates trained through practical,
              career-focused programs at Aim Skills.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#hire-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
              >
                Request Candidates
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
              >
                Explore Programs
              </a>
            </motion.div>
          </motion.div>

          {/* Right stats - compact like CSR */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row justify-center gap-2.5 lg:flex-col lg:w-[170px] shrink-0"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/15 bg-[#1A4DA8]/40 px-3 py-2.5 lg:px-4 lg:py-3 flex-1 text-center lg:text-left"
              >
                <div className="text-lg lg:text-xl font-extrabold text-[#D4AF55]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[10px] lg:text-[11px] font-semibold text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}