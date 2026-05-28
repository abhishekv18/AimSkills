// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   BriefcaseBusiness,
//   Building2,
//   CheckCircle2,
//   Drone,
//   FileText,
//   GraduationCap,
//   Handshake,
//   Presentation,
//   Shield,
//   Sprout,
//   Star,
//   Target,
//   TrendingUp,
//   Users,
// } from "lucide-react";

// const featuredPrograms = [
//   {
//     title: "Drone Type Certification & RPTO Consultancy",
//     subtitle: "Launch Your Drone Business with Complete Regulatory Support",
//     description:
//       "Aim Skills Education Trust provides professional consultancy and regulatory support for Drone Type Certification, RPTO setup, DGCA compliance, and drone training infrastructure development. With vast experience in the skill development, aviation training, and consultancy sector, we help organizations, startups, institutions, and entrepreneurs establish industry-ready and DGCA-compliant drone operations.",
//     services: [
//       "DGCA Drone Type Certification Assistance",
//       "RPTO Setup & Approval Consultancy",
//       "Drone Training & Skill Development Support",
//       "End-to-End Documentation Assistance",
//       "DGCA Compliance & Regulatory Guidance",
//       "Operational & Infrastructure Consultancy",
//     ],
//     benefits: [
//       "Experienced team with strong training and consultancy background",
//       "Expertise in skill development and emerging technologies",
//       "Fast, reliable, and professional support",
//       "Customized solutions for startups, institutes, and enterprises",
//       "End-to-end assistance from planning to approvals",
//     ],
//     icon: Drone,
//     gradient: "from-[#1A4DA8] to-[#0D2B6B]",
//     lightBg: "bg-[#EEF3FC]",
//     accentBorder: "border-[#B8CCF0]",
//     accentText: "text-[#1A4DA8]",
//     checkColor: "text-[#1A4DA8]",
//     stats: [
//       { label: "Success Rate", value: "100%", icon: Target },
//       { label: "Projects Completed", value: "50+", icon: TrendingUp },
//       { label: "Expert Consultants", value: "15+", icon: Users },
//     ],
//     tag: "Most Popular",
//   },
//   {
//     title: "Army Customized Training Services",
//     subtitle: "Professional Training & Development Solutions for Defence Personnel",
//     description:
//       "Aim Skills Education Trust provides customized training and development services designed specifically for defence and armed forces personnel. With strong experience in the training and consultancy sector, we specialize in delivering practical, industry-oriented, and mission-focused learning solutions for army units and defence organizations. We are proud to have successfully delivered training programs for 10+ Army Units and trained 1000+ Army Jawans.",
//     services: [
//       "Digital Skills & IT Training",
//       "Communication & Personality Development",
//       "Leadership & Team Building Programs",
//       "Cyber Awareness & Digital Safety Training",
//       "Soft Skills & Professional Development",
//       "Road Safety & Defensive Driving Awareness",
//       "AI & Emerging Technology Awareness Programs",
//       "Customized Capacity Building Workshops",
//       "Motivational & Behavioral Training Sessions",
//     ],
//     benefits: [
//       "Experience working with multiple Army Units",
//       "1000+ Army Jawans trained successfully",
//       "Customized training modules as per requirements",
//       "Professional trainers with practical approach",
//       "Focus on discipline, productivity, and skill enhancement",
//     ],
//     icon: Shield,
//     gradient: "from-[#0D2B6B] to-[#1A4DA8]",
//     lightBg: "bg-[#EEF3FC]",
//     accentBorder: "border-[#B8CCF0]",
//     accentText: "text-[#0D2B6B]",
//     checkColor: "text-[#B8952A]",
//     stats: [
//       { label: "Army Units Served", value: "10+", icon: Building2 },
//       { label: "Jawans Trained", value: "1000+", icon: Users },
//       { label: "Training Modules", value: "25+", icon: BriefcaseBusiness },
//     ],
//     tag: "Proven Track Record",
//   },
//   {
//     title: "Content Development Services",
//     subtitle: "Customized Training & Educational Content Solutions",
//     description:
//       "Aim Skills Education Trust provides professional content development services for CSR projects, Sector Skill Councils, corporate organizations, educational institutions, government projects, and skill development programs as per client requirements. Our team specializes in creating customized training materials aligned with NSQF standards, industry expectations, and organizational objectives.",
//     services: [
//       "Training Module & Curriculum Development",
//       "Participant Handbooks & Trainer Guides",
//       "PowerPoint Presentations & Learning Decks",
//       "Assessment Papers, Question Banks & Evaluation Tools",
//       "NSQF-Aligned Skill Development Content",
//       "CSR Project Documentation & Reports",
//       "E-learning & Digital Learning Content",
//       "Video Script & Educational Content Writing",
//       "Multilingual Training Content Support",
//     ],
//     benefits: [
//       "Experience working with CSR projects and skill development initiatives",
//       "Strong understanding of Sector Skill Council requirements",
//       "Customized content development as per organizational needs",
//       "Industry-focused and practical learning approach",
//       "Support for online, offline, and blended learning formats",
//     ],
//     icon: FileText,
//     gradient: "from-[#B8952A] to-[#F5E8C0]",
//     lightBg: "bg-[#F5E8C0]/30",
//     accentBorder: "border-[#F5E8C0]",
//     accentText: "text-[#B8952A]",
//     checkColor: "text-[#B8952A]",
//     stats: [
//       { label: "Projects Delivered", value: "200+", icon: TrendingUp },
//       { label: "Client Satisfaction", value: "98%", icon: Star },
//       { label: "Industry Partners", value: "30+", icon: Handshake },
//     ],
//     tag: "Expert Content Team",
//   },
// ];

