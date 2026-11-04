// // src/components/contact/ContactInformationSection.jsx
// import { motion } from "framer-motion";
// import { ArrowUpRight, Building2, Clock, Mail, MapPin, Phone } from "lucide-react";


// const contactCards = [
//   {
//     title: "Office Location",
//     detail: "Aim Skills Education Trust, India",
//     subDetail: "Visit our headquarters",
//     href: "https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India",
//     icon: MapPin,
//     color: "from-[#EEF3FC] to-white",
//     iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
//     hoverIconBg: "group-hover:bg-[#1A4DA8] group-hover:text-white",
//     accent: "bg-[#1A4DA8]",
//   },
//   {
//     title: "Phone Number",
//     detail: "+91 72487 76407",
//     subDetail: "Mon-Sat, 9 AM - 6 PM IST",
//     href: "tel:+917248776407",
//     icon: Phone,
//     color: "from-[#F5E8C0]/30 to-white",
//     iconBg: "bg-[#F5E8C0] text-[#B8952A]",
//     hoverIconBg: "group-hover:bg-[#B8952A] group-hover:text-white",
//     accent: "bg-[#B8952A]",
//   },
//   {
//     title: "Email Address",
//     detail: "info@aimskills.in",
//     subDetail: "We reply within 24 hours",
//     href: "mailto:info@aimskills.in",
//     icon: Mail,
//     color: "from-emerald-50 to-white",
//     iconBg: "bg-emerald-50 text-emerald-600",
//     hoverIconBg: "group-hover:bg-emerald-600 group-hover:text-white",
//     accent: "bg-emerald-600",
//   },
// ];

// const sectionVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
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
//       duration: 0.62,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function ContactInformationSection() {
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
//         <motion.div
//           variants={itemVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <MapPin size={17} strokeWidth={2.2} />
//             Contact Information
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Reach Aim Skills Through{" "}
//             <span className="text-[#B8952A]">Any Channel</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Visit, call, or write to us. We are ready to support your training,
//             partnership, and social impact goals.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>
// {/* 
//         <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
//           <motion.div variants={sectionVariants} className="grid gap-5">
//             {contactCards.map((card) => {
//               const Icon = card.icon;

