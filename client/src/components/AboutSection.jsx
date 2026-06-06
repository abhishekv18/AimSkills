// import { motion } from "framer-motion";
// import { HandHeart, Sprout, Target, UsersRound } from "lucide-react";

// const imageVariants = {
//   hidden: {
//     opacity: 0,
//     x: -42,
//     scale: 0.96,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const contentVariants = {
//   hidden: {
//     opacity: 0,
//     x: 42,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.12,
//       delayChildren: 0.14,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const features = [
//   {
//     title: "Empowering Youth",
//     description: "Helping young people build confidence, direction, and career readiness.",
//     icon: UsersRound,
//   },
//   {
//     title: "Skill-Based Training",
//     description: "Delivering practical learning experiences aligned with employability.",
//     icon: HandHeart,
//   },
//   {
//     title: "Community Development",
//     description: "Creating pathways for stronger families and sustainable local growth.",
//     icon: Sprout,
//   },
// ];

// function FeatureItem({ feature }) {
//   const Icon = feature.icon;

//   return (
//     <motion.div
//       variants={itemVariants}
//       whileHover={{
//         y: -5,
//         scale: 1.02,
//       }}
//       transition={{
//         duration: 0.2,
//       }}
//       className="group rounded-2xl border border-[#B8CCF0]/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
//     >
//       <div className="flex items-start gap-4">
//         <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
//           <Icon size={21} strokeWidth={2.2} />
//         </div>

//         <div>
//           <h3 className="text-sm font-extrabold text-[#111827]">
//             {feature.title}
//           </h3>
//           <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
//             {feature.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function AboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF3FC] to-[#F8F9FB] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
//         <motion.div
//           variants={imageVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="relative mx-auto w-full max-w-xl lg:mx-0"
//         >
//           <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-[#EEF3FC]" />
//           <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" />

//           <div className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
//             <img
//               src="/Gemini_Generated_Image_rdep1wrdep1wrdep.png"
//               alt="AimSkills students in a training session"
//               className="h-[340px] w-full rounded-xl object-cover sm:h-[430px] lg:h-[520px]"
//             />

//             <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/30 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-sm backdrop-blur-md">
//               <div className="flex items-center gap-3">
//                 <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//                   <Target size={21} strokeWidth={2.2} />
//                 </div>

//                 <div>
//                   <div className="text-sm font-extrabold text-[#111827]">
//                     Learning that leads to livelihood
//                   </div>
//                   <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
//                     Building confidence, capability, and career pathways through
//                     guided training.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={contentVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
//           >
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             About Aim Skills
//           </motion.div>

//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
//           >
//             Who We Are & What We{" "}
//             <span className="text-[#B8952A]">Stand For</span>
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             className="mt-6 space-y-5 text-base font-medium leading-8 text-slate-700 sm:text-lg"
//           >
//             <p>
//               Aim Skills is a young, vibrant, and purpose-driven organization
//               dedicated to empowering individuals and uplifting communities
//               across the nation.
//             </p>

//             <p>
//               Our mission is to enlighten lives by providing opportunities to
//               socially and economically marginalized youth through skill
//               development and education.
//             </p>

//             <p>
//               As a registered non-profit organization, we are committed to
//               helping individuals build sustainable livelihoods by enhancing
//               their employability and confidence.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={contentVariants}
//             className="mt-8 grid gap-4"
//           >
//             {features.map((feature) => (
//               <FeatureItem key={feature.title} feature={feature} />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { HandHeart, Sprout, Target, UsersRound } from "lucide-react";

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -42,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 42,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const features = [
  {
    title: "Empowering Youth",
    description: "Helping young people build confidence, direction, and career readiness.",
    icon: UsersRound,
  },
  {
    title: "Skill-Based Training",
    description: "Delivering practical learning experiences aligned with employability.",
    icon: HandHeart,
  },
  {
    title: "Community Development",
    description: "Creating pathways for stronger families and sustainable local growth.",
    icon: Sprout,
  },
];

function FeatureItem({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group rounded-2xl border border-[#B8CCF0]/60 bg-white/85 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
          <Icon size={19} strokeWidth={2.2} className="sm:size-[21px]" />
        </div>

        <div>
          <h3 className="text-xs sm:text-sm font-extrabold text-[#111827]">
            {feature.title}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-500">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF3FC] to-[#F8F9FB] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-16 sm:top-24 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-24 bottom-8 sm:bottom-10 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* ── Left Column: Image ── */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          {/* Decorative squares - responsive sizing */}
          <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 h-20 sm:h-24 md:h-28 w-20 sm:w-24 md:w-28 rounded-2xl bg-[#EEF3FC]" />
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32 rounded-2xl bg-[#F5E8C0]" />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-1.5 sm:p-2 shadow-md">
            <img
              src="/Gemini_Generated_Image_rdep1wrdep1wrdep.png"
              alt="AimSkills students in a training session"
              className="h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[520px] w-full rounded-xl object-cover"
            />

            <div className="absolute inset-1.5 sm:inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/30 via-transparent to-transparent" />

            {/* Floating card on image */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 rounded-2xl border border-white/70 bg-white/95 p-3 sm:p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex size-9 sm:size-10 md:size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                  <Target size={18} strokeWidth={2.2} className="sm:size-[19px] md:size-[21px]" />
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827]">
                    Learning that leads to livelihood
                  </div>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-medium leading-4 sm:leading-5 text-slate-500">
                    Building confidence, capability, and career pathways through
                    guided training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right Column: Content ── */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm"
          >
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A]" />
            About Aim Skills
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]"
          >
            Who We Are & What We{" "}
            <span className="text-[#B8952A]">Stand For</span>
          </motion.h2>

          {/* Description paragraphs */}
          <motion.div
            variants={itemVariants}
            className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-700"
          >
            <p>
              Aim Skills is a young, vibrant, and purpose-driven organization
              dedicated to empowering individuals and uplifting communities
              across the nation.
            </p>

            <p>
              Our mission is to enlighten lives by providing opportunities to
              socially and economically marginalized youth through skill
              development and education.
            </p>

            <p>
              As a registered non-profit organization, we are committed to
              helping individuals build sustainable livelihoods by enhancing
              their employability and confidence.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            variants={contentVariants}
            className="mt-6 sm:mt-7 md:mt-8 grid gap-3 sm:gap-4"
          >
            {features.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}