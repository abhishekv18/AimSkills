// // src/components/contact/ContactHeroSection.jsx
// import { motion } from "framer-motion";
// import { ArrowRight, Mail, MessageSquareText } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//       delayChildren: 0.14,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function ContactHeroSection() {
//   return (
//     <section className="relative min-h-[78vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           src="/assets/contact/contact-hero.jpg"
//           alt="AimSkills office and training discussion"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/92 via-[#0D2B6B]/74 to-[#0D2B6B]/24" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-[#0D2B6B]/15" />

//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-10 right-24 hidden h-40 w-40 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm lg:block" />

//       <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-28 lg:px-8">
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
//             <MessageSquareText size={17} strokeWidth={2.2} />
//             We’re Ready to Connect
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//           >
//             Contact <span className="text-[#D4AF55]">AimSkills</span>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//           >
//             Connect with us to explore training programs, partnerships,
//             volunteering, recruitment, and social impact opportunities.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <a
//               href="#contact-form"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//             >
//               Send Message
//               <ArrowRight size={18} strokeWidth={2.4} />
//             </a>

//             <a
//               href="/programs"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-7 py-4 text-base font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//             >
//               Explore Programs
//             </a>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-sm backdrop-blur-md"
//           >
//             <div className="flex size-11 items-center justify-center rounded-xl bg-white text-[#1A4DA8]">
//               <Mail size={21} strokeWidth={2.2} />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-white">Email Support</p>
//               <p className="mt-1 text-sm font-medium text-white/70">
//                 contact@aimskills.org
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/contact/ContactHeroSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareText } from "lucide-react";

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
  { value: "24h", label: "Response Time" },
  { value: "50+", label: "Partner Orgs" },
 
];

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_nmkkbynmkkbynmkk.png"
          alt="AimSkills office and training discussion"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      
      {/* <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/30 bg-[#F5E8C0]/10" /> */}

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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm"
            >
              <MessageSquareText size={17} strokeWidth={2.2} />
              Get in Touch
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Contact
              <br />
            <span className="text-[#D4AF55]">Aim Skills</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
            >
              Reach out for training programs, partnerships, volunteering, 
              or hiring opportunities. We're here to help.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
              >
                Send Message
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <a
                href="mailto:contact@aimskills.org"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
              >
                Email Us
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