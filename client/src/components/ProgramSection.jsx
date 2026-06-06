
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Banknote,
//   BookOpenCheck,
//   BriefcaseBusiness,
//   Building2,
//   GraduationCap,
//   HandCoins,
//   Handshake,
//   Landmark,
//   Lightbulb,
//   Presentation,
//   Sprout,
//   UsersRound,
// } from "lucide-react";

// const programs = [
//   {
//     title: "Training to Underprivileged Youth",
//     description: "Skill-building programs that improve employability and confidence.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Consultancy for Rural Development",
//     description: "Advisory support for sustainable rural growth initiatives.",
//     icon: Sprout,
//   },
//   {
//     title: "Develop SHGs in Rural Areas",
//     description: "Helping self-help groups build capability and financial independence.",
//     icon: UsersRound,
//   },
//   {
//     title: "Implement Government Social Schemes",
//     description: "Supporting access and execution of welfare-focused programs.",
//     icon: Landmark,
//   },
//   {
//     title: "Assist Students in Bank Loan Support",
//     description: "Guidance for students seeking education and career finance.",
//     icon: Banknote,
//   },
//   {
//     title: "Rural Development Programs",
//     description: "Community-led programs focused on upliftment and opportunity.",
//     icon: Building2,
//   },
//   {
//     title: "Livelihood Focused Programs",
//     description: "Training pathways designed for income generation and stability.",
//     icon: HandCoins,
//   },
//   {
//     title: "Corporate Training Programs",
//     description: "Professional learning modules for workplace readiness and growth.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Tutorials and Support",
//     description: "Academic and mentoring support for learners who need guidance.",
//     icon: BookOpenCheck,
//   },
//   {
//     title: "Faculty Development Programs",
//     description: "Capacity-building sessions for educators and training teams.",
//     icon: Presentation,
//   },
//   {
//     title: "Placement Oriented Training Programs",
//     description: "Career-focused preparation for interviews, jobs, and industry needs.",
//     icon: Handshake,
//   },
//   {
//     title: "Training & Development Workshops",
//     description: "Comprehensive capacity-building workshops designed to enhance professional skills and organizational effectiveness.",
//     icon: Lightbulb,
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
//       staggerChildren: 0.08,
//       delayChildren: 0.16,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.52,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function ProgramCard({ program }) {
//   const Icon = program.icon;

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={{
//         y: -7,
//         scale: 1.02,
//       }}
//       transition={{
//         duration: 0.22,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
//     >
//       <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-600/10 opacity-80 blur-2xl" />
//       <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-amber-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//       <div className="relative">
//         <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-amber-400 shadow-sm transition-all duration-300 group-hover:bg-amber-500/20 group-hover:text-amber-300 group-hover:-rotate-3 group-hover:scale-105">
//           <Icon size={23} strokeWidth={2.2} />
//         </div>

//         <h3 className="text-base font-extrabold leading-6 text-white">
//           {program.title}
//         </h3>

//         <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
//           {program.description}
//         </p>

//         <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
//           Learn more
//           <ArrowRight size={15} strokeWidth={2.4} />
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function ProgramsSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] py-20 sm:py-24 lg:py-28">
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
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.18,
//         }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={cardVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-amber-200 shadow-sm backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-amber-400" />
//             What we offer
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
//             Explore Our Programs
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
//             Comprehensive initiatives designed to empower individuals and uplift
//             communities
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-amber-400" />
//         </motion.div>

//         <motion.div
//           variants={sectionVariants}
//           className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4"
//         >
//           {programs.map((program) => (
//             <ProgramCard key={program.title} program={program} />
//           ))}
//         </motion.div>

//         <motion.div variants={cardVariants} className="mt-12 flex justify-center">
//           <motion.a
//             href="/about"
//             whileHover={{
//               y: -2,
//               scale: 1.03,
//             }}
//             whileTap={{
//               scale: 0.98,
//             }}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-7 py-4 text-base font-extrabold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-400/30"
//           >
//             Know More About Us
//             <ArrowRight size={18} strokeWidth={2.4} />
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Drone,
//   Shield,
//   FileText,
//   CheckCircle2,
//   GraduationCap,
//   Sprout,
//   UsersRound,
//   Landmark,
//   Banknote,
//   Building2,
//   HandCoins,
//   BriefcaseBusiness,
//   BookOpenCheck,
//   Presentation,
//   Handshake,
//   Lightbulb,
//   ChevronRight,
// } from "lucide-react";

// const mainPrograms = [
//   {
//     title: "Drone Type Certification & RPTO Consultancy",
//     subtitle: "Launch Your Drone Business with Complete Regulatory Support",
//     description: "Professional consultancy and regulatory support for Drone Type Certification, RPTO setup, DGCA compliance, and drone training infrastructure development.",
//     highlights: [
//       "DGCA Type Certification Assistance",
//       "RPTO Setup & Approval Consultancy",
//       "End-to-End Documentation Support",
//       "DGCA Compliance & Regulatory Guidance",
//     ],
//     icon: Drone,
//      gradient: "from-amber-500 to-orange-500",
//     accentColor: "amber",
    
//     stats: { label: "Regulatory Experts", value: "100%" },
//   },
//   {
//     title: "Army Customized Training Services",
//     subtitle: "Professional Training & Development Solutions for Defence Personnel",
//     description: "Customized training and development services designed specifically for defence and armed forces personnel, with mission-focused learning solutions.",
//     highlights: [
//       "Digital Skills & IT Training",
//       "Leadership & Team Building Programs",
//       "Cyber Awareness & Digital Safety",
//       "AI & Emerging Technology Programs",
//     ],
//     icon: Shield,
//     gradient: "from-emerald-600 to-teal-600",
//     accentColor: "emerald",
//     stats: { label: "Army Jawans Trained", value: "1000+" },
//   },
//   {
//     title: "Content Development Services",
//     subtitle: "Customized Training & Educational Content Solutions",
//     description: "Professional content development for CSR projects, Sector Skill Councils, corporate organizations, and government projects aligned with NSQF standards.",
//     highlights: [
//       "Training Module & Curriculum Development",
//       "NSQF-Aligned Skill Content",
//       "E-learning & Digital Learning Content",
//       "Multilingual Training Content Support",
//     ],
//     icon: FileText,
//    gradient: "from-blue-600 to-indigo-600",
//     accentColor: "blue",
//     stats: { label: "Client Satisfaction", value: "98%" },
//   },
// ];

// const otherPrograms = [
//   {
//     title: "Training to Underprivileged Youth",
//     description: "Skill-building programs that improve employability and confidence.",
//     icon: GraduationCap,
//     color: "text-violet-600 bg-violet-50",
//   },
//   {
//     title: "Consultancy for Rural Development",
//     description: "Advisory support for sustainable rural growth initiatives.",
//     icon: Sprout,
//     color: "text-green-600 bg-green-50",
//   },
//   {
//     title: "Develop SHGs in Rural Areas",
//     description: "Helping self-help groups build capability and financial independence.",
//     icon: UsersRound,
//     color: "text-rose-600 bg-rose-50",
//   },
//   {
//     title: "Implement Government Social Schemes",
//     description: "Supporting access and execution of welfare-focused programs.",
//     icon: Landmark,
//     color: "text-cyan-600 bg-cyan-50",
//   },
//   {
//     title: "Assist Students in Bank Loan Support",
//     description: "Guidance for students seeking education and career finance.",
//     icon: Banknote,
//     color: "text-yellow-600 bg-yellow-50",
//   },
//   {
//     title: "Rural Development Programs",
//     description: "Community-led programs focused on upliftment and opportunity.",
//     icon: Building2,
//     color: "text-orange-600 bg-orange-50",
//   },
//   {
//     title: "Livelihood Focused Programs",
//     description: "Training pathways designed for income generation and stability.",
//     icon: HandCoins,
//     color: "text-teal-600 bg-teal-50",
//   },
//   {
//     title: "Corporate Training Programs",
//     description: "Professional learning modules for workplace readiness and growth.",
//     icon: BriefcaseBusiness,
//     color: "text-indigo-600 bg-indigo-50",
//   },
//   {
//     title: "Tutorials and Support",
//     description: "Academic and mentoring support for learners who need guidance.",
//     icon: BookOpenCheck,
//     color: "text-pink-600 bg-pink-50",
//   },
//   {
//     title: "Faculty Development Programs",
//     description: "Capacity-building sessions for educators and training teams.",
//     icon: Presentation,
//     color: "text-purple-600 bg-purple-50",
//   },
//   {
//     title: "Placement Oriented Training Programs",
//     description: "Career-focused preparation for interviews, jobs, and industry needs.",
//     icon: Handshake,
//     color: "text-blue-600 bg-blue-50",
//   },
//   {
//     title: "Training & Development Workshops",
//     description: "Comprehensive capacity-building workshops designed to enhance professional skills and organizational effectiveness.",
//     icon: Lightbulb,
//     color: "text-amber-600 bg-amber-50",
//   },
// ];

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.4,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function ProgramHighlightCard({ program }) {
//   const Icon = program.icon;

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={{
//         y: -8,
//         transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
//       }}
//       className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
//     >
//       {/* Gradient top accent */}
//       <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${program.gradient} opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:h-2`} />

//       {/* Card content */}
//       <div className="flex flex-col p-7 lg:p-8">
//         {/* Icon with gradient background */}
//         <div className="mb-6 flex items-center gap-4">
//           <div className={`flex size-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.gradient} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
//             <Icon size={28} strokeWidth={1.8} className="text-white" />
//           </div>
          
//           {/* Stats badge */}
//           <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
//             <span className="text-lg font-extrabold text-slate-800">{program.stats.value}</span>
//             <span className="text-xs font-semibold text-slate-500 leading-tight">{program.stats.label}</span>
//           </div>
//         </div>

//         {/* Program title */}
//         <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-slate-800 transition-colors duration-300">
//           {program.title}
//         </h3>

//         {/* Subtitle */}
//         <p className="text-sm font-semibold text-slate-600 mb-3 leading-relaxed">
//           {program.subtitle}
//         </p>

//         {/* Description */}
//         <p className="text-sm text-slate-500 leading-relaxed mb-5">
//           {program.description}
//         </p>

//         {/* Highlights list */}
//         <div className="space-y-2.5 mb-6 flex-grow">
//           {program.highlights.map((highlight, idx) => (
//             <div key={idx} className="flex items-start gap-2.5">
//               <CheckCircle2 
//                 size={16} 
//                 className={`mt-0.5 shrink-0 ${
//                   program.accentColor === 'blue' ? 'text-blue-500' :
//                   program.accentColor === 'emerald' ? 'text-emerald-500' :
//                   'text-amber-500'
//                 }`} 
//                 strokeWidth={2.5}
//               />
//               <span className="text-sm font-medium text-slate-600 leading-tight">
//                 {highlight}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Action button */}
//         <motion.a
//           href="/programs"
//           whileHover={{ x: 4 }}
//           className={`inline-flex items-center gap-2 self-start rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-300
//             ${program.accentColor === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
//               program.accentColor === 'emerald' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' :
//               'bg-amber-50 text-amber-700 hover:bg-amber-100'
//             }
//             group-hover:shadow-md`}
//         >
//           Explore Program
//           <ArrowRight size={16} strokeWidth={2.5} />
//         </motion.a>
//       </div>

//       {/* Background pattern on hover */}
//       <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//         <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-slate-100 to-transparent blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-slate-100 to-transparent blur-3xl" />
//       </div>
//     </motion.article>
//   );
// }

// function OtherProgramCard({ program }) {
//   const Icon = program.icon;

//   return (
//     <motion.div
//       variants={itemVariants}
//       whileHover={{ 
//         y: -4,
//         scale: 1.02,
//         transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
//       }}
//       className="group relative flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50"
//     >
//       <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${program.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
//         <Icon size={20} strokeWidth={2} />
//       </div>
      
//       <div className="flex-grow min-w-0">
//         <div className="flex items-start justify-between gap-2">
//           <h4 className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
//             {program.title}
//           </h4>
//           <ChevronRight 
//             size={16} 
//             className="mt-0.5 shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" 
//             strokeWidth={2.5}
//           />
//         </div>
//         <p className="mt-1.5 text-xs font-medium text-slate-500 leading-relaxed">
//           {program.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function ProgramsSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24 lg:py-28">
//       {/* Ambient background decorations */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[120px]" />
//         <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-50/60 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-50/80 blur-[100px]" />
//       </div>

//       {/* Subtle grid pattern */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto max-w-3xl text-center mb-14 lg:mb-16"
//         >
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-2 backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A] animate-pulse" />
//             <span className="text-sm font-bold text-[#1A4DA8]">Our Core Expertise</span>
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight  text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Program Highlights
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
//             Specialized programs designed to deliver excellence across drone technology, 
//             defence training, and educational content development
//           </p>

//           <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
//               <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
          
//             <div className="h-1 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
//             <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
//           </div>
//         </motion.div>

//         {/* Main Programs Grid */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid gap-6 lg:grid-cols-3 lg:gap-8"
//         >
//           {mainPrograms.map((program, index) => (
//             <ProgramHighlightCard key={program.title} program={program} index={index} />
//           ))}
//         </motion.div>

//         {/* Divider */}
//         <motion.div
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//           className="my-16 lg:my-20"
//         >
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center" aria-hidden="true">
//               <div className="w-full border-t border-slate-200" />
//             </div>
//             <div className="relative flex justify-center">
//               <span className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
//                   <span className="text-sm font-bold text-[#1A4DA8]">More Programs We Offer</span>
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
//                 </div>
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Other Programs Grid */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         >
//           {otherPrograms.map((program) => (
//             <OtherProgramCard key={program.title} program={program} />
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
//         >
//           <motion.a
//             href="/programs"
//             whileHover={{ y: -2, scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#0D2B6B] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-slate-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-400/20"
//           >
//             View All Programs
//             <ArrowRight size={18} strokeWidth={2.4} />
//           </motion.a>
          
//           <span className="text-sm font-medium text-slate-500">
//             12+ comprehensive programs available
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowRight,
  Drone,
  Shield,
  FileText,
  CheckCircle2,
  GraduationCap,
  Sprout,
  UsersRound,
  Landmark,
  Banknote,
  Building2,
  HandCoins,
  BriefcaseBusiness,
  BookOpenCheck,
  Presentation,
  Handshake,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const mainPrograms = [
  {
    title: "Drone Type Certification & RPTO Consultancy",
    subtitle: "Launch Your Drone Business with Complete Regulatory Support",
    description: "Professional consultancy and regulatory support for Drone Type Certification, RPTO setup, DGCA compliance, and drone training infrastructure development.",
    highlights: [
      "DGCA Type Certification Assistance",
      "RPTO Setup & Approval Consultancy",
      "End-to-End Documentation Support",
      "DGCA Compliance & Regulatory Guidance",
    ],
    icon: Drone,
    gradient: "from-amber-500 to-orange-500",
    accentColor: "amber",
    stats: { label: "Regulatory Experts", value: "100%" },
  },
  {
    title: "Army Customized Training Services",
    subtitle: "Professional Training & Development Solutions for Defence Personnel",
    description: "Customized training and development services designed specifically for defence and armed forces personnel, with mission-focused learning solutions.",
    highlights: [
      "Digital Skills & IT Training",
      "Leadership & Team Building Programs",
      "Cyber Awareness & Digital Safety",
      "AI & Emerging Technology Programs",
    ],
    icon: Shield,
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
    stats: { label: "Army Jawans Trained", value: "1000+" },
  },
  {
    title: "Content Development Services",
    subtitle: "Customized Training & Educational Content Solutions",
    description: "Professional content development for CSR projects, Sector Skill Councils, corporate organizations, and government projects aligned with NSQF standards.",
    highlights: [
      "Training Module & Curriculum Development",
      "NSQF-Aligned Skill Content",
      "E-learning & Digital Learning Content",
      "Multilingual Training Content Support",
    ],
    icon: FileText,
    gradient: "from-blue-600 to-indigo-600",
    accentColor: "blue",
    stats: { label: "Client Satisfaction", value: "98%" },
  },
];

const otherPrograms = [
  {
    title: "Training to Underprivileged Youth",
    description: "Skill-building programs that improve employability and confidence.",
    icon: GraduationCap,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Consultancy for Rural Development",
    description: "Advisory support for sustainable rural growth initiatives.",
    icon: Sprout,
    color: "text-green-600 bg-green-50",
  },
  {
    title: "Develop SHGs in Rural Areas",
    description: "Helping self-help groups build capability and financial independence.",
    icon: UsersRound,
    color: "text-rose-600 bg-rose-50",
  },
  {
    title: "Implement Government Social Schemes",
    description: "Supporting access and execution of welfare-focused programs.",
    icon: Landmark,
    color: "text-cyan-600 bg-cyan-50",
  },
  {
    title: "Assist Students in Bank Loan Support",
    description: "Guidance for students seeking education and career finance.",
    icon: Banknote,
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    title: "Rural Development Programs",
    description: "Community-led programs focused on upliftment and opportunity.",
    icon: Building2,
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "Livelihood Focused Programs",
    description: "Training pathways designed for income generation and stability.",
    icon: HandCoins,
    color: "text-teal-600 bg-teal-50",
  },
  {
    title: "Corporate Training Programs",
    description: "Professional learning modules for workplace readiness and growth.",
    icon: BriefcaseBusiness,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    title: "Tutorials and Support",
    description: "Academic and mentoring support for learners who need guidance.",
    icon: BookOpenCheck,
    color: "text-pink-600 bg-pink-50",
  },
  {
    title: "Faculty Development Programs",
    description: "Capacity-building sessions for educators and training teams.",
    icon: Presentation,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Placement Oriented Training Programs",
    description: "Career-focused preparation for interviews, jobs, and industry needs.",
    icon: Handshake,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Training & Development Workshops",
    description: "Comprehensive capacity-building workshops designed to enhance professional skills and organizational effectiveness.",
    icon: Lightbulb,
    color: "text-amber-600 bg-amber-50",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProgramHighlightCard({ program }) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
    >
      {/* Gradient top accent */}
      <div className={`absolute inset-x-0 top-0 h-1 sm:h-1.5 bg-gradient-to-r ${program.gradient} opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:h-1.5 sm:group-hover:h-2`} />

      {/* Card content */}
      <div className="flex flex-col p-5 sm:p-6 lg:p-7 xl:p-8">
        {/* Icon with gradient background */}
        <div className="mb-4 sm:mb-5 lg:mb-6 flex items-center gap-3 sm:gap-4">
          <div className={`flex size-11 sm:size-12 lg:size-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.gradient} p-2.5 sm:p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon size={24} strokeWidth={1.8} className="text-white sm:size-[26px] lg:size-[28px]" />
          </div>
          
          {/* Stats badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-slate-50 px-2.5 sm:px-3 py-1.5 sm:py-2 border border-slate-100">
            <span className="text-base sm:text-lg font-extrabold text-slate-800">{program.stats.value}</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight">{program.stats.label}</span>
          </div>
        </div>

        {/* Program title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight mb-1.5 sm:mb-2 group-hover:text-slate-800 transition-colors duration-300">
          {program.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-2 sm:mb-3 leading-relaxed">
          {program.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-5">
          {program.description}
        </p>

        {/* Highlights list */}
        <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-grow">
          {program.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
              <CheckCircle2 
                size={15} 
                className={`mt-0.5 shrink-0 sm:size-[16px] ${
                  program.accentColor === 'blue' ? 'text-blue-500' :
                  program.accentColor === 'emerald' ? 'text-emerald-500' :
                  'text-amber-500'
                }`} 
                strokeWidth={2.5}
              />
              <span className="text-xs sm:text-sm font-medium text-slate-600 leading-tight">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Action button */}
        <motion.a
          href="/programs"
          whileHover={{ x: 4 }}
          className={`inline-flex items-center gap-1.5 sm:gap-2 self-start rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300
            ${program.accentColor === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
              program.accentColor === 'emerald' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' :
              'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }
            group-hover:shadow-md`}
        >
          Explore Program
          <ArrowRight size={14} strokeWidth={2.5} className="sm:size-[16px]" />
        </motion.a>
      </div>

      {/* Background pattern on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-48 sm:h-56 lg:h-64 w-48 sm:w-56 lg:w-64 rounded-full bg-gradient-to-br from-slate-100 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 sm:h-56 lg:h-64 w-48 sm:w-56 lg:w-64 rounded-full bg-gradient-to-tr from-slate-100 to-transparent blur-3xl" />
      </div>
    </motion.article>
  );
}

function OtherProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
      }}
      className="group relative flex items-start gap-3 sm:gap-4 rounded-xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50"
    >
      <div className={`flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg ${program.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        <Icon size={18} strokeWidth={2} className="sm:size-[20px]" />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
            {program.title}
          </h4>
          <ChevronRight 
            size={14} 
            className="mt-0.5 shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 sm:size-[16px]" 
            strokeWidth={2.5}
          />
        </div>
        <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs font-medium text-slate-500 leading-relaxed">
          {program.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Ambient background decorations - responsive sizing */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 sm:-left-32 top-0 h-[350px] sm:h-[400px] lg:h-[500px] w-[350px] sm:w-[400px] lg:w-[500px] rounded-full bg-blue-50/60 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute -right-24 sm:-right-32 bottom-0 h-[350px] sm:h-[400px] lg:h-[500px] w-[350px] sm:w-[400px] lg:w-[500px] rounded-full bg-amber-50/60 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] sm:h-[500px] lg:h-[600px] w-[400px] sm:w-[500px] lg:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-50/80 blur-[70px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      {/* Subtle grid pattern - responsive size */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:clamp(40px,6vw,64px)_clamp(40px,6vw,64px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-14 xl:mb-16"
        >
          {/* Badge */}
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#B8952A] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#1A4DA8]">Our Core Expertise</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Program Highlights
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-600">
            Specialized programs designed to deliver excellence across drone technology, 
            defence training, and educational content development
          </p>

          {/* Color indicators */}
          <div className="mx-auto mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-1 sm:gap-1.5">
            <div className="h-1 w-8 sm:w-10 md:w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
            <div className="h-1 w-6 sm:w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="h-1 w-10 sm:w-12 md:w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
          </div>
        </motion.div>

        {/* Main Programs Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {mainPrograms.map((program) => (
            <ProgramHighlightCard key={program.title} program={program} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="my-12 sm:my-14 lg:my-16 xl:my-20"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 sm:px-6">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm">
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-[#B8952A]" />
                  <span className="text-xs sm:text-sm font-bold text-[#1A4DA8]">More Programs We Offer</span>
                  <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-[#B8952A]" />
                </div>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Other Programs Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {otherPrograms.map((program) => (
            <OtherProgramCard key={program.title} program={program} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 lg:mt-14 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="/programs"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#0D2B6B] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-slate-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-400/20"
          >
            View All Programs
            <ArrowRight size={16} strokeWidth={2.4} className="sm:size-[18px]" />
          </motion.a>
          
          <span className="text-xs sm:text-sm font-medium text-slate-500">
            12+ comprehensive programs available
          </span>
        </motion.div>
      </div>
    </section>
  );
}