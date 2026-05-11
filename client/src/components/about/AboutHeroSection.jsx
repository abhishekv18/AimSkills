// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//       delayChildren: 0.15,
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

// export default function AboutHeroSection() {
//   return (
//     <section className="relative min-h-[80vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           // src="/src/assets/Gemini_Generated_Image_sy3pujsy3pujsy3p.png"
//           src="/src/assets/Gemini_Generated_Image_tjvwk8tjvwk8tjvw.png"
//           alt="AimSkills students and trainers"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/80 via-[#0D2B6B]/62 to-transparent" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/45 via-transparent to-[#0D2B6B]/10" />

//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-8 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
//       {/* <div className="pointer-events-none absolute bottom-10 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
//       <div className="pointer-events-none absolute bottom-28 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10 backdrop-blur-sm" /> */}
//     <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
//       <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10" />

//       <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-28 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl text-left"
//         >

//               <motion.nav
//             variants={itemVariants}
//             aria-label="Breadcrumb"
//             className="mb-6 flex items-center gap-2 text-sm font-semibold text-white/75"
//           >
//             <a
//               href="/"
//               className="transition-colors hover:text-[#F5E8C0]"
//             >
//               Home
//             </a>
//             <ChevronRight size={16} strokeWidth={2.4} />
//             <span className="text-[#F5E8C0]">About</span>
//           </motion.nav>

//           <motion.div
//             variants={itemVariants}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
//           >
//             <span className="h-2 w-2 rounded-full bg-[#D4AF55]" />
//             Our Story
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//           >
//             About AimSkills
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//           >
//             Empowering youth through skills, education, and opportunity
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-8 h-1 w-24 rounded-full bg-[#B8952A]"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/about/AboutHeroSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

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
  { value: "2018", label: "Founded" },
  { value: "10,000+", label: "Lives Impacted" },
  { value: "15+", label: "States Reached" },
];

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/src/assets/Gemini_Generated_Image_qlgakaqlgakaqlga.png"
          alt="AimSkills students and trainers"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      
      <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10" />

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 lg:px-8">
        <div className="grid gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.nav
              variants={itemVariants}
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-white/75"
            >
              <a
                href="/"
                className="transition-colors hover:text-[#F5E8C0]"
              >
                Home
              </a>
              <ChevronRight size={16} strokeWidth={2.4} />
              <span className="text-[#F5E8C0]">About Us</span>
            </motion.nav>

            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#D4AF55]" />
              Our Story & Mission
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              About AimSkills
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
            >
              Empowering youth through skill development, education, and 
              meaningful career opportunities across India.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#mission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
              >
                Our Mission
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
              >
                Meet Our Team
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