// const otherPrograms = [
//   {
//     title: "Professional & Vocational Training Programs",
//     description:
//       "Industry-aligned qualifications, certifications, and diplomas across Business, IT, Engineering, and Media segments designed for all age groups.",
//     icon: GraduationCap,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#1A4DA8]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Faculty Development Programs / TTT",
//     description:
//       "Scientifically designed Train the Trainer programs improving teaching quality and institutional capacity through modern pedagogy.",
//     icon: Presentation,
//     bgColor: "bg-white",
//     iconBg: "bg-[#B8952A]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Rural Development Projects",
//     description:
//       "Community-focused interventions creating livelihood opportunities and strengthening local ecosystems in rural areas.",
//     icon: Sprout,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#0D2B6B]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Corporate Training Programs",
//     description:
//       "Custom-made training solutions for corporate entities, government organizations with end-to-end training management.",
//     icon: BriefcaseBusiness,
//     bgColor: "bg-white",
//     iconBg: "bg-[#1A4DA8]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Campus Training Programs",
//     description:
//       "Bridging industry-academia gaps through campus-to-career preparation, soft skills, and interview readiness programs.",
//     icon: Building2,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#B8952A]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Consulting Services",
//     description:
//       "Innovative solutions for vocational training, CSR advisory, feasibility studies, and partnership development.",
//     icon: Handshake,
//     bgColor: "bg-white",
//     iconBg: "bg-[#0D2B6B]",
//     iconColor: "text-white",
//   },
// ];

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 60,
//     scale: 0.92,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function FeaturedProgramCard({ program, index }) {
//   const Icon = program.icon;
//   const isGold = program.accentText === "text-[#B8952A]";

//   return (
//     <motion.article variants={cardVariants} className="group relative">
//       {/* Main card container */}
//       <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8CCF0]/30">
//         {/* Gradient header */}
//         <div
//           className={`relative overflow-hidden bg-gradient-to-r ${program.gradient} p-8 sm:p-10 lg:p-12`}
//         >
//           {/* Background pattern */}
//           <div className="pointer-events-none absolute inset-0 opacity-10">
//             <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white blur-3xl" />
//             <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
//           </div>

