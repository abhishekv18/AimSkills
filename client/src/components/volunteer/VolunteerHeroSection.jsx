
// import { motion } from "framer-motion";
// import { ArrowRight, HandHeart } from "lucide-react";

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

// const heroStats = [
//   { value: "500+", label: "Active Volunteers" },
//   { value: "200+", label: "Workshops Conducted" },
//   { value: "15+", label: "Cities Reached" },
// ];

// export default function VolunteerHeroSection() {
//   return (
//     <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           src="/Gemini_Generated_Image_bc6gfgbc6gfgbc6g.png"
//           alt="AimSkills volunteers working with youth"
//           className="h-full w-full object-cover opacity-80"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      
 
//       <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-22 lg:px-8">
//         <div className="grid gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
//           {/* Left content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-3xl"
//           >
//             <motion.div
//               variants={itemVariants}
//               className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
//             >
//               <HandHeart size={17} strokeWidth={2.2} />
//               Join Our Mission
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Volunteer
//               <br />
             
//                 {/* <br /> */}
//               <span className="text-[#D4AF55]"> With Purpose</span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//             >
//               Share your time and skills to empower youth through education
//               and create lasting change in communities.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="mt-8 flex flex-col gap-3 sm:flex-row"
//             >
//               <a
//                 href="#volunteer-form"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//               >
//                 Apply as Volunteer
//                 <ArrowRight size={16} strokeWidth={2.4} />
//               </a>

//               <a
//                 href="#why-volunteer"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//               >
//                 Explore Opportunities
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right stats - compact like CSR */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex flex-row justify-center gap-2.5 lg:flex-col lg:w-[170px] shrink-0"
//           >
//             {heroStats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="rounded-lg border border-white/15 bg-[#1A4DA8]/40 px-3 py-2.5 lg:px-4 lg:py-3 flex-1 text-center lg:text-left"
//               >
//                 <div className="text-lg lg:text-xl font-extrabold text-[#D4AF55]">
//                   {stat.value}
//                 </div>
//                 <div className="mt-0.5 text-[10px] lg:text-[11px] font-semibold text-white/70">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, HandHeart } from "lucide-react";

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
  { value: "500+", label: "Active Volunteers" },
  { value: "200+", label: "Workshops Conducted" },
  { value: "15+", label: "Cities Reached" },
];

export default function VolunteerHeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[68vh] md:min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_bc6gfgbc6gfgbc6g.png"
          alt="AimSkills volunteers working with youth"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      {/* Decorative Blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-16 sm:-left-24 top-16 sm:top-20 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-6 sm:right-10 top-20 sm:top-24 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[60vh] sm:min-h-[68vh] md:min-h-[72vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="grid gap-8 sm:gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16 lg:items-center">
          {/* ── Left Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
            >
              <HandHeart size={15} strokeWidth={2.2} className="sm:size-[17px]" />
              Join Our Mission
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Volunteer{" "}
              <span className="text-[#D4AF55]">With Purpose</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-5 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-200"
            >
              Share your time and skills to empower youth through education
              and create lasting change in communities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3"
            >
              <a
                href="#volunteer-form"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#B8952A] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] active:scale-[0.98]"
              >
                Apply as Volunteer
                <ArrowRight size={15} strokeWidth={2.4} className="sm:size-[16px]" />
              </a>

              <a
                href="#why-volunteer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#1A4DA8] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9] active:scale-[0.98]"
              >
                Explore Opportunities
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Stats ── */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row justify-center gap-2 sm:gap-2.5 lg:flex-col lg:w-[160px] xl:w-[170px] shrink-0"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/15 bg-[#1A4DA8]/40 px-2.5 sm:px-3 py-2 sm:py-2.5 lg:px-4 lg:py-3 flex-1 text-center lg:text-left backdrop-blur-sm transition-all duration-300 hover:bg-[#1A4DA8]/50 hover:border-white/25"
              >
                <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#D4AF55]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-white/70">
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