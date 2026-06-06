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
//   BarChart3,
//   BriefcaseBusiness,
//   Building2,
//   CheckCircle2,
//   ChevronRight,
//   GraduationCap,
//   HandHeart,
//   HeartHandshake,
//   Image,
//   Landmark,
//   MapPin,
//   Quote,
//   Sprout,
//   TrendingUp,
//   UsersRound,
// } from "lucide-react";
// import Navbar from "../components/Navbar";
// import CTASection from "../components/CTASection";
// import PartnersSection from "../components/PartnersSection";
// import Footer from "../components/Footer";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {  Camera, Eye } from "lucide-react";
// import { Link } from "react-router-dom";

// const heroStats = [
//   { value: "10,000+", label: "Lives Impacted" },
//   { value: "85%", label: "Placement Success" },
//   { value: "15+", label: "States Reached" },
// ];
// const metrics = [
//   {
//     value: 10000,
//     suffix: "+",
//     label: "Candidates Trained",
//     description: "Youth equipped with practical employability skills",
//     icon: GraduationCap,
//   },
//   {
//     value: 85,
//     suffix: "%",
//     label: "Placement Success",
//     description: "Learners moving toward meaningful career opportunities",
//     icon: TrendingUp,
//   },
//   {
//     value: 120,
//     suffix: "+",
//     label: "Villages Reached",
//     description: "Community programs supporting rural development",
//     icon: MapPin,
//   },
//   {
//     value: 50,
//     suffix: "+",
//     label: "CSR & Institutional Partners",
//     description: "Organizations collaborating for measurable impact",
//     icon: Building2,
//   },
// ];

// // const placements = [
// //   {
// //     name: "Riya Sharma",
// //     role: "Customer Support Executive",
// //     image: "/src/assets/gettyimages-2164057693-612x612.jpg",
// //     story:
// //       "After completing communication and workplace readiness training, Riya secured her first formal job and now supports her family with steady income.",
// //   },
// //   {
// //     name: "Aman Khan",
// //     role: "Retail Operations Associate",
// //     image: "/src/assets/indian-man-student-shirt-posed-outdoor_627829-2276.avif",
// //     story:
// //       "Aman gained interview confidence, digital basics, and role-specific training that helped him transition from uncertainty to employment.",
// //   },
// //   {
// //     name: "Neha Patil",
// //     role: "Data Entry Operator",
// //     image: "/src/assets/f045cd4fcc0c57d0f2306e072160c3d0.jpg",
// //     story:
// //       "With guided training and placement support, Neha built practical skills and entered a workplace aligned with her career goals.",
// //   },
// // ];
// const placements = [
//   {
//     name: "Riya Sharma",
//     role: "Customer Support Executive",
//     image: "/gettyimages-2164057693-612x612.jpg",
//     story:
//       "After completing communication, digital literacy, and workplace readiness training, Riya secured her first formal job as a Customer Support Executive. Today, she contributes to her family’s financial stability while building confidence, professional experience, and a clear career path.",
//   },

//   {
//     name: "Aman Khan",
//     role: "Retail Operations Associate",
//     image: "/indian-man-student-shirt-posed-outdoor_627829-2276.avif",
//     story:
//       "Aman developed interview confidence, digital fundamentals, and practical retail skills through structured training. With placement guidance and mentorship, he successfully transitioned from uncertainty to meaningful employment and now continues to grow in his professional journey.",
//   },

//   {
//     name: "Neha Patil",
//     role: "Data Entry Operator",
//     image: "/f045cd4fcc0c57d0f2306e072160c3d0.jpg",
//     story:
//       "Through guided learning, hands-on computer training, and placement support, Neha strengthened her practical skills and workplace confidence. She secured a role aligned with her career aspirations and now looks toward greater independence and long-term professional growth.",
//   },
// ];
// const villageImpact = [
//   {
//     title: "SHG Capacity Building",
//     description:
//       "Supporting self-help groups with training, awareness, and livelihood-linked knowledge.",
//     icon: UsersRound,
//   },
//   {
//     title: "Village Skill Camps",
//     description:
//       "Bringing structured training and career awareness directly to rural communities.",
//     icon: Landmark,
//   },
//   {
//     title: "Livelihood Pathways",
//     description:
//       "Helping families access skills, confidence, and sustainable income opportunities.",
//     icon: Sprout,
//   },
// ];

