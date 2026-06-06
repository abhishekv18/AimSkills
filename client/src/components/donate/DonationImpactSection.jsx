// // src/components/donate/DonationImpactSection.jsx
// import { motion } from "framer-motion";
// import { BookOpenCheck, HeartHandshake, School, UsersRound } from "lucide-react";

// const impacts = [
//   {
//     amount: "₹500",
//     title: "Training Materials",
//     description: "Supports notebooks, learning sheets, and classroom resources.",
//     icon: BookOpenCheck,
//   },
//   {
//     amount: "₹2,000",
//     title: "Student Skill Sessions",
//     description: "Helps sponsor practical learning sessions for young learners.",
//     icon: UsersRound,
//   },
//   {
//     amount: "₹5,000",
//     title: "Rural Development Workshops",
//     description: "Supports community workshops focused on awareness and skills.",
//     icon: School,
//   },
//   {
//     amount: "₹10,000",
//     title: "Full Training Support",
//     description: "Helps a learner access structured training and career guidance.",
//     icon: HeartHandshake,
//   },
// ];

// const sectionVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 28, scale: 0.97 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function DonationImpactSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.16 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div variants={cardVariants} className="mx-auto max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             What Your Contribution Can Do
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Every Amount Has a{" "}
//             <span className="text-[#B8952A]">Clear Purpose</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Your donation helps convert resources into training, confidence,
//             career readiness, and community progress.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
//         >
//           {impacts.map((impact) => {
//             const Icon = impact.icon;

//             return (
//               <motion.article
//                 key={impact.amount}
//                 variants={cardVariants}
//                 whileHover={{ y: -8, scale: 1.025 }}
//                 className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//               >
//                 <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//                 <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//                 <div className="relative">
//                   <div className="flex items-center justify-between gap-4">
//                     <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                       <Icon size={23} strokeWidth={2.2} />
//                     </div>
//                     <span className="rounded-full bg-[#B8952A] px-4 py-2 text-sm font-extrabold text-white">
//                       {impact.amount}
//                     </span>
//                   </div>

//                   <h3 className="mt-7 text-xl font-extrabold text-[#0D2B6B]">
//                     {impact.title}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
//                     {impact.description}
//                   </p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/donate/DonationImpactSection.jsx
import { motion } from "framer-motion";
import { BookOpenCheck, HeartHandshake, School, UsersRound } from "lucide-react";

const impacts = [
  {
    amount: "₹500",
    title: "Training Materials",
    description: "Supports notebooks, learning sheets, and classroom resources.",
    icon: BookOpenCheck,
  },
  {
    amount: "₹2,000",
    title: "Student Skill Sessions",
    description: "Helps sponsor practical learning sessions for young learners.",
    icon: UsersRound,
  },
  {
    amount: "₹5,000",
    title: "Rural Development Workshops",
    description: "Supports community workshops focused on awareness and skills.",
    icon: School,
  },
  {
    amount: "₹10,000",
    title: "Full Training Support",
    description: "Helps a learner access structured training and career guidance.",
    icon: HeartHandshake,
  },
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DonationImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background patterns - responsive sizing */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[size:clamp(22px,3vw,30px)_clamp(22px,3vw,30px)] opacity-30" />
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A]" />
            What Your Contribution Can Do
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Every Amount Has a{" "}
            <span className="text-[#B8952A]">Clear Purpose</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Your donation helps convert resources into training, confidence,
            career readiness, and community progress.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((impact) => {
            const Icon = impact.icon;

            return (
              <motion.article
                key={impact.amount}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  {/* Icon & Amount Row */}
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                      <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                    </div>
                    <span className="rounded-full bg-[#B8952A] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-white">
                      {impact.amount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 md:mt-7 text-lg sm:text-xl font-extrabold text-[#0D2B6B]">
                    {impact.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {impact.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}