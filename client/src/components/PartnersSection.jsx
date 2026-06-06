
// import { motion } from "framer-motion";

// // ✅ FIXED IMPORTS (relative path)
// import logo1 from "/Bihaan-183x146.png";
// import logo2 from "/DDU-GKY-260x122.png";
// import logo3 from "/JSDMS-154x146.png";
// import logo4 from "/Skill-India-117x146.png";
// import logo5 from "/UK-Logo-141x146.png";
// import logo6 from "/USDM-145x146.png";

// const partners = [
//   { name: "Bihaan", logo: logo1 },
//   { name: "Skill India", logo: logo2 },
//   { name: "MSDE", logo: logo3 },
//   { name: "Digital India", logo: logo4 },
//   { name: "Startup India", logo: logo5 },
//   { name: "CSR Partner", logo: logo6 },
// ];

// // duplicate for infinite scroll
// const duplicatedPartners = [...partners, ...partners];

// export default function PartnersSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F9FB] py-16 sm:py-20">
      
//       {/* background glow */}
//       <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

//         {/* heading */}
//         <div className="mx-auto mb-10 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             Our Network
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl">
//             Trusted By Leading Organizations
//           </h2>
//         </div>

//         {/* slider */}
//         <div className="relative overflow-hidden">

//           {/* fade edges */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F8F9FB] to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent" />

//           <motion.div
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 28,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             className="flex w-max gap-6"
//           >
//             {duplicatedPartners.map((partner, index) => (
//               <motion.div
//                 key={`${partner.name}-${index}`}
//                 whileHover={{
//                   y: -6,
//                   scale: 1.05,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-32 sm:w-60"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                  className="max-h-12 w-full object-contain transition-all duration-500 ease-out group-hover:scale-110 sm:max-h-14"
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
    <section className="relative overflow-hidden bg-[#F8F9FB] py-12 sm:py-16 md:py-20">
      {/* Background glow - responsive sizing */}
      <div className="pointer-events-none absolute -left-16 sm:-left-24 top-8 sm:top-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-24 bottom-0 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A]" />
            Our Network
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0D2B6B]">
            Trusted By Leading Organizations
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Fade edges - responsive width */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-[#F8F9FB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-3 sm:gap-4 md:gap-5 lg:gap-6"
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="group flex h-24 sm:h-28 md:h-32 w-40 sm:w-48 md:w-52 lg:w-60 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 sm:max-h-12 md:max-h-14 w-full object-contain transition-all duration-500 ease-out group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}