// const caseStudies = [
//   {
//     title: "From uncertainty to employment",
//     before: "Limited exposure to workplace expectations and interview skills.",
//     after: "Completed training, improved confidence, and secured an entry-level role.",
//     image: "/Screenshot 2026-05-25 042225.png",
//   },
//   {
//     title: "From isolated learning to community progress",
//     before: "Rural learners lacked access to organized skill development programs.",
//     after: "Village training sessions created awareness, participation, and career direction.",
//     image: "/Screenshot 2026-05-25 042136.png",
//   },
// ];

// const gallery = [
//   {
//     src: "/img5 (1).jpg",
//     title: "Skill Development Training",
//     description:
//       "Hands-on workshops helping youth strengthen employability, communication, and workplace readiness skills.",
//   },

//   {
//     src: "/img4 (1).jpg",
//     title: "Community Outreach Programs",
//     description:
//       "Village-level engagement activities promoting awareness, participation, and sustainable local development.",
//   },

//   {
//     src: "/img2 (2).jpg",
//     title: "Workforce Training & Production Excellence",
//     description:
//       "Hands-on manufacturing training developing technical expertise, discipline, and future employment opportunities.",
//   },
// ];
// const csrTrust = [
//   "Outcome-focused program design",
//   "Transparent reporting and documentation",
//   "Community-first implementation model",
//   "Scalable CSR partnership framework",
// ];

// const fadeUp = {
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
//     },
//   },
// };
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//       delayChildren: 0.15,
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
// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
//     },
//   },
// };

// function SectionReveal({ children, id, className = "" }) {
//   return (
//     <motion.section
//       id={id}
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.14 }}
//       className={className}
//     >
//       {children}
//     </motion.section>
//   );
// }

// function CountUp({ value, suffix, start }) {
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
//     if (start) motionValue.set(value);
//   }, [motionValue, start, value]);

//   return <motion.span>{displayValue}</motion.span>;
// }

// function SectionHeading({ badge, title, highlight, text, icon: Icon }) {
//   return (
//     <motion.div
//       variants={stagger}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.22 }}
//       className="mx-auto max-w-3xl text-center"
//     >
//       <motion.div
//         variants={fadeUp}
//         className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
//       >
//         {Icon ? <Icon size={17} strokeWidth={2.2} /> : null}
//         {badge}
//       </motion.div>

//       <motion.h2
//         variants={fadeUp}
//         className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
//       >
//         {title} {highlight ? <span className="text-[#B8952A]">{highlight}</span> : null}
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg"
//       >
//         {text}
//       </motion.p>

//       <motion.div
//         variants={fadeUp}
//         className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]"
//       />
//     </motion.div>
//   );
// }

// function ImpactHeroSection() {


//       const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userData) {
//       navigate("/admin/dashboard");
//     }
//   }, [userData, navigate]);
//   return (

//   <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
//       <div className="absolute inset-0">
//         <img
//           src="/Gemini_Generated_Image_paj8qqpaj8qqpaj8.png"
//           alt="AimSkills students and trainers"
//           className="h-full w-full object-cover opacity-80"
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

//       <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />
      

//       <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 lg:px-8">
//         <div className="grid gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
//           {/* Left content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-3xl"
//           >
           

//             <motion.div
//               variants={itemVariants}
//               className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm"
//             >
//               <span className="h-2 w-2 rounded-full bg-[#D4AF55]" />
//               Measurable Social Impact
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
//             >
//               Our 
//                    {/* <br /> */}
//               <span className="text-[#D4AF55]"> Impact</span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 sm:text-lg"
//             >
//               Driving measurable change through skill development, career 
//               placements, and sustainable community transformation.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="mt-8 flex flex-col gap-3 sm:flex-row"
//             >
//               <a
//                 href="#impact-stories"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//               >
//                 View Success Stories
//                 <ArrowRight size={16} strokeWidth={2.4} />
//               </a>

