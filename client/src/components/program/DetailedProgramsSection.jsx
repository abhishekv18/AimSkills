
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
//     checkColor: "text-[#1A4DA8]",
//     stats: [
//       { label: "Success Rate", value: "100%", icon: Target },
//       { label: "Projects Completed", value: "50+", icon: TrendingUp },
//       { label: "Expert Consultants", value: "15+", icon: Users },
//     ],
//     tag: "Most Popular",
//   },
//    {
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
//     checkColor: "text-[#B8952A]",
//     stats: [
//       { label: "Projects Delivered", value: "200+", icon: TrendingUp },
//       { label: "Client Satisfaction", value: "98%", icon: Star },
//       { label: "Industry Partners", value: "30+", icon: Handshake },
//     ],
//     tag: "Expert Content Team",
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
//    gradient: "from-[#1A4DA8] to-[#0D2B6B]",
//     lightBg: "bg-[#EEF3FC]",
//     accentBorder: "border-[#B8CCF0]",
//     checkColor: "text-[#1A4DA8]",
//     stats: [
//       { label: "Army Units Served", value: "10+", icon: Building2 },
//       { label: "Jawans Trained", value: "1000+", icon: Users },
//       { label: "Training Modules", value: "25+", icon: BriefcaseBusiness },
//     ],
//     tag: "Proven Track Record",
//   },
 
// ];

// const otherPrograms = [
//   {
//     title: "Professional & Vocational Training Programs",
//     description:
//       "Comprehensive industry-aligned qualifications, certifications, diploma programs, and practical skill development courses across Business, IT, Engineering, Media, and emerging sectors, designed to enhance employability, technical expertise, and career readiness for learners of all age groups.",
//     icon: GraduationCap,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#1A4DA8]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Faculty Development Programs / TTT",
//     description:
//       "Scientifically designed Faculty Development and Train the Trainer programs focused on enhancing teaching effectiveness, instructional delivery, curriculum planning, assessment methods, and institutional capacity through modern pedagogy and innovative learning methodologies.",
//     icon: Presentation,
//     bgColor: "bg-white",
//     iconBg: "bg-[#B8952A]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Rural Development Projects",
//     description:
//       "Community-centered rural development initiatives aimed at creating sustainable livelihood opportunities, empowering local communities, improving education and skill access, and strengthening social and economic ecosystems in underserved and rural regions.",
//     icon: Sprout,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#0D2B6B]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Corporate Training Programs",
//     description:
//       "Customized corporate training solutions designed for businesses, institutions, and government organizations, covering professional development, leadership, soft skills, technical capabilities, and end-to-end training management tailored to organizational goals.",
//     icon: BriefcaseBusiness,
//     bgColor: "bg-white",
//     iconBg: "bg-[#1A4DA8]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Campus Training Programs",
//     description:
//       "Structured campus-to-career training programs bridging the gap between academics and industry through employability enhancement, communication skills, aptitude preparation, interview readiness, professional grooming, and practical workplace orientation.",
//     icon: Building2,
//     bgColor: "bg-[#EEF3FC]",
//     iconBg: "bg-[#B8952A]",
//     iconColor: "text-white",
//   },
//   {
//     title: "Consulting Services",
//     description:
//       "Strategic consulting and advisory services delivering innovative solutions for vocational training, CSR initiatives, project planning, feasibility studies, operational improvement, partnership development, and long-term organizational growth.",
//     icon: Handshake,
//     bgColor: "bg-white",
//     iconBg: "bg-[#0D2B6B]",
//     iconColor: "text-white",
//   },
// ];

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

// function FeaturedProgramCard({ program }) {
//   const Icon = program.icon;
//   const isGold = program.checkColor === "text-[#B8952A]";

//   return (
//     <motion.article variants={cardVariants} className="group relative">
//       <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8CCF0]/30">
//         <div
//           className={`relative overflow-hidden bg-gradient-to-r ${program.gradient} p-8 sm:p-10 lg:p-12`}
//         >
//           <div className="pointer-events-none absolute inset-0 opacity-10">
//             <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white blur-3xl" />
//             <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
//           </div>

//           <div className="relative z-10">
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

//         <div className="p-8 sm:p-10 lg:p-12">
//           <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//             {program.description}
//           </p>

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

