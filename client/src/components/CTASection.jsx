
// import { motion } from "framer-motion";
// import { ArrowRight, HeartHandshake, Target, Users } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
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
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function CTASection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-14 sm:py-16 lg:py-18">

//       {/* Ambient Glow */}
//       <div className="pointer-events-none absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[110px]" />
//       <div className="pointer-events-none absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-600/15 blur-[110px]" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/10 blur-[90px]" />

//       {/* Golden Glow */}
//       <div className="pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-[#B8952A]/10 blur-[90px]" />

//       {/* Grid Texture */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.25,
//         }}
//         className="relative z-10 mx-auto max-w-5xl px-6 sm:px-7 lg:px-8 text-center"
//       >
//         {/* Badge */}
//         <motion.div
//           variants={itemVariants}
//           className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber-200 backdrop-blur-md"
//         >
//           <Target size={15} className="text-amber-400" />
//           Our Mission in Action
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           variants={itemVariants}
//           className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
//         >
//           Be the Change. Empower a Future.
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           variants={itemVariants}
//           className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
//         >
//           Join us in transforming lives through education, skill
//           development, and meaningful opportunities for a better tomorrow.
//         </motion.p>

//         {/* Divider */}
//         <motion.div
//           variants={itemVariants}
//           className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
//         />

//         {/* Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
//         >
//           <motion.a
//             href="/donate"
//             whileHover={{
//               scale: 1.03,
//               y: -2,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl  bg-[#C9A63A] px-6 py-3 text-base font-bold text-slate-900  transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30 sm:w-auto"
//           >
//             <HeartHandshake size={18} />
//             Donate Now
//             <ArrowRight size={17} />
//           </motion.a>

//           <motion.a
//             href="/volunteer"
//             whileHover={{
//               scale: 1.03,
//               y: -2,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/15 hover:shadow-lg sm:w-auto"
//           >
//             <Users size={18} />
//             Partner with Us
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Target, Users } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Ambient Glow - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-0 h-[300px] sm:h-[360px] lg:h-[420px] w-[300px] sm:w-[360px] lg:w-[420px] rounded-full bg-blue-600/20 blur-[80px] sm:blur-[100px] lg:blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-0 h-[300px] sm:h-[360px] lg:h-[420px] w-[300px] sm:w-[360px] lg:w-[420px] rounded-full bg-amber-600/15 blur-[80px] sm:blur-[100px] lg:blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] sm:h-[440px] lg:h-[520px] w-[350px] sm:w-[440px] lg:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/10 blur-[60px] sm:blur-[80px] lg:blur-[90px]" />

      {/* Golden Glow */}
      <div className="pointer-events-none absolute -right-8 sm:-right-12 -bottom-8 sm:-bottom-12 h-48 sm:h-56 lg:h-64 w-48 sm:w-56 lg:w-64 rounded-full bg-[#B8952A]/10 blur-[60px] sm:blur-[80px] lg:blur-[90px]" />

      {/* Grid Texture - responsive size */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:clamp(32px,5vw,50px)_clamp(32px,5vw,50px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-amber-200 backdrop-blur-md"
        >
          <Target size={13} className="text-amber-400 sm:size-[15px]" />
          Our Mission in Action
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="mx-auto max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
        >
          Be the Change. Empower a Future.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-slate-300"
        >
          Join us in transforming lives through education, skill
          development, and meaningful opportunities for a better tomorrow.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-4 sm:mt-5 h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
        />

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-5 sm:mt-6 md:mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4"
        >
          {/* Donate Button */}
          <motion.a
            href="/donate"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#C9A63A] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-slate-900 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30"
          >
            <HeartHandshake size={16} className="sm:size-[18px]" />
            Donate Now
            <ArrowRight size={15} className="sm:size-[17px]" />
          </motion.a>

          {/* Partner Button */}
          <motion.a
            href="/volunteer"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/15 hover:shadow-lg"
          >
            <Users size={16} className="sm:size-[18px]" />
            Partner with Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}