//               <a
//                 href="#reports"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//               >
//                 Impact Reports
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right stats - compact like CSR */}
//           <motion.div
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex flex-row justify-center gap-2.5 lg:flex-col lg:w-[170px] shrink-0"
//           >
//             {heroStats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="rounded-lg border border-white/15 bg-[#1A4DA8]/40 px-3 py-2.5 lg:px-4 lg:py-3 flex-1 text-center lg:text-left"
//               >
//                 <div className="text-lg lg:text-xl font-extrabold text-[#D4AF55]">
//                   {stat.value}
//                 </div>
//                 <div className="mt-0.5 text-[10px] lg:text-[11px] font-semibold text-white/70">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>


//   );
// }

// function ImpactMetricsSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.28 });

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FB] to-[#EEF3FC] py-20 sm:py-24 lg:py-28"
//     >
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <SectionHeading
//           badge="Impact Dashboard"
//           title="Numbers That Reflect"
//           highlight="Real Outcomes"
//           text="Every partnership supports training, confidence-building, livelihood pathways, and measurable community transformation."
//           icon={TrendingUp}
//         />

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
//         >
//           {metrics.map((metric, index) => {
//             const Icon = metric.icon;

//             return (
//               <motion.article
//                 key={metric.label}
//                 variants={fadeUp}
//                 whileHover={{ y: -8, scale: 1.025 }}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//               >
//                 <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//                 <div className="pointer-events-none absolute -bottom-12 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//                 <div className="relative">
//                   <div className="flex items-center justify-between gap-4">
//                     <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#0D2B6B] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                       <Icon size={23} strokeWidth={2.2} />
//                     </div>

//                     {/* <span className="rounded-full border border-[#B8CCF0]/60 bg-[#F8F9FB] px-3 py-1 text-xs font-extrabold text-[#B8952A]">
//                       0{index + 1}
//                     </span> */}
//                   </div>

//                   <div className="mt-7 text-4xl font-extrabold tracking-tight text-[#1A4DA8] sm:text-5xl">
//                     <CountUp
//                       value={metric.value}
//                       suffix={metric.suffix}
//                       start={isInView}
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wide text-[#111827]">
//                     {metric.label}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
//                     {metric.description}
//                   </p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function PlacementSuccessSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <SectionHeading
//           badge="Placement Stories"
//           title="Training That Leads to"
//           highlight="Livelihoods"
//           text="Our programs are designed to move learners from classroom readiness to real workplace opportunities."
//           icon={BriefcaseBusiness}
//         />

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.16 }}
//           className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
//         >
//           {placements.map((item) => (
//             <motion.article
//               key={item.name}
//               variants={fadeUp}
//               whileHover={{ y: -8, scale: 1.015 }}
//               className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/70 via-transparent to-transparent" />
//                 <div className="absolute bottom-5 left-5 right-5">
//                   <div className="inline-flex rounded-full bg-[#B8952A] px-3 py-1 text-xs font-extrabold text-white">
//                     Placed Candidate
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-extrabold text-[#0D2B6B]">
//                   {item.name}
//                 </h3>
//                 <p className="mt-1 text-sm font-bold text-[#1A4DA8]">
//                   {item.role}
//                 </p>
//                 <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
//                   {item.story}
//                 </p>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function SHGAndVillageImpactSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, x: -42 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.22 }}
//           transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//           className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
//         >
//           <img
//             src="/Gemini_Generated_Image_omh9psomh9psomh9.png"
//             alt="Village and SHG impact"
//             className="h-[360px] w-full rounded-xl object-cover sm:h-[460px] lg:h-[540px]"
//           />
//           <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-transparent" />
//           <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-sm backdrop-blur-md">
//             <p className="text-sm font-extrabold text-[#0D2B6B]">
//               Rural programs built around local needs
//             </p>
//             <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//               We work with communities to create skills, participation, and
//               livelihood awareness.
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <motion.div
//             variants={fadeUp}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
//           >
//             <HandHeart size={17} strokeWidth={2.2} />
//             Village & SHG Impact
//           </motion.div>

//           <motion.h2
//             variants={fadeUp}
//             className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
//           >
//             Strengthening Communities Through{" "}
//             <span className="text-[#B8952A]">Local Action</span>
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg"
//           >
//             Our village and SHG programs connect training with grassroots
//             realities, helping communities access knowledge, livelihood
//             direction, and long-term resilience.
//           </motion.p>

//           <motion.div variants={stagger} className="mt-8 grid gap-4">
//             {villageImpact.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   variants={fadeUp}
//                   whileHover={{ y: -4, scale: 1.015 }}
//                   className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//                 >
//                   <div className="flex gap-4">
//                     <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                       <Icon size={23} strokeWidth={2.2} />
//                     </div>
//                     <div>
//                       <h3 className="text-base font-extrabold text-[#0D2B6B]">
//                         {item.title}
//                       </h3>
//                       <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function BeforeAfterCaseStudiesSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <SectionHeading
//           badge="Transformation Studies"
//           title="Before & After"
//           highlight="Impact Stories"
//           text="CSR impact becomes powerful when progress is visible. These studies show how structured intervention creates real change."
//           icon={Quote}
//         />

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.16 }}
//           className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2"
//         >
//           {caseStudies.map((item) => (
//             <motion.article
//               key={item.title}
//               variants={fadeUp}
//               whileHover={{ y: -8, scale: 1.015 }}
//               className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//             >
//               <div className="relative h-72 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/65 via-transparent to-transparent" />
//               </div>