//           <div className="mt-8 sm:mt-10">
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${program.gradient} px-8 py-4 text-base font-extrabold shadow-lg transition-all hover:shadow-xl sm:w-auto ${
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

// export default function DetailedProgramsSection() {
//   // Add console.log to debug
//   console.log("DetailedProgramsSection rendering...");
//   console.log("Featured programs:", featuredPrograms.length);
//   console.log("Other programs:", otherPrograms.length);

//   return (
//     <div className="w-full">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Header - ADDED THIS which was missing */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto max-w-3xl text-center mb-16 lg:mb-20"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-white px-5 py-2.5 backdrop-blur-sm">
//             <BadgeCheck size={18} className="text-[#1A4DA8]" strokeWidth={2.5} />
//             <span className="text-sm font-bold text-[#1A4DA8]">Our Programs</span>
//           </div>

//           <h2 className="text-4xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-5xl lg:text-6xl">
//             Flagship <span className="text-[#B8952A]">Programs</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
//             Comprehensive initiatives designed to empower individuals, institutions, and organizations through industry-focused training and consultancy
//           </p>

//           <div className="mx-auto mt-7 flex items-center justify-center gap-2">
//             <div className="h-1.5 w-16 rounded-full bg-[#1A4DA8]" />
//             <div className="h-1.5 w-10 rounded-full bg-[#B8952A]" />
//             <div className="h-1.5 w-12 rounded-full bg-[#0D2B6B]" />
//           </div>
//         </motion.div>

//         {/* Featured Programs */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//                 staggerChildren: 0.2,
//                 delayChildren: 0.3,
//               },
//             },
//           }}
//           className="space-y-12 lg:space-y-16"
//         >
//           {featuredPrograms.map((program, index) => (
//             <FeaturedProgramCard key={program.title} program={program} />
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
//                   <span className="text-sm font-bold text-[#0D2B6B]">Additional Programs</span>
//                   <Target size={16} className="text-[#B8952A]" />
//                 </div>
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Other Programs Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//                 staggerChildren: 0.1,
//                 delayChildren: 0.2,
//               },
//             },
//           }}
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
//     </div>
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
    gradient: "from-[#1A4DA8] to-[#0D2B6B]",
    lightBg: "bg-[#EEF3FC]",
    accentBorder: "border-[#B8CCF0]",
    checkColor: "text-[#1A4DA8]",
    stats: [
      { label: "Army Units Served", value: "10+", icon: Building2 },
      { label: "Jawans Trained", value: "1000+", icon: Users },
      { label: "Training Modules", value: "25+", icon: BriefcaseBusiness },
    ],
    tag: "Proven Track Record",
  },
];

const otherPrograms = [
  {
    title: "Professional & Vocational Training Programs",
    description:
      "Comprehensive industry-aligned qualifications, certifications, diploma programs, and practical skill development courses across Business, IT, Engineering, Media, and emerging sectors, designed to enhance employability, technical expertise, and career readiness for learners of all age groups.",
    icon: GraduationCap,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#1A4DA8]",
    iconColor: "text-white",
  },
  {
    title: "Faculty Development Programs / TTT",
    description:
      "Scientifically designed Faculty Development and Train the Trainer programs focused on enhancing teaching effectiveness, instructional delivery, curriculum planning, assessment methods, and institutional capacity through modern pedagogy and innovative learning methodologies.",
    icon: Presentation,
    bgColor: "bg-white",
    iconBg: "bg-[#B8952A]",
    iconColor: "text-white",
  },
  {
    title: "Rural Development Projects",
    description:
      "Community-centered rural development initiatives aimed at creating sustainable livelihood opportunities, empowering local communities, improving education and skill access, and strengthening social and economic ecosystems in underserved and rural regions.",
    icon: Sprout,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#0D2B6B]",
    iconColor: "text-white",
  },
  {
    title: "Corporate Training Programs",
    description:
      "Customized corporate training solutions designed for businesses, institutions, and government organizations, covering professional development, leadership, soft skills, technical capabilities, and end-to-end training management tailored to organizational goals.",
    icon: BriefcaseBusiness,
    bgColor: "bg-white",
    iconBg: "bg-[#1A4DA8]",
    iconColor: "text-white",
  },
  {
    title: "Campus Training Programs",
    description:
      "Structured campus-to-career training programs bridging the gap between academics and industry through employability enhancement, communication skills, aptitude preparation, interview readiness, professional grooming, and practical workplace orientation.",
    icon: Building2,
    bgColor: "bg-[#EEF3FC]",
    iconBg: "bg-[#B8952A]",
    iconColor: "text-white",
  },
  {
    title: "Consulting Services",
    description:
      "Strategic consulting and advisory services delivering innovative solutions for vocational training, CSR initiatives, project planning, feasibility studies, operational improvement, partnership development, and long-term organizational growth.",
    icon: Handshake,
    bgColor: "bg-white",
    iconBg: "bg-[#0D2B6B]",
    iconColor: "text-white",
  },
];

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

