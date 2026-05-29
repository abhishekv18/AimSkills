// // src/components/volunteer/VolunteerHeroSection.jsx
// import { motion } from "framer-motion";
// import { ArrowRight, HandHeart, Users } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.14, delayChildren: 0.14 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function VolunteerHeroSection() {
//   return (
//     <section className="relative min-h-[82vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           src="/assets/volunteer/volunteer-hero.jpg"
//           alt="AimSkills volunteers working with youth"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/92 via-[#0D2B6B]/72 to-[#0D2B6B]/22" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-[#0D2B6B]/15" />
//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

//       <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
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
//             <HandHeart size={17} strokeWidth={2.2} />
//             Volunteer With AimSkills
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//           >
//             Become A <span className="text-[#D4AF55]">Volunteer</span>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//           >
//             Join AimSkills in empowering communities through education, skills,
//             and meaningful social impact.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <a
//               href="#volunteer-form"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//             >
//               Join Now
//               <ArrowRight size={18} strokeWidth={2.4} />
//             </a>

//             <a
//               href="#why-volunteer"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-7 py-4 text-base font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//             >
//               Learn More
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
//                 <Users size={24} strokeWidth={2.2} />
//               </div>

//               <div>
//                 <h3 className="text-lg font-extrabold text-[#0D2B6B]">
//                   Together We Create Impact
//                 </h3>
//                 <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                   Your time, skill, and care can help learners gain confidence,
//                   opportunity, and a stronger future.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
//             {["Mentor Learners", "Support Training", "Serve Communities"].map(
//               (item) => (
//                 <div
//                   key={item}
//                   className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-white/85"
//                 >
//                   {item}
//                 </div>
//               )
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/volunteer/VolunteerHeroSection.jsx
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
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_bc6gfgbc6gfgbc6g.png"
          alt="AimSkills volunteers working with youth"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      
      <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10" />

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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md"
            >
              <HandHeart size={17} strokeWidth={2.2} />
              Join Our Mission
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Volunteer
              <br />
             
                {/* <br /> */}
              <span className="text-[#D4AF55]"> With Purpose</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
            >
              Share your time and skills to empower youth through education
              and create lasting change in communities.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#volunteer-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
              >
                Apply as Volunteer
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <a
                href="#why-volunteer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
              >
                Explore Opportunities
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