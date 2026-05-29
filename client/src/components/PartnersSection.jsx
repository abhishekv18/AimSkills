// import { motion } from "framer-motion";
// import logo1 from "/src/assets/Bihaan-183x146.png";
// import logo2 from "../assets/DDU-GKY-260x122.png";
// import logo3 from "../assets/JSDMS-154x146.png";
// import logo4 from "../assets/Skill-India-117x146.png";
// import logo5 from "../assets/UK-Logo-141x146.png";
// import logo6 from "../assets/USDM-145x146.png";

// const partners = [
//   { name: "bihan", logo: logo1 },
//   { name: "Skill India", logo: logo2 },
//   { name: "MSDE", logo: logo3 },
//   { name: "Digital India", logo: logo4 },
//   { name: "Startup India", logo: logo5 },
//   { name: "CSR Partner", logo: logo6 },
// ];
// const duplicatedPartners = [...partners, ...partners];

// export default function PartnersSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F9FB] py-16 sm:py-20">
//       <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto mb-10 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             Our Network
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl">
//             Trusted By Leading Organizations
//           </h2>
//         </div>

//         <div className="relative overflow-hidden">
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F8F9FB] to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent" />

//           <motion.div
//             animate={{
//               x: ["0%", "-50%"],
//             }}
//             transition={{
//               duration: 28,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             className="group flex w-max gap-5 hover:[animation-play-state:paused]"
//           >
//             {duplicatedPartners.map((partner, index) => (
//               <motion.div
//                 key={`${partner.name}-${index}`}
//                 whileHover={{
//                   y: -4,
//                   scale: 1.02,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                 }}
//                 className="flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:h-32 sm:w-60"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="max-h-12 w-full object-contain grayscale transition duration-300 hover:grayscale-0 sm:max-h-14"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

// ✅ FIXED IMPORTS (relative path)
import logo1 from "/Bihaan-183x146.png";
import logo2 from "/DDU-GKY-260x122.png";
import logo3 from "/JSDMS-154x146.png";
import logo4 from "/Skill-India-117x146.png";
import logo5 from "/UK-Logo-141x146.png";
import logo6 from "/USDM-145x146.png";

const partners = [
  { name: "Bihaan", logo: logo1 },
  { name: "Skill India", logo: logo2 },
  { name: "MSDE", logo: logo3 },
  { name: "Digital India", logo: logo4 },
  { name: "Startup India", logo: logo5 },
  { name: "CSR Partner", logo: logo6 },
];

// duplicate for infinite scroll
const duplicatedPartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FB] py-16 sm:py-20">
      
      {/* background glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            Our Network
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl">
            Trusted By Leading Organizations
          </h2>
        </div>

        {/* slider */}
        <div className="relative overflow-hidden">

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F8F9FB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-6"
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-32 sm:w-60"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                 className="max-h-12 w-full object-contain transition-all duration-500 ease-out group-hover:scale-110 sm:max-h-14"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}