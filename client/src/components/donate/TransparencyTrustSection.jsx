// // src/components/donate/TransparencyTrustSection.jsx
// import { motion } from "framer-motion";
// import { BadgeCheck, FileCheck2, Handshake, ShieldCheck } from "lucide-react";

// const trustCards = [
//   {
//     title: "Registered Trust",
//     description: "Institutional governance supporting responsible social work.",
//     icon: BadgeCheck,
//   },
//   {
//     title: "Transparent Fund Usage",
//     description: "Contributions are aligned with training and community programs.",
//     icon: FileCheck2,
//   },
//   {
//     title: "Community Impact",
//     description: "Donations support real learners, villages, and development goals.",
//     icon: Handshake,
//   },
//   {
//     title: "CSR Collaboration",
//     description: "Built for partnerships, documentation, and measurable outcomes.",
//     icon: ShieldCheck,
//   },
// ];

// export default function TransparencyTrustSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//           <div className="lg:sticky lg:top-28">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//               <ShieldCheck size={17} strokeWidth={2.2} />
//               Transparency & Trust
//             </div>

//             <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//               Give With Confidence and{" "}
//               <span className="text-[#B8952A]">Clarity</span>
//             </h2>

//             <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
//               AimSkills is committed to responsible implementation,
//               documentation, and impact-focused use of every contribution.
//             </p>

//             <div className="mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             {trustCards.map((card) => {
//               const Icon = card.icon;

//               return (
//                 <motion.article
//                   key={card.title}
//                   whileHover={{ y: -6, scale: 1.02 }}
//                   className="group rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//                 >
//                   <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                     <Icon size={23} strokeWidth={2.2} />
//                   </div>

//                   <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
//                     {card.title}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
//                     {card.description}
//                   </p>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/donate/TransparencyTrustSection.jsx
import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, Handshake, ShieldCheck } from "lucide-react";

const trustCards = [
  {
    title: "Registered Trust",
    description: "Institutional governance supporting responsible social work.",
    icon: BadgeCheck,
  },
  {
    title: "Transparent Fund Usage",
    description: "Contributions are aligned with training and community programs.",
    icon: FileCheck2,
  },
  {
    title: "Community Impact",
    description: "Donations support real learners, villages, and development goals.",
    icon: Handshake,
  },
  {
    title: "CSR Collaboration",
    description: "Built for partnerships, documentation, and measurable outcomes.",
    icon: ShieldCheck,
  },
];

export default function TransparencyTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* ── Left Column: Sticky Info ── */}
          <div className="lg:sticky lg:top-28">
            {/* Badge */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
              <ShieldCheck size={15} strokeWidth={2.2} className="sm:size-[17px]" />
              Transparency & Trust
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
              Give With Confidence and{" "}
              <span className="text-[#B8952A]">Clarity</span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-700">
              AimSkills is committed to responsible implementation,
              documentation, and impact-focused use of every contribution.
            </p>

            {/* Divider */}
            <div className="mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
          </div>

          {/* ── Right Column: Trust Cards ── */}
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-2xl border border-white/70 bg-white/85 p-5 sm:p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}