//           <div className="relative z-10">
//             {/* Tag badge */}
//             <div
//               className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm ${
//                 isGold
//                   ? "bg-[#B8952A]/30 text-[#0D2B6B]"
//                   : "bg-white/20 text-white"
//               }`}
//             >
//               <Star
//                 size={16}
//                 className={isGold ? "text-[#B8952A]" : "text-[#F5E8C0]"}
//                 fill="currentColor"
//               />
//               <span className="text-sm font-bold">{program.tag}</span>
//             </div>

//             {/* Icon */}
//             <div
//               className={`mb-6 flex size-16 items-center justify-center rounded-2xl backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
//                 isGold ? "bg-[#0D2B6B]/20" : "bg-white/20"
//               }`}
//             >
//               <Icon
//                 size={32}
//                 strokeWidth={1.8}
//                 className={isGold ? "text-[#0D2B6B]" : "text-white"}
//               />
//             </div>

//             {/* Title and subtitle */}
//             <h2
//               className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${
//                 isGold ? "text-[#0D2B6B]" : "text-white"
//               }`}
//             >
//               {program.title}
//             </h2>
//             <p
//               className={`mt-3 text-base font-semibold sm:text-lg ${
//                 isGold ? "text-[#0D2B6B]/80" : "text-white/90"
//               }`}
//             >
//               {program.subtitle}
//             </p>
//           </div>
//         </div>

//         {/* Content body */}
//         <div className="p-8 sm:p-10 lg:p-12">
//           {/* Description */}
//           <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//             {program.description}
//           </p>

