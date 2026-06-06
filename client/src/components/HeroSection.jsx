
// import { motion } from "framer-motion";
// import {
//   BookOpenCheck,
//   Building2,
//   GraduationCap,
//   HeartHandshake,
//   Users,
// } from "lucide-react";

// const stats = [
//   {
//     value: "10,000+",
//     label: "Students Trained",
//     icon: GraduationCap,
//   },
//   {
//     value: "100+",
//     label: "Training Programs",
//     icon: BookOpenCheck,
//   },
//   {
//     value: "50+",
//     label: "Partner Organizations",
//     icon: Building2,
//   },
// ];

// const containerVariants = {
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
//     y: 26,
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

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#F8F9FB] to-[#EEF3FC]">
//       <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
//           >
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             Aim Skills Education
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0D2B6B] sm:text-5xl lg:text-[56px]"
//           >
//             We are working for the betterment of India by providing{" "}
//             <span className="text-[#B8952A]">employability skills</span>{" "}
//             training to the youth.
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mx-auto mt-6 max-w-lg text-base font-medium leading-8 text-slate-700 sm:text-lg lg:mx-0"
//           >
//             Empowering youth with practical skills, industry knowledge, and
//             opportunities to build sustainable careers.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-8 rounded-2xl border border-[#B8CCF0]/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
//           >
//             <div className="grid gap-4 sm:grid-cols-3">
//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <motion.div
//                     key={stat.label}
//                     whileHover={{
//                       y: -3,
//                       scale: 1.02,
//                     }}
//                     transition={{
//                       duration: 0.2,
//                     }}
//                     className={`flex items-center gap-3 text-left ${
//                       index !== stats.length - 1
//                         ? "sm:border-r sm:border-[#B8CCF0]/50 sm:pr-4"
//                         : ""
//                     }`}
//                   >
//                     <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//                       <Icon size={19} strokeWidth={2.2} />
//                     </div>

//                     <div>
//                       <div className="text-xl font-extrabold tracking-tight text-[#1A4DA8]">
//                         {stat.value}
//                       </div>
//                       <div className="mt-0.5 text-xs font-bold uppercase tracking-wide text-slate-500">
//                         {stat.label}
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
//           >
//             <motion.a
//               whileHover={{
//                 scale: 1.03,
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               href="/donate"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-colors hover:bg-[#D4AF55] hover:shadow-lg hover:shadow-[#B8952A]/40 focus:outline-none focus:ring-4 focus:ring-[#F5E8C0]"
//             >
//               <HeartHandshake size={20} strokeWidth={2.4} />
//               Donate Now
//             </motion.a>

//             <motion.a
//               whileHover={{
//                 scale: 1.03,
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               href="/volunteer"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-7 py-4 text-base font-bold text-white shadow-md shadow-[#0D2B6B]/20 transition-colors hover:bg-[#2E6FD9] hover:shadow-lg hover:shadow-[#0D2B6B]/25 focus:outline-none focus:ring-4 focus:ring-[#B8CCF0]/50"
//             >
//               <Users size={20} strokeWidth={2.4} />
//               Partner with Us
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 42,
//             scale: 0.96,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.28,
//           }}
//           className="relative mx-auto w-full max-w-xl lg:max-w-none"
//         >
//           <motion.div
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 5.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="relative"
//           >
//             <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-[#EEF3FC]" />
//             <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F5E8C0]" />

//             <div className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
//               <img
//                 src="\Gemini_Generated_Image_9ccls69ccls69ccl.png"
               
//                 alt="Students learning in AimSkills training session"
//                 className="h-[360px] w-full rounded-xl object-cover sm:h-[460px] lg:h-[560px]"
//               />

//               <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/35 via-transparent to-transparent" />
//             </div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 18,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.85,
//               }}
//               className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-[#B8CCF0]/70 bg-white/95 p-4 shadow-md backdrop-blur-md sm:left-6 sm:w-72 sm:translate-x-0"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex size-11 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//                   <GraduationCap size={21} strokeWidth={2.2} />
//                 </div>

//                 <div>
//                   <div className="text-sm font-extrabold text-[#111827]">
//                     Skill-first education
//                   </div>
//                   <div className="mt-1 text-xs font-medium leading-5 text-slate-500">
//                     Practical training designed for employability.
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Building2,
  GraduationCap,
  HeartHandshake,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "10,000+",
    label: "Students Trained",
    icon: GraduationCap,
  },
  {
    value: "100+",
    label: "Training Programs",
    icon: BookOpenCheck,
  },
  {
    value: "50+",
    label: "Partner Organizations",
    icon: Building2,
  },
];

