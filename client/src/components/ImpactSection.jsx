
// import { useEffect, useRef } from "react";
// import {
//   motion,
//   useInView,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   BookOpenCheck,
//   Building2,
//   GraduationCap,
//   TrendingUp,
// } from "lucide-react";

// const stats = [
//   {
//     value: 10000,
//     suffix: "+",
//     label: "Students Trained",
//     icon: GraduationCap,
//   },
//   {
//     value: 100,
//     suffix: "+",
//     label: "Training Programs",
//     icon: BookOpenCheck,
//   },
//   {
//     value: 50,
//     suffix: "+",
//     label: "Partner Organizations",
//     icon: Building2,
//   },
//   {
//     value: 85,
//     suffix: "%",
//     label: "Placement Success",
//     icon: BadgeCheck,
//   },
// ];

// const sectionVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 26,
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

// function CountUpNumber({ value, suffix, start }) {
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, {
//     stiffness: 80,
//     damping: 22,
//     mass: 0.8,
//   });

//   const displayValue = useTransform(springValue, (latest) => {
//     const rounded = Math.round(latest);
//     const formatted =
//       rounded >= 1000 ? rounded.toLocaleString("en-IN") : rounded;

//     return `${formatted}${suffix}`;
//   });

//   useEffect(() => {
//     if (start) {
//       motionValue.set(value);
//     }
//   }, [motionValue, start, value]);

//   return <motion.span>{displayValue}</motion.span>;
// }

// function StatCard({ stat, index, startCount }) {
//   const Icon = stat.icon;

//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{
//         y: -8,
//         scale: 1.025,
//       }}
//       transition={{
//         duration: 0.22,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7"
//     >
//       <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//       <div className="pointer-events-none absolute -bottom-12 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-50 blur-2xl" />

//       <div className="relative">
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#0D2B6B] shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
//             <Icon size={23} strokeWidth={2.2} />
//           </div>

         
//         </div>

//         <div className="mt-7 text-4xl font-extrabold tracking-tight text-[#1A4DA8] sm:text-5xl">
//           <CountUpNumber
//             value={stat.value}
//             suffix={stat.suffix}
//             start={startCount}
//           />
//         </div>

//         <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wide text-[#111827]">
//           {stat.label}
//         </h3>

//         <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#EEF3FC]">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={startCount ? { width: "100%" } : { width: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.15 + index * 0.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="h-full rounded-full bg-[#B8952A]"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function ImpactSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, {
//     once: true,
//     amount: 0.28,
//   });

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FB] to-[#EEF3FC] py-20 sm:py-24 lg:py-28"
//     >
//       {/* Ambient background decorations */}
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       {/* Grid pattern */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(13,43,107,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,43,107,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_30%,transparent_70%)]" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         {/* Section Header */}
//         <motion.div
//           variants={cardVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <TrendingUp size={17} strokeWidth={2.2} />
//             Trusted progress
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Our Impact in Numbers
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Delivering measurable change through skill development and education
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
//         >
//           {stats.map((stat, index) => (
//             <StatCard
//               key={stat.label}
//               stat={stat}
//               index={index}
//               startCount={isInView}
//             />
//           ))}
//         </motion.div>

//         {/* View All Impact Button */}
//         <motion.div
//           variants={cardVariants}
//           className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:mt-16"
//         >
//           <motion.a
//             href="/impact"
//             whileHover={{ 
//               y: -2, 
//               scale: 1.03,
//               transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#0D2B6B] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-[#1A4DA8]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1A4DA8]/30 focus:outline-none focus:ring-4 focus:ring-[#B8CCF0]/50"
//           >
//             {/* Button shine effect */}
//             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            
//             <span className="relative z-10">View All Impact Stories</span>
//             <ArrowRight 
//               size={20} 
//               strokeWidth={2.5} 
//               className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
//             />
//           </motion.a>

//           {/* Secondary text */}
//           <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
//             <div className="flex items-center gap-1.5">
//               <div className="h-2 w-2 rounded-full bg-[#B8952A] animate-pulse" />
//               <span>Real results</span>
//             </div>
//             <div className="h-4 w-px bg-slate-300" />
//             <div className="flex items-center gap-1.5">
//               <div className="h-2 w-2 rounded-full bg-[#1A4DA8] animate-pulse" />
//               <span>Verified impact</span>
//             </div>
//           </div>
//         </motion.div>

       
//       </motion.div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Students Trained",
    icon: GraduationCap,
  },
  {
    value: 100,
    suffix: "+",
    label: "Training Programs",
    icon: BookOpenCheck,
  },
  {
    value: 50,
    suffix: "+",
    label: "Partner Organizations",
    icon: Building2,
  },
  {
    value: 85,
    suffix: "%",
    label: "Placement Success",
    icon: BadgeCheck,
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
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

function CountUpNumber({ value, suffix, start }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.round(latest);
    const formatted =
      rounded >= 1000 ? rounded.toLocaleString("en-IN") : rounded;

    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (start) {
      motionValue.set(value);
    }
  }, [motionValue, start, value]);

  return <motion.span>{displayValue}</motion.span>;
}

function StatCard({ stat, index, startCount }) {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.025,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-50 blur-2xl" />

      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#0D2B6B] shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
          </div>
        </div>

        {/* Count Number */}
        <div className="mt-5 sm:mt-6 md:mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A4DA8]">
          <CountUpNumber
            value={stat.value}
            suffix={stat.suffix}
            start={startCount}
          />
        </div>

        {/* Label */}
        <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#111827]">
          {stat.label}
        </h3>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-5 h-1.5 overflow-hidden rounded-full bg-[#EEF3FC]">
          <motion.div
            initial={{ width: 0 }}
            animate={startCount ? { width: "100%" } : { width: 0 }}
            transition={{
              duration: 1,
              delay: 0.15 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-full bg-[#B8952A]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FB] to-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Ambient background decorations - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-24 bottom-8 sm:bottom-10 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(13,43,107,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,43,107,0.02)_1px,transparent_1px)] bg-[size:clamp(32px,5vw,48px)_clamp(32px,5vw,48px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_30%,transparent_70%)]" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <TrendingUp size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Trusted progress
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Our Impact in Numbers
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Delivering measurable change through skill development and education
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              startCount={isInView}
            />
          ))}
        </motion.div>

        {/* View All Impact Button */}
        <motion.div
          variants={cardVariants}
          className="mt-10 sm:mt-12 lg:mt-16 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
        >
          <motion.a
            href="/impact"
            whileHover={{ 
              y: -2, 
              scale: 1.03,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#0D2B6B] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-[#1A4DA8]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1A4DA8]/30 focus:outline-none focus:ring-4 focus:ring-[#B8CCF0]/50"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            
            <span className="relative z-10">View All Impact Stories</span>
            <ArrowRight 
              size={18} 
              strokeWidth={2.5} 
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 sm:size-[20px]" 
            />
          </motion.a>

          {/* Secondary indicators */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A] animate-pulse" />
              <span>Real results</span>
            </div>
            <div className="h-3 sm:h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#1A4DA8] animate-pulse" />
              <span>Verified impact</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}