//               <div className="p-6 sm:p-8">
//                 <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
//                   {item.title}
//                 </h3>

//                 <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                   <div className="rounded-2xl bg-[#F8F9FB] p-5">
//                     <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
//                       Before
//                     </span>
//                     <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
//                       {item.before}
//                     </p>
//                   </div>

//                   <div className="rounded-2xl bg-[#EEF3FC] p-5">
//                     <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#B8952A]">
//                       After
//                     </span>
//                     <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
//                       {item.after}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// // function ImpactGallerySection() {
// //   return (
// //     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 lg:py-28">
// //       <div className="mx-auto max-w-7xl px-6 lg:px-8">

// //         <SectionHeading
// //           badge="Field Gallery"
// //           title="Moments From"
// //           highlight="The Ground"
// //           text="Real stories of training, community engagement, and career transformation."
// //           icon={Image}
// //         />

// //         <motion.div
// //           variants={stagger}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.15 }}
// //           className="mt-14 grid gap-8 lg:grid-cols-3"
// //         >
// //           {gallery.map((item) => (
// //             <motion.div
// //               key={item.src}
// //               variants={fadeUp}
// //               whileHover={{ y: -8 }}
// //               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
// //             >
// //               <div className="overflow-hidden">
// //                 <img
// //                   src={item.src}
// //                   alt={item.title}
// //                   className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
// //                 />
// //               </div>

// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-[#0D2B6B]">
// //                   {item.title}
// //                 </h3>

// //                 <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
// //                   {item.description}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }
// function ImpactGallerySection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-20 lg:py-28">
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#B8CCF0]/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5E8C0]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
//       </div>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.05)_1px,transparent_0)] bg-[length:28px_28px] opacity-40" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <SectionHeading
//           badge="Field Gallery"
//           title="Moments From"
//           highlight="The Ground"
//           text="Real stories of training, community engagement, and career transformation."
//           icon={Image}
//         />

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-14 grid gap-8 lg:grid-cols-3"
//         >
//           {gallery.map((item, index) => (
//             <motion.div
//               key={item.src}
//               variants={fadeUp}
//               whileHover={{ y: -10 }}
//               className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/50 shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/40 hover:border-[#B8CCF0]/60"
//             >
//               {/* Image Container */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Gradient Overlay on Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/70 via-[#0D2B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
//                 {/* View Overlay */}
//                 {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                   <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-[#1A4DA8] shadow-2xl">
//                     <Eye size={16} />
//                     View Image
//                   </span>
//                 </div> */}