//               return (
//                 <motion.a
//                   key={card.title}
//                   href={card.href}
//                   variants={itemVariants}
//                   whileHover={{ y: -6, scale: 1.015 }}
//                   className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//                 >
//                   <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//                   <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//                   <div className="relative flex items-start gap-4">
//                     <div className="flex size-13 h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                       <Icon size={25} strokeWidth={2.2} />
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-extrabold text-[#0D2B6B]">
//                         {card.title}
//                       </h3>
//                       <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                         {card.detail}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.a>
//               );
//             })}
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
//           >
//             <div className="relative h-[420px] overflow-hidden rounded-2xl bg-[#F8F9FB]">
//               <iframe
//                 title="AimSkills location map"
//                 src="https://www.google.com/maps?q=India&output=embed"
//                 className="h-full w-full border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />

//               <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#B8CCF0]/50" />
//             </div>
//           </motion.div>
//         </div> */}
//          <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
//           {/* Contact Cards Column - Enhanced */}
//           <motion.div variants={sectionVariants} className="grid gap-4">
//             {contactCards.map((card, index) => {
//               const Icon = card.icon;

//               return (
//                 <motion.a
//                   key={card.title}
//                   href={card.href}
//                   variants={itemVariants}
//                   whileHover={{ y: -4, scale: 1.01 }}
//                   className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${card.color} p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#D4AF55]/50 sm:p-6`}
//                 >
//                   {/* Decorative gradient blobs */}
//                   <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#B8CCF0]/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-80" />
//                   <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125" />
                  
//                   {/* Subtle accent line */}
//                   <div className={`absolute left-0 top-0 h-full w-1 ${card.accent} opacity-0 transition-all duration-300 group-hover:opacity-100`} />

//                   <div className="relative flex items-start gap-5">
//                     <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${card.hoverIconBg}`}>
//                       <Icon size={24} strokeWidth={2} />
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-lg font-bold text-[#0D2B6B]">
//                           {card.title}
//                         </h3>
//                         <ArrowUpRight size={16} strokeWidth={2.4} className="text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#1A4DA8]" />
//                       </div>
                      
//                       <p className="mt-2 text-base font-semibold text-slate-700">
//                         {card.detail}
//                       </p>
                      
//                       <div className="mt-2 flex items-center gap-2">
//                         <div className={`h-1 w-1 rounded-full ${card.accent}`} />
//                         <p className="text-sm font-medium text-slate-500">
//                           {card.subDetail}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.a>
//               );
//             })}

//             {/* Quick Response Badge */}
//             <motion.div
//               variants={itemVariants}
//               className="rounded-2xl border border-[#B8CCF0]/50 bg-gradient-to-r from-[#EEF3FC] to-white p-5 shadow-sm"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#B8CCF0]/50">
//                   <Clock size={22} strokeWidth={2.2} className="text-[#1A4DA8]" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-[#0D2B6B]">
//                     Quick Response Promise
//                   </h4>
//                   <p className="mt-1 text-sm text-slate-600">
//                     We respond to all inquiries within <span className="font-bold text-[#1A4DA8]">24 hours</span>
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Map Column - Enhanced */}
//           <motion.div
//             variants={itemVariants}
//             className="group overflow-hidden rounded-3xl border border-[#B8CCF0]/50 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
//           >
//             {/* Map Header */}
//             <div className="border-b border-slate-200 bg-gradient-to-r from-[#EEF3FC] to-white px-5 py-4 sm:px-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="flex size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white shadow-md">
//                     <MapPin size={18} strokeWidth={2.2} />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-bold text-[#0D2B6B] sm:text-lg">
//                       Our Headquarters
//                     </h3>
//                     <p className="text-sm text-slate-500">
//                       Aim Skills Education Trust, Noida, Uttar Pradesh 201301, India
//                     </p>
//                   </div>
//                 </div>
                
//                 <a
//                   href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#1A4DA8] shadow-sm transition-all duration-200 hover:bg-[#EEF3FC] hover:border-[#1A4DA8]/30"
//                 >
//                   View Larger
//                   <ArrowUpRight size={12} strokeWidth={2.4} />
//                 </a>
//               </div>
//             </div>

//             {/* Map Container */}
//             <div className="relative overflow-hidden">
//               <div className="relative h-[400px] sm:h-[450px]">
//                 <iframe
//                   title="AimSkills location map"
//                   src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh+201301,+India&output=embed"
//                   className="h-full w-full border-0 transition-all duration-700"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   allowFullScreen
//                 />
                
//                 {/* Map overlay effects */}
//                 <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
//                 <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />
                
//                 {/* Map interaction hint */}
//                 <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                   <div className="rounded-xl bg-white/90 px-4 py-2 text-sm font-bold text-[#0D2B6B] shadow-lg backdrop-blur-sm">
//                     Scroll to zoom • Drag to pan
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Map Footer */}
//             <div className="border-t border-slate-200 bg-white px-5 py-3 sm:px-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Building2 size={16} strokeWidth={2} className="text-slate-400" />
//                   <span className="text-sm font-medium text-slate-600">
//                     India Operations
//                   </span>
//                 </div>
                