const containerVariants = {
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
    y: 26,
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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#F8F9FB] to-[#EEF3FC]">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-16 sm:top-24 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-24 bottom-12 sm:bottom-20 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-20 lg:grid-cols-[1.04fr_0.96fr]">
        {/* ── Left Column: Content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm"
          >
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#B8952A]" />
            Aim Skills Education
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#0D2B6B]"
          >
            We are working for the betterment of India by providing{" "}
            <span className="text-[#B8952A]">employability skills</span>{" "}
            training to the youth.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-lg text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-700 lg:mx-0"
          >
            Empowering youth with practical skills, industry knowledge, and
            opportunities to build sustainable careers.
          </motion.p>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-7 md:mt-8 rounded-2xl border border-[#B8CCF0]/60 bg-white/80 p-3 sm:p-4 shadow-sm backdrop-blur-sm"
          >
            <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`flex items-center gap-2 sm:gap-3 text-left ${
                      index !== stats.length - 1
                        ? "sm:border-r sm:border-[#B8CCF0]/50 sm:pr-3 md:pr-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-[#B8CCF0]/30"
                        : ""
                    }`}
                  >
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                      <Icon size={17} strokeWidth={2.2} className="sm:size-[19px]" />
                    </div>

                    <div>
                      <div className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1A4DA8]">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-7 sm:mt-8 md:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-colors hover:bg-[#D4AF55] hover:shadow-lg hover:shadow-[#B8952A]/40 focus:outline-none focus:ring-4 focus:ring-[#F5E8C0]"
            >
              <HeartHandshake size={18} strokeWidth={2.4} className="sm:size-[20px]" />
              Donate Now
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold text-white shadow-md shadow-[#0D2B6B]/20 transition-colors hover:bg-[#2E6FD9] hover:shadow-lg hover:shadow-[#0D2B6B]/25 focus:outline-none focus:ring-4 focus:ring-[#B8CCF0]/50"
            >
              <Users size={18} strokeWidth={2.4} className="sm:size-[20px]" />
              Partner with Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Image ── */}
        <motion.div
          initial={{
            opacity: 0,
            x: 42,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.28,
          }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Decorative squares - responsive sizing */}
            <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 rounded-2xl bg-[#EEF3FC]" />
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 h-20 sm:h-24 md:h-28 w-20 sm:w-24 md:w-28 rounded-2xl bg-[#F5E8C0]" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-1.5 sm:p-2 shadow-md">
              <img
                src="\Gemini_Generated_Image_9ccls69ccls69ccl.png"
                alt="Students learning in AimSkills training session"
                className="h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[560px] w-full rounded-xl object-cover"
              />

              <div className="absolute inset-1.5 sm:inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/35 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.85,
              }}
              className="absolute -bottom-4 sm:-bottom-5 left-1/2 w-[85%] sm:w-64 md:w-72 -translate-x-1/2 rounded-2xl border border-[#B8CCF0]/70 bg-white/95 p-3 sm:p-4 shadow-md backdrop-blur-md sm:left-4 md:left-6 sm:translate-x-0"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex size-9 sm:size-10 md:size-11 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                  <GraduationCap size={18} strokeWidth={2.2} className="sm:size-[19px] md:size-[21px]" />
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827]">
                    Skill-first education
                  </div>
                  <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-medium leading-4 sm:leading-5 text-slate-500">
                    Practical training designed for employability.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}