//                 {/* Top Badge */}
//                 <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
//                     <Camera size={12} />
//                     AimSkills
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 lg:p-7">
//                 <h3 className="text-xl font-extrabold text-[#0D2B6B] leading-tight group-hover:text-[#1A4DA8] transition-colors duration-300">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
//                   {item.description}
//                 </p>

//                 {/* Bottom Decorative Line */}
//                 <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
//                   <div className="h-1 w-8 rounded-full bg-[#B8952A] group-hover:w-16 transition-all duration-500" />
//                   <div className="h-1 w-2 rounded-full bg-[#B8CCF0]" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View Full Gallery Link */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-14 text-center"
//         >
//           <Link
//             to="/gallery"
//             className="inline-flex items-center gap-2.5 rounded-xl bg-white border-2 border-[#B8CCF0] px-7 py-3.5 text-sm font-bold text-[#1A4DA8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEF3FC] hover:border-[#1A4DA8] hover:shadow-lg"
//           >
//             View Full Gallery
//             <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// function CSRTrustSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, x: -42 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.22 }}
//           transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//           className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] p-8 shadow-md sm:p-10 lg:p-12"
//         >
//           <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

//           <div className="relative">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md">
//               <BadgeCheck size={17} strokeWidth={2.2} />
//               CSR Credibility
//             </div>

//             <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
//               Built for Responsible CSR Partnerships
//             </h2>

//             <div className="mt-6 h-1 w-20 rounded-full bg-[#D4AF55]" />