//           {/* Core Services */}
//           <div className="mt-8 sm:mt-10">
//             <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#0D2B6B]">
//               <Target size={20} className="text-[#1A4DA8]" />
//               Core Services
//             </h3>
//             <div className="mt-4 grid gap-3 sm:grid-cols-2">
//               {program.services.map((service, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex items-start gap-3 rounded-lg border ${program.accentBorder} ${program.lightBg} p-3 transition-colors hover:bg-white hover:shadow-sm`}
//                 >
//                   <CheckCircle2
//                     size={18}
//                     strokeWidth={2.5}
//                     className={`mt-0.5 shrink-0 ${program.checkColor}`}
//                   />
//                   <span className="text-sm font-semibold text-slate-700">
//                     {service}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Why Choose Us */}
//           <div className="mt-8 sm:mt-10">
//             <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#0D2B6B]">
//               <Star size={20} className="text-[#B8952A]" />
//               Why Choose Aim Skills
//             </h3>
//             <div className="mt-4 space-y-3">
//               {program.benefits.map((benefit, idx) => (
//                 <div key={idx} className="flex items-center gap-3">
//                   <div
//                     className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${program.gradient} text-white`}
//                   >
//                     <CheckCircle2 size={14} strokeWidth={3} />
//                   </div>
//                   <span className="text-sm font-medium text-slate-600">
//                     {benefit}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-[#EEF3FC] p-6 sm:mt-10">
//             {program.stats.map((stat, idx) => {
//               const StatIcon = stat.icon;
//               return (
//                 <div key={idx} className="text-center">
//                   <StatIcon size={20} className="mx-auto text-[#1A4DA8]" />
//                   <div className="mt-2 text-xl font-extrabold text-[#0D2B6B] sm:text-2xl">
//                     {stat.value}
//                   </div>
//                   <div className="mt-1 text-xs font-semibold text-slate-500">
//                     {stat.label}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CTA Button */}
//           <div className="mt-8 sm:mt-10">
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${program.gradient} px-8 py-4 text-base font-extrabold text-white shadow-lg transition-all hover:shadow-xl sm:w-auto ${
//                 isGold ? "text-[#0D2B6B]" : "text-white"
//               }`}
//             >
//               Get Started
//               <ArrowRight size={20} strokeWidth={2.5} />
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function OtherProgramCard({ program }) {
//   const Icon = program.icon;

//   return (
//     <motion.div
//       variants={fadeUpVariants}
//       whileHover={{ y: -4, scale: 1.02 }}
//       className={`group relative overflow-hidden rounded-2xl ${program.bgColor} p-6 shadow-sm border border-[#B8CCF0]/30 transition-all duration-300 hover:shadow-lg sm:p-8`}
//     >
//       <div className="absolute inset-x-0 top-0 h-1 bg-[#B8952A]" />

//       <div className="flex items-start gap-4">
//         <div
//           className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${program.iconBg} p-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
//         >
//           <Icon size={24} strokeWidth={2} className={program.iconColor} />
//         </div>
//         <div>
//           <h3 className="text-lg font-extrabold text-[#0D2B6B]">
//             {program.title}
//           </h3>
//           <p className="mt-2 text-sm leading-6 text-slate-600">
//             {program.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function ProgramsSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 lg:py-24">
//       {/* Ambient background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#B8CCF0]/30 blur-[150px]" />
//         <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#F5E8C0]/40 blur-[150px]" />
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EEF3FC]/50 blur-[100px]" />
//       </div>

//       {/* Grid pattern */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(13,43,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,43,107,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto max-w-3xl text-center mb-16 lg:mb-20"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-white px-5 py-2.5 backdrop-blur-sm">
//             <BadgeCheck
//               size={18}
//               className="text-[#1A4DA8]"
//               strokeWidth={2.5}
//             />
//             <span className="text-sm font-bold text-[#1A4DA8]">
//               Our Programs
//             </span>
//           </div>

//           <h1 className="text-4xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-5xl lg:text-6xl">
//             Flagship{" "}
//             <span className="text-[#B8952A]">Programs</span>
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
//             Comprehensive initiatives designed to empower individuals,
//             institutions, and organizations through industry-focused training
//             and consultancy
//           </p>

//           <div className="mx-auto mt-7 flex items-center justify-center gap-2">
//             <div className="h-1.5 w-16 rounded-full bg-[#1A4DA8]" />
//             <div className="h-1.5 w-10 rounded-full bg-[#B8952A]" />
//             <div className="h-1.5 w-12 rounded-full bg-[#0D2B6B]" />
//           </div>
//         </motion.div>

//         {/* Featured Programs */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="space-y-12 lg:space-y-16"
//         >
//           {featuredPrograms.map((program, index) => (
//             <FeaturedProgramCard
//               key={program.title}
//               program={program}
//               index={index}
//             />
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
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-[#B8CCF0]" />
//             </div>
//             <div className="relative flex justify-center">
//               <span className="bg-[#EEF3FC] px-6">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-white px-5 py-2.5 shadow-sm">
//                   <Target size={16} className="text-[#1A4DA8]" />
//                   <span className="text-sm font-bold text-[#0D2B6B]">
//                     Additional Programs
//                   </span>
//                   <Target size={16} className="text-[#B8952A]" />
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
//           className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {otherPrograms.map((program) => (
//             <OtherProgramCard key={program.title} program={program} />
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-16 text-center lg:mt-20"
//         >
//           <div className="inline-flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-[#0D2B6B] to-[#1A4DA8] p-10 shadow-xl sm:flex-row sm:p-12">
//             <div className="text-left">
//               <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
//                 Ready to Start Your Journey?
//               </h3>
//               <p className="mt-2 text-base text-[#B8CCF0]">
//                 Contact us today to discuss your training and consultancy needs
//               </p>
//             </div>
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5E8C0] to-[#B8952A] px-8 py-4 text-base font-extrabold text-[#0D2B6B] shadow-lg transition-all hover:from-[#B8952A] hover:to-[#F5E8C0] sm:shrink-0"
//             >
//               Contact Us
//               <ArrowRight size={20} strokeWidth={2.5} />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Drone,
  FileText,
  GraduationCap,
  Handshake,
  Presentation,
  Shield,
  Sprout,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const featuredPrograms = [
  {
    title: "Drone Type Certification & RPTO Consultancy",
    subtitle: "Launch Your Drone Business with Complete Regulatory Support",
    description:
      "Aim Skills Education Trust provides professional consultancy and regulatory support for Drone Type Certification, RPTO setup, DGCA compliance, and drone training infrastructure development. With vast experience in the skill development, aviation training, and consultancy sector, we help organizations, startups, institutions, and entrepreneurs establish industry-ready and DGCA-compliant drone operations.",
    services: [
      "DGCA Drone Type Certification Assistance",
      "RPTO Setup & Approval Consultancy",
      "Drone Training & Skill Development Support",
      "End-to-End Documentation Assistance",
      "DGCA Compliance & Regulatory Guidance",
      "Operational & Infrastructure Consultancy",
    ],
    benefits: [
      "Experienced team with strong training and consultancy background",
      "Expertise in skill development and emerging technologies",
      "Fast, reliable, and professional support",
      "Customized solutions for startups, institutes, and enterprises",
      "End-to-end assistance from planning to approvals",
    ],
    icon: Drone,
    gradient: "from-[#1A4DA8] to-[#0D2B6B]",
    lightBg: "bg-[#EEF3FC]",
    accentBorder: "border-[#B8CCF0]",
    checkColor: "text-[#1A4DA8]",
    stats: [
      { label: "Success Rate", value: "100%", icon: Target },
      { label: "Projects Completed", value: "50+", icon: TrendingUp },
      { label: "Expert Consultants", value: "15+", icon: Users },
    ],
    tag: "Most Popular",
  },
  {
    title: "Army Customized Training Services",
    subtitle: "Professional Training & Development Solutions for Defence Personnel",
    description:
      "Aim Skills Education Trust provides customized training and development services designed specifically for defence and armed forces personnel. With strong experience in the training and consultancy sector, we specialize in delivering practical, industry-oriented, and mission-focused learning solutions for army units and defence organizations. We are proud to have successfully delivered training programs for 10+ Army Units and trained 1000+ Army Jawans.",
    services: [
      "Digital Skills & IT Training",
      "Communication & Personality Development",
      "Leadership & Team Building Programs",
      "Cyber Awareness & Digital Safety Training",
      "Soft Skills & Professional Development",
      "Road Safety & Defensive Driving Awareness",
      "AI & Emerging Technology Awareness Programs",
      "Customized Capacity Building Workshops",
      "Motivational & Behavioral Training Sessions",
    ],
    benefits: [
      "Experience working with multiple Army Units",
      "1000+ Army Jawans trained successfully",
      "Customized training modules as per requirements",
      "Professional trainers with practical approach",
      "Focus on discipline, productivity, and skill enhancement",
    ],
    icon: Shield,
    gradient: "from-[#0D2B6B] to-[#1A4DA8]",
    lightBg: "bg-[#EEF3FC]",
    accentBorder: "border-[#B8CCF0]",
    checkColor: "text-[#B8952A]",
    stats: [
      { label: "Army Units Served", value: "10+", icon: Building2 },
      { label: "Jawans Trained", value: "1000+", icon: Users },
      { label: "Training Modules", value: "25+", icon: BriefcaseBusiness },
    ],
    tag: "Proven Track Record",
  },
  {
    title: "Content Development Services",
    subtitle: "Customized Training & Educational Content Solutions",
    description:
      "Aim Skills Education Trust provides professional content development services for CSR projects, Sector Skill Councils, corporate organizations, educational institutions, government projects, and skill development programs as per client requirements. Our team specializes in creating customized training materials aligned with NSQF standards, industry expectations, and organizational objectives.",
    services: [
      "Training Module & Curriculum Development",
      "Participant Handbooks & Trainer Guides",
      "PowerPoint Presentations & Learning Decks",
      "Assessment Papers, Question Banks & Evaluation Tools",
      "NSQF-Aligned Skill Development Content",
      "CSR Project Documentation & Reports",
      "E-learning & Digital Learning Content",
      "Video Script & Educational Content Writing",
      "Multilingual Training Content Support",
    ],
    benefits: [
      "Experience working with CSR projects and skill development initiatives",
      "Strong understanding of Sector Skill Council requirements",
      "Customized content development as per organizational needs",
      "Industry-focused and practical learning approach",
      "Support for online, offline, and blended learning formats",
    ],
    icon: FileText,
    gradient: "from-[#B8952A] to-[#F5E8C0]",
    lightBg: "bg-[#F5E8C0]/30",
    accentBorder: "border-[#F5E8C0]",
    checkColor: "text-[#B8952A]",
    stats: [
      { label: "Projects Delivered", value: "200+", icon: TrendingUp },
      { label: "Client Satisfaction", value: "98%", icon: Star },
      { label: "Industry Partners", value: "30+", icon: Handshake },
    ],
    tag: "Expert Content Team",
  },
];

const otherPrograms = [
  {
    title: "Professional & Vocational Training Programs",
    description:
      "Industry-aligned qualifications, certifications, and diplomas across Business, IT, Engineering, and Media segments designed for all age groups.",
    icon: GraduationCap,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#1A4DA8]",
    iconColor: "text-white",
  },
  {
    title: "Faculty Development Programs / TTT",
    description:
      "Scientifically designed Train the Trainer programs improving teaching quality and institutional capacity through modern pedagogy.",
    icon: Presentation,
    bgColor: "bg-white",
    iconBg: "bg-[#B8952A]",
    iconColor: "text-white",
  },
  {
    title: "Rural Development Projects",
    description:
      "Community-focused interventions creating livelihood opportunities and strengthening local ecosystems in rural areas.",
    icon: Sprout,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#0D2B6B]",
    iconColor: "text-white",
  },
  {
    title: "Corporate Training Programs",
    description:
      "Custom-made training solutions for corporate entities, government organizations with end-to-end training management.",
    icon: BriefcaseBusiness,
    bgColor: "bg-white",
    iconBg: "bg-[#1A4DA8]",
    iconColor: "text-white",
  },
  {
    title: "Campus Training Programs",
    description:
      "Bridging industry-academia gaps through campus-to-career preparation, soft skills, and interview readiness programs.",
    icon: Building2,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#B8952A]",
    iconColor: "text-white",
  },
  {
    title: "Consulting Services",
    description:
      "Innovative solutions for vocational training, CSR advisory, feasibility studies, and partnership development.",
    icon: Handshake,
    bgColor: "bg-white",
    iconBg: "bg-[#0D2B6B]",
    iconColor: "text-white",
  },
];

// PARENT variants with staggerChildren
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// CHILD variants for featured cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// CHILD variants for other program cards
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Header variants
const headerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

function FeaturedProgramCard({ program }) {
  const Icon = program.icon;
  const isGold = program.checkColor === "text-[#B8952A]";

  return (
    <motion.article variants={cardVariants} className="group relative">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8CCF0]/30">
        <div
          className={`relative overflow-hidden bg-gradient-to-r ${program.gradient} p-8 sm:p-10 lg:p-12`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10">
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm ${
                isGold
                  ? "bg-[#B8952A]/30 text-[#0D2B6B]"
                  : "bg-white/20 text-white"
              }`}
            >
              <Star
                size={16}
                className={isGold ? "text-[#B8952A]" : "text-[#F5E8C0]"}
                fill="currentColor"
              />
              <span className="text-sm font-bold">{program.tag}</span>
            </div>

            <div
              className={`mb-6 flex size-16 items-center justify-center rounded-2xl backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isGold ? "bg-[#0D2B6B]/20" : "bg-white/20"
              }`}
            >
              <Icon
                size={32}
                strokeWidth={1.8}
                className={isGold ? "text-[#0D2B6B]" : "text-white"}
              />
            </div>

            <h2
              className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${
                isGold ? "text-[#0D2B6B]" : "text-white"
              }`}
            >
              {program.title}
            </h2>
            <p
              className={`mt-3 text-base font-semibold sm:text-lg ${
                isGold ? "text-[#0D2B6B]/80" : "text-white/90"
              }`}
            >
              {program.subtitle}
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {program.description}
          </p>

          <div className="mt-8 sm:mt-10">
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#0D2B6B]">
              <Target size={20} className="text-[#1A4DA8]" />
              Core Services
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {program.services.map((service, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 rounded-lg border ${program.accentBorder} ${program.lightBg} p-3 transition-colors hover:bg-white hover:shadow-sm`}
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={2.5}
                    className={`mt-0.5 shrink-0 ${program.checkColor}`}
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-[#0D2B6B]">
              <Star size={20} className="text-[#B8952A]" />
              Why Choose Aim Skills
            </h3>
            <div className="mt-4 space-y-3">
              {program.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${program.gradient} text-white`}
                  >
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-[#EEF3FC] p-6 sm:mt-10">
            {program.stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <StatIcon size={20} className="mx-auto text-[#1A4DA8]" />
                  <div className="mt-2 text-xl font-extrabold text-[#0D2B6B] sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${program.gradient} px-8 py-4 text-base font-extrabold shadow-lg transition-all hover:shadow-xl sm:w-auto ${
                isGold ? "text-[#0D2B6B]" : "text-white"
              }`}
            >
              Get Started
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function OtherProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl ${program.bgColor} p-6 shadow-sm border border-[#B8CCF0]/30 transition-all duration-300 hover:shadow-lg sm:p-8`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[#B8952A]" />
      <div className="flex items-start gap-4">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${program.iconBg} p-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon size={24} strokeWidth={2} className={program.iconColor} />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-[#0D2B6B]">
            {program.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {program.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function DetailedProgramsSection() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Parent controls animation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto max-w-3xl text-center mb-16 lg:mb-20"
        >
          <motion.div variants={headerVariants}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-white px-5 py-2.5 backdrop-blur-sm">
              <BadgeCheck size={18} className="text-[#1A4DA8]" strokeWidth={2.5} />
              <span className="text-sm font-bold text-[#1A4DA8]">Our Programs</span>
            </div>
          </motion.div>

          <motion.h2 variants={headerVariants} className="text-4xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-5xl lg:text-6xl">
            Flagship <span className="text-[#B8952A]">Programs</span>
          </motion.h2>

          <motion.p variants={headerVariants} className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
            Comprehensive initiatives designed to empower individuals, institutions, and organizations through industry-focused training and consultancy
          </motion.p>

          <motion.div variants={headerVariants} className="mx-auto mt-7 flex items-center justify-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-[#1A4DA8]" />
            <div className="h-1.5 w-10 rounded-full bg-[#B8952A]" />
            <div className="h-1.5 w-12 rounded-full bg-[#0D2B6B]" />
          </motion.div>
        </motion.div>

        {/* Featured Programs */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 lg:space-y-16"
        >
          {featuredPrograms.map((program) => (
            <FeaturedProgramCard key={program.title} program={program} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="my-16 lg:my-20"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#B8CCF0]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#EEF3FC] px-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-white px-5 py-2.5 shadow-sm">
                  <Target size={16} className="text-[#1A4DA8]" />
                  <span className="text-sm font-bold text-[#0D2B6B]">Additional Programs</span>
                  <Target size={16} className="text-[#B8952A]" />
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherPrograms.map((program) => (
            <OtherProgramCard key={program.title} program={program} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center lg:mt-20"
        >
          <div className="inline-flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-[#0D2B6B] to-[#1A4DA8] p-10 shadow-xl sm:flex-row sm:p-12">
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Start Your Journey?
              </h3>
              <p className="mt-2 text-base text-[#B8CCF0]">
                Contact us today to discuss your training and consultancy needs
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5E8C0] to-[#B8952A] px-8 py-4 text-base font-extrabold text-[#0D2B6B] shadow-lg transition-all hover:from-[#B8952A] hover:to-[#F5E8C0] sm:shrink-0"
            >
              Contact Us
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}