function FeaturedProgramCard({ program }) {
  const Icon = program.icon;
  const isGold = program.checkColor === "text-[#B8952A]";

  return (
    <motion.article variants={cardVariants} className="group relative">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8CCF0]/30">
        {/* Header Gradient Section */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r ${program.gradient} p-6 sm:p-8 md:p-10 lg:p-12`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Tag Badge */}
            <div
              className={`mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm ${
                isGold
                  ? "bg-[#B8952A]/30 text-[#0D2B6B]"
                  : "bg-white/20 text-white"
              }`}
            >
              <Star
                size={14}
                className={isGold ? "text-[#B8952A] sm:size-[16px]" : "text-[#F5E8C0] sm:size-[16px]"}
                fill="currentColor"
              />
              <span className="text-xs sm:text-sm font-bold">{program.tag}</span>
            </div>

            {/* Icon */}
            <div
              className={`mb-5 sm:mb-6 flex size-14 sm:size-16 items-center justify-center rounded-2xl backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isGold ? "bg-[#0D2B6B]/20" : "bg-white/20"
              }`}
            >
              <Icon
                size={28}
                strokeWidth={1.8}
                className={isGold ? "text-[#0D2B6B] sm:size-[32px]" : "text-white sm:size-[32px]"}
              />
            </div>

            {/* Title & Subtitle */}
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isGold ? "text-[#0D2B6B]" : "text-white"
              }`}
            >
              {program.title}
            </h2>
            <p
              className={`mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold ${
                isGold ? "text-[#0D2B6B]/80" : "text-white/90"
              }`}
            >
              {program.subtitle}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-slate-600">
            {program.description}
          </p>

          {/* Core Services */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
              <Target size={18} className="text-[#1A4DA8] sm:size-[20px]" />
              Core Services
            </h3>
            <div className="mt-3 sm:mt-4 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {program.services.map((service, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 sm:gap-3 rounded-lg border ${program.accentBorder} ${program.lightBg} p-2.5 sm:p-3 transition-colors hover:bg-white hover:shadow-sm`}
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={2.5}
                    className={`mt-0.5 shrink-0 sm:size-[18px] ${program.checkColor}`}
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
              <Star size={18} className="text-[#B8952A] sm:size-[20px]" />
              Why Choose Aim Skills
            </h3>
            <div className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
              {program.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className={`flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${program.gradient} text-white`}
                  >
                    <CheckCircle2 size={12} strokeWidth={3} className="sm:size-[14px]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl bg-[#EEF3FC] p-4 sm:p-6 md:p-8">
            {program.stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <StatIcon size={18} className="mx-auto text-[#1A4DA8] sm:size-[20px]" />
                  <div className="mt-1.5 sm:mt-2 text-lg sm:text-xl md:text-2xl font-extrabold text-[#0D2B6B]">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-semibold text-slate-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${program.gradient} px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-extrabold shadow-lg transition-all hover:shadow-xl ${
                isGold ? "text-[#0D2B6B]" : "text-white"
              }`}
            >
              Get Started
              <ArrowRight size={18} strokeWidth={2.5} className="sm:size-[20px]" />
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
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl ${program.bgColor} p-4 sm:p-5 md:p-6 shadow-sm border border-[#B8CCF0]/30 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[#B8952A]" />
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className={`flex size-10 sm:size-11 md:size-12 shrink-0 items-center justify-center rounded-xl ${program.iconBg} p-2 sm:p-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon size={20} strokeWidth={2} className={program.iconColor + " sm:size-[22px] md:size-[24px]"} />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-[#0D2B6B]">
            {program.title}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
            {program.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedProgramsSection() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0] bg-white px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm">
            <BadgeCheck size={16} className="text-[#1A4DA8] sm:size-[18px]" strokeWidth={2.5} />
            <span className="text-xs sm:text-sm font-bold text-[#1A4DA8]">Our Programs</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D2B6B]">
            Flagship <span className="text-[#B8952A]">Programs</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-6 sm:leading-7 md:leading-8 text-slate-600">
            Comprehensive initiatives designed to empower individuals, institutions, and organizations through industry-focused training and consultancy
          </p>

          {/* Color indicators */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 rounded-full bg-[#1A4DA8]" />
            <div className="h-1 sm:h-1.5 w-8 sm:w-10 rounded-full bg-[#B8952A]" />
            <div className="h-1 sm:h-1.5 w-10 sm:w-12 rounded-full bg-[#0D2B6B]" />
          </div>
        </motion.div>

        {/* Featured Programs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="space-y-10 sm:space-y-12 lg:space-y-16"
        >
          {featuredPrograms.map((program) => (
            <FeaturedProgramCard key={program.title} program={program} />
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
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#B8CCF0]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#EEF3FC] px-4 sm:px-6">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0] bg-white px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm">
                  <Target size={14} className="text-[#1A4DA8] sm:size-[16px]" />
                  <span className="text-xs sm:text-sm font-bold text-[#0D2B6B]">Additional Programs</span>
                  <Target size={14} className="text-[#B8952A] sm:size-[16px]" />
                </div>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Other Programs Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherPrograms.map((program) => (
            <OtherProgramCard key={program.title} program={program} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-14 lg:mt-16 xl:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0D2B6B] to-[#1A4DA8] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-[#B8CCF0]">
                Contact us today to discuss your training and consultancy needs
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5E8C0] to-[#B8952A] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-extrabold text-[#0D2B6B] shadow-lg transition-all hover:from-[#B8952A] hover:to-[#F5E8C0] sm:shrink-0 w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight size={18} strokeWidth={2.5} className="sm:size-[20px]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}