//                 <a
//                   //href="https://maps.google.com"
//                   href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 text-sm font-bold text-[#1A4DA8] transition-colors hover:text-[#2E6FD9]"
//                 >
//                   Get Directions
//                   <ArrowUpRight size={14} strokeWidth={2.4} />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/contact/ContactInformationSection.jsx
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Clock, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Office Location",
    detail: "Aim Skills Education Trust, India",
    subDetail: "Visit our headquarters",
    href: "https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India",
    icon: MapPin,
    color: "from-[#EEF3FC] to-white",
    iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
    hoverIconBg: "group-hover:bg-[#1A4DA8] group-hover:text-white",
    accent: "bg-[#1A4DA8]",
  },
  {
    title: "Phone Number",
    detail: "+91 72487 76407",
    subDetail: "Mon-Sat, 9 AM - 6 PM IST",
    href: "tel:+917248776407",
    icon: Phone,
    color: "from-[#F5E8C0]/30 to-white",
    iconBg: "bg-[#F5E8C0] text-[#B8952A]",
    hoverIconBg: "group-hover:bg-[#B8952A] group-hover:text-white",
    accent: "bg-[#B8952A]",
  },
  {
    title: "Email Address",
    detail: "Aimskillstrust@gmail.com",
    subDetail: "We reply within 24 hours",
    href: "mailto:Aimskillstrust@gmail.com",
    icon: Mail,
    color: "from-emerald-50 to-white",
    iconBg: "bg-emerald-50 text-emerald-600",
    hoverIconBg: "group-hover:bg-emerald-600 group-hover:text-white",
    accent: "bg-emerald-600",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
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
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactInformationSection() {
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
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <MapPin size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Contact Information
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Reach Aim Skills Through{" "}
            <span className="text-[#B8952A]">Any Channel</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Visit, call, or write to us. We are ready to support your training,
            partnership, and social impact goals.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Content Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Left Column: Contact Cards ── */}
          <motion.div variants={sectionVariants} className="grid gap-3 sm:gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${card.color} p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#D4AF55]/50`}
                >
                  {/* Decorative gradient blobs */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-24 sm:h-28 w-24 sm:w-28 rounded-full bg-[#B8CCF0]/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute -bottom-14 left-8 h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125" />
                  
                  {/* Subtle accent line */}
                  <div className={`absolute left-0 top-0 h-full w-1 ${card.accent} opacity-0 transition-all duration-300 group-hover:opacity-100`} />

                  <div className="relative flex items-start gap-4 sm:gap-5">
                    <div className={`flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${card.hoverIconBg}`}>
                      <Icon size={22} strokeWidth={2} className="sm:size-[24px]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-[#0D2B6B]">
                          {card.title}
                        </h3>
                        <ArrowUpRight size={14} strokeWidth={2.4} className="text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#1A4DA8] sm:size-[16px]" />
                      </div>
                      
                      <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-semibold text-slate-700">
                        {card.detail}
                      </p>
                      
                      <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                        <div className={`h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full ${card.accent}`} />
                        <p className="text-xs sm:text-sm font-medium text-slate-500">
                          {card.subDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Quick Response Badge */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-[#B8CCF0]/50 bg-gradient-to-r from-[#EEF3FC] to-white p-4 sm:p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#B8CCF0]/50">
                  <Clock size={20} strokeWidth={2.2} className="text-[#1A4DA8] sm:size-[22px]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0D2B6B]">
                    Quick Response Promise
                  </h4>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-600">
                    We respond to all inquiries within <span className="font-bold text-[#1A4DA8]">24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Map ── */}
          <motion.div
            variants={itemVariants}
            className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-[#B8CCF0]/50 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {/* Map Header */}
            <div className="border-b border-slate-200 bg-gradient-to-r from-[#EEF3FC] to-white px-4 sm:px-5 md:px-6 py-3.5 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white shadow-md">
                    <MapPin size={16} strokeWidth={2.2} className="sm:size-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0D2B6B]">
                      Our Headquarters
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-500">
                      Aim Skills Education Trust, Noida, Uttar Pradesh 201301, India
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1 sm:gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-[#1A4DA8] shadow-sm transition-all duration-200 hover:bg-[#EEF3FC] hover:border-[#1A4DA8]/30"
                >
                  View Larger
                  <ArrowUpRight size={11} strokeWidth={2.4} className="sm:size-[12px]" />
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative overflow-hidden">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <iframe
                  title="AimSkills location map"
                  src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh+201301,+India&output=embed"
                  className="h-full w-full border-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                
                {/* Map overlay effects */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/30 to-transparent" />
                
                {/* Map interaction hint */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-xl bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#0D2B6B] shadow-lg backdrop-blur-sm">
                    Scroll to zoom • Drag to pan
                  </div>
                </div>
              </div>
            </div>

            {/* Map Footer */}
            <div className="border-t border-slate-200 bg-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Building2 size={14} strokeWidth={2} className="text-slate-400 sm:size-[16px]" />
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    India Operations
                  </span>
                </div>
                
                <a
                  href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-[#1A4DA8] transition-colors hover:text-[#2E6FD9]"
                >
                  Get Directions
                  <ArrowUpRight size={12} strokeWidth={2.4} className="sm:size-[14px]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}