

// import { motion } from "framer-motion";
// import { ArrowRight, HeartHandshake, Target, Users } from "lucide-react";

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

// export default function CTASection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-14 sm:py-16 lg:py-20">
//       {/* Ambient glow effects */}
//       <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-600/15 blur-[120px]" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/10 blur-[100px]" />

//       {/* Subtle grid pattern */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

//       {/* Subtle diagonal lines */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `repeating-linear-gradient(
//             45deg,
//             transparent,
//             transparent 10px,
//             rgba(255,255,255,0.15) 10px,
//             rgba(255,255,255,0.15) 11px
//           )`,
//         }} />
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.28,
//         }}
//         className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-amber-200 backdrop-blur-md"
//         >
//           <Target size={16} strokeWidth={2.2} className="text-amber-400" />
//           Our Mission in Action
//         </motion.div>

//         <motion.h2
//           variants={itemVariants}
//           className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//         >
//           Be the Change. Empower a Future.
//         </motion.h2>

//         <motion.p
//           variants={itemVariants}
//           className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg"
//         >
//           Join us in transforming lives through education, skill development,
//           and opportunities for a better tomorrow.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
//         />

//         <motion.div
//           variants={itemVariants}
//           className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
//         >
//           <motion.a
//             href="/donate"
//             whileHover={{
//               scale: 1.05,
//               y: -2,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-7 py-3.5 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-400/30 sm:w-auto"
//           >
//             <HeartHandshake size={20} strokeWidth={2.4} />
//             Donate Now
//             <ArrowRight size={18} strokeWidth={2.4} />
//           </motion.a>

//           <motion.a
//             href="/volunteer"
//             whileHover={{
//               scale: 1.05,
//               y: -2,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/15 hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
//           >
//             <Users size={20} strokeWidth={2.4} />
//             Become a Volunteer
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

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-14 sm:py-16 lg:py-20">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/10 blur-[100px]" />
      
      {/* Subtle golden glow at right bottom */}
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full bg-[#B8952A]/12 blur-[100px]" />
      <div className="pointer-events-none absolute right-20 bottom-20 h-40 w-40 rounded-full bg-[#D4AF55]/10 blur-[80px]" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

      {/* Subtle diagonal lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.15) 10px,
            rgba(255,255,255,0.15) 11px
          )`,
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.28,
        }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-amber-200 backdrop-blur-md"
        >
          <Target size={16} strokeWidth={2.2} className="text-amber-400" />
          Our Mission in Action
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Be the Change. Empower a Future.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg"
        >
          Join us in transforming lives through education, skill development,
          and opportunities for a better tomorrow.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
        />

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="/donate"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-7 py-3.5 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-400/30 sm:w-auto"
          >
            <HeartHandshake size={20} strokeWidth={2.4} />
            Donate Now
            <ArrowRight size={18} strokeWidth={2.4} />
          </motion.a>

          <motion.a
            href="/volunteer"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/15 hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
          >
            <Users size={20} strokeWidth={2.4} />
            Partner with Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}