//             <p className="mt-6 text-base font-medium leading-8 text-slate-200 sm:text-lg">
//               AimSkills helps organizations convert CSR intent into structured,
//               transparent, and measurable community outcomes.
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid gap-5 sm:grid-cols-2"
//         >
//           {csrTrust.map((item) => (
//             <motion.div
//               key={item}
//               variants={fadeUp}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//             >
//               <CheckCircle2
//                 size={24}
//                 strokeWidth={2.3}
//                 className="text-[#B8952A]"
//               />
//               <h3 className="mt-5 text-lg font-extrabold text-[#0D2B6B]">
//                 {item}
//               </h3>
//               <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
//                 Designed to support accountability, clarity, and long-term
//                 institutional trust.
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default function ImpactPage() {
//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/impact" />

//       <ImpactHeroSection />

//       <SectionReveal id="impact-metrics">
//         <ImpactMetricsSection />
//       </SectionReveal>

//       <SectionReveal id="placement-success">
//         <PlacementSuccessSection />
//       </SectionReveal>

//       <SectionReveal id="village-impact">
//         <SHGAndVillageImpactSection />
//       </SectionReveal>

//       <SectionReveal id="case-studies">
//         <BeforeAfterCaseStudiesSection />
//       </SectionReveal>

//       <SectionReveal id="impact-gallery">
//         <ImpactGallerySection />
//       </SectionReveal>

//       <SectionReveal id="csr-trust">
//         <CSRTrustSection />
//       </SectionReveal>
// <SectionReveal id="cta">
//         <CTASection />
//       </SectionReveal>
//       <SectionReveal id="partners">
//         <PartnersSection />
//       </SectionReveal>

      

//       <Footer />
//     </main>
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
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Image,
  Landmark,
  MapPin,
  Quote,
  Sprout,
  TrendingUp,
  UsersRound,
  Camera,
  Eye,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const heroStats = [
  { value: "10,000+", label: "Lives Impacted" },
  { value: "85%", label: "Placement Success" },
  { value: "15+", label: "States Reached" },
];

const metrics = [
  {
    value: 10000,
    suffix: "+",
    label: "Candidates Trained",
    description: "Youth equipped with practical employability skills",
    icon: GraduationCap,
  },
  {
    value: 85,
    suffix: "%",
    label: "Placement Success",
    description: "Learners moving toward meaningful career opportunities",
    icon: TrendingUp,
  },
  {
    value: 120,
    suffix: "+",
    label: "Villages Reached",
    description: "Community programs supporting rural development",
    icon: MapPin,
  },
  {
    value: 50,
    suffix: "+",
    label: "CSR & Institutional Partners",
    description: "Organizations collaborating for measurable impact",
    icon: Building2,
  },
];

const placements = [
  {
    name: "Riya Sharma",
    role: "Customer Support Executive",
    image: "/gettyimages-2164057693-612x612.jpg",
    story:
      "After completing communication, digital literacy, and workplace readiness training, Riya secured her first formal job as a Customer Support Executive. Today, she contributes to her family's financial stability while building confidence, professional experience, and a clear career path.",
  },
  {
    name: "Aman Khan",
    role: "Retail Operations Associate",
    image: "/indian-man-student-shirt-posed-outdoor_627829-2276.avif",
    story:
      "Aman developed interview confidence, digital fundamentals, and practical retail skills through structured training. With placement guidance and mentorship, he successfully transitioned from uncertainty to meaningful employment and now continues to grow in his professional journey.",
  },
  {
    name: "Neha Patil",
    role: "Data Entry Operator",
    image: "/f045cd4fcc0c57d0f2306e072160c3d0.jpg",
    story:
      "Through guided learning, hands-on computer training, and placement support, Neha strengthened her practical skills and workplace confidence. She secured a role aligned with her career aspirations and now looks toward greater independence and long-term professional growth.",
  },
];

const villageImpact = [
  {
    title: "SHG Capacity Building",
    description:
      "Supporting self-help groups with training, awareness, and livelihood-linked knowledge.",
    icon: UsersRound,
  },
  {
    title: "Village Skill Camps",
    description:
      "Bringing structured training and career awareness directly to rural communities.",
    icon: Landmark,
  },
  {
    title: "Livelihood Pathways",
    description:
      "Helping families access skills, confidence, and sustainable income opportunities.",
    icon: Sprout,
  },
];

const caseStudies = [
  {
    title: "From uncertainty to employment",
    before: "Limited exposure to workplace expectations and interview skills.",
    after: "Completed training, improved confidence, and secured an entry-level role.",
    image: "/Screenshot 2026-05-25 042225.png",
  },
  {
    title: "From isolated learning to community progress",
    before: "Rural learners lacked access to organized skill development programs.",
    after: "Village training sessions created awareness, participation, and career direction.",
    image: "/Screenshot 2026-05-25 042136.png",
  },
];

const gallery = [
  {
    src: "/img5 (1).jpg",
    title: "Skill Development Training",
    description:
      "Hands-on workshops helping youth strengthen employability, communication, and workplace readiness skills.",
  },
  {
    src: "/img4 (1).jpg",
    title: "Community Outreach Programs",
    description:
      "Village-level engagement activities promoting awareness, participation, and sustainable local development.",
  },
  {
    src: "/img2 (2).jpg",
    title: "Workforce Training & Production Excellence",
    description:
      "Hands-on manufacturing training developing technical expertise, discipline, and future employment opportunities.",
  },
];

const csrTrust = [
  "Outcome-focused program design",
  "Transparent reporting and documentation",
  "Community-first implementation model",
  "Scalable CSR partnership framework",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

function SectionReveal({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function CountUp({ value, suffix, start }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.round(latest);
    const formatted = rounded >= 1000 ? rounded.toLocaleString("en-IN") : rounded;
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (start) motionValue.set(value);
  }, [motionValue, start, value]);

  return <motion.span>{displayValue}</motion.span>;
}

function SectionHeading({ badge, title, highlight, text, icon: Icon }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.div
        variants={fadeUp}
        className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm"
      >
        {Icon ? <Icon size={15} strokeWidth={2.2} className="sm:size-[17px]" /> : null}
        {badge}
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]"
      >
        {title} {highlight ? <span className="text-[#B8952A]">{highlight}</span> : null}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700"
      >
        {text}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]"
      />
    </motion.div>
  );
}

function ImpactHeroSection() {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[68vh] md:min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_paj8qqpaj8qqpaj8.png"
          alt="AimSkills students and trainers"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/88 via-[#0D2B6B]/68 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-[#0D2B6B]/15" />

      <div className="pointer-events-none absolute -left-16 sm:-left-24 top-16 sm:top-20 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#2E6FD9]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-6 sm:right-10 top-20 sm:top-24 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[60vh] sm:min-h-[68vh] md:min-h-[72vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="grid gap-8 sm:gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16 lg:items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#F5E8C0] shadow-sm"
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#D4AF55]" />
              Measurable Social Impact
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Our <span className="text-[#D4AF55]">Impact</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-5 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-200"
            >
              Driving measurable change through skill development, career 
              placements, and sustainable community transformation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3"
            >
              <a
                href="#impact-stories"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#B8952A] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] active:scale-[0.98]"
              >
                View Success Stories
                <ArrowRight size={15} strokeWidth={2.4} className="sm:size-[16px]" />
              </a>

              <a
                href="#reports"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#1A4DA8] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9] active:scale-[0.98]"
              >
                Impact Reports
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row justify-center gap-2 sm:gap-2.5 lg:flex-col lg:w-[160px] xl:w-[170px] shrink-0"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/15 bg-[#1A4DA8]/40 px-2.5 sm:px-3 py-2 sm:py-2.5 lg:px-4 lg:py-3 flex-1 text-center lg:text-left backdrop-blur-sm transition-all duration-300 hover:bg-[#1A4DA8]/50 hover:border-white/25"
              >
                <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#D4AF55]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-white/70">
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

function ImpactMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.28 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FB] to-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Impact Dashboard"
          title="Numbers That Reflect"
          highlight="Real Outcomes"
          text="Every partnership supports training, confidence-building, livelihood pathways, and measurable community transformation."
          icon={TrendingUp}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.article
                key={metric.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-12 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#0D2B6B] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                      <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 md:mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A4DA8]">
                    <CountUp
                      value={metric.value}
                      suffix={metric.suffix}
                      start={isInView}
                    />
                  </div>

                  <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#111827]">
                    {metric.label}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-500">
                    {metric.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function PlacementSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Placement Stories"
          title="Training That Leads to"
          highlight="Livelihoods"
          text="Our programs are designed to move learners from classroom readiness to real workplace opportunities."
          icon={BriefcaseBusiness}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-10 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {placements.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                  <div className="inline-flex rounded-full bg-[#B8952A] px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-extrabold text-white">
                    Placed Candidate
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0D2B6B]">
                  {item.name}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-[#1A4DA8]">
                  {item.role}
                </p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                  {item.story}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SHGAndVillageImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-1.5 sm:p-2 shadow-md"
        >
          <img
            src="/Gemini_Generated_Image_omh9psomh9psomh9.png"
            alt="Village and SHG impact"
            className="h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[540px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-1.5 sm:inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/55 via-transparent to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 rounded-2xl bg-white/95 p-3.5 sm:p-4 md:p-5 shadow-sm backdrop-blur-md">
            <p className="text-xs sm:text-sm font-extrabold text-[#0D2B6B]">
              Rural programs built around local needs
            </p>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">
              We work with communities to create skills, participation, and
              livelihood awareness.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm"
          >
            <HandHeart size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Village & SHG Impact
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]"
          >
            Strengthening Communities Through{" "}
            <span className="text-[#B8952A]">Local Action</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-700"
          >
            Our village and SHG programs connect training with grassroots
            realities, helping communities access knowledge, livelihood
            direction, and long-term resilience.
          </motion.p>

          <motion.div variants={stagger} className="mt-6 sm:mt-7 md:mt-8 grid gap-3 sm:gap-4">
            {villageImpact.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex size-10 sm:size-11 md:size-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                      <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0D2B6B]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfterCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transformation Studies"
          title="Before & After"
          highlight="Impact Stories"
          text="CSR impact becomes powerful when progress is visible. These studies show how structured intervention creates real change."
          icon={Quote}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-10 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 lg:grid-cols-2"
        >
          {caseStudies.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/65 via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D2B6B]">
                  {item.title}
                </h3>

                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F8F9FB] p-4 sm:p-5">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                      Before
                    </span>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">
                      {item.before}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#EEF3FC] p-4 sm:p-5">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#B8952A]">
                      After
                    </span>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-700">
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ImpactGallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px] bg-[#B8CCF0]/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-[#F5E8C0]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.05)_1px,transparent_0)] bg-[size:clamp(20px,3vw,28px)_clamp(20px,3vw,28px)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Field Gallery"
          title="Moments From"
          highlight="The Ground"
          text="Real stories of training, community engagement, and career transformation."
          icon={Image}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 sm:mt-12 lg:mt-14 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map((item) => (
            <motion.div
              key={item.src}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/50 shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/40 hover:border-[#B8CCF0]/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/70 via-[#0D2B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-white shadow-lg">
                    <Camera size={11} className="sm:size-[12px]" />
                    AimSkills
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0D2B6B] leading-tight group-hover:text-[#1A4DA8] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="h-1 w-6 sm:w-8 rounded-full bg-[#B8952A] group-hover:w-14 sm:group-hover:w-16 transition-all duration-500" />
                  <div className="h-1 w-1.5 sm:w-2 rounded-full bg-[#B8CCF0]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-12 lg:mt-14 text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-xl bg-white border-2 border-[#B8CCF0] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#1A4DA8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEF3FC] hover:border-[#1A4DA8] hover:shadow-lg"
          >
            View Full Gallery
            <ArrowRight size={15} className="sm:size-[17px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CSRTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 sm:gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] p-6 sm:p-8 md:p-10 lg:p-12 shadow-md"
        >
          <div className="pointer-events-none absolute -right-24 bottom-0 h-56 sm:h-64 md:h-72 w-56 sm:w-64 md:w-72 rounded-full bg-[#B8952A]/30 blur-3xl" />

          <div className="relative">
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md">
              <BadgeCheck size={15} strokeWidth={2.2} className="sm:size-[17px]" />
              CSR Credibility
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Built for Responsible CSR Partnerships
            </h2>

            <div className="mt-5 sm:mt-6 h-1 w-16 sm:w-20 rounded-full bg-[#D4AF55]" />

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 md:leading-8 text-slate-200">
              AimSkills helps organizations convert CSR intent into structured,
              transparent, and measurable community outcomes.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2"
        >
          {csrTrust.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
            >
              <CheckCircle2
                size={20}
                strokeWidth={2.3}
                className="text-[#B8952A] sm:size-[22px] md:size-[24px]"
              />
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
                {item}
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">
                Designed to support accountability, clarity, and long-term
                institutional trust.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] antialiased">
      <Navbar activePath="/impact" />

      <ImpactHeroSection />

      <SectionReveal id="impact-metrics">
        <ImpactMetricsSection />
      </SectionReveal>

      <SectionReveal id="placement-success">
        <PlacementSuccessSection />
      </SectionReveal>

      <SectionReveal id="village-impact">
        <SHGAndVillageImpactSection />
      </SectionReveal>

      <SectionReveal id="case-studies">
        <BeforeAfterCaseStudiesSection />
      </SectionReveal>

      <SectionReveal id="impact-gallery">
        <ImpactGallerySection />
      </SectionReveal>

      <SectionReveal id="csr-trust">
        <CSRTrustSection />
      </SectionReveal>

      <SectionReveal id="cta">
        <CTASection />
      </SectionReveal>

      <SectionReveal id="partners">
        <PartnersSection />
      </SectionReveal>

      <Footer />
    </main>
  );
}