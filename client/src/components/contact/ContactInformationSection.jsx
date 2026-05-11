// src/components/contact/ContactInformationSection.jsx
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Clock, Mail, MapPin, Phone } from "lucide-react";

// const contactCards = [
//   {
//     title: "Office Location",
//     detail: "AimSkills Education Trust, India",
//     href: "https://maps.google.com",
//     icon: MapPin,
//   },
//   {
//     title: "Phone Number",
//     detail: "+91 84829 69631",
//     href: "tel:+918482969631",
//     icon: Phone,
//   },
//   {
//     title: "Email Address",
//     detail: "contact@aimskills.org",
//     href: "mailto:contact@aimskills.org",
//     icon: Mail,
//   },
// ];
const contactCards = [
  {
    title: "Office Location",
    detail: "AimSkills Education Trust, India",
    subDetail: "Visit our headquarters",
    href: "https://maps.google.com",
    icon: MapPin,
    color: "from-[#EEF3FC] to-white",
    iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
    hoverIconBg: "group-hover:bg-[#1A4DA8] group-hover:text-white",
    accent: "bg-[#1A4DA8]",
  },
  {
    title: "Phone Number",
    detail: "+91 84829 69631",
    subDetail: "Mon-Sat, 9 AM - 6 PM IST",
    href: "tel:+918482969631",
    icon: Phone,
    color: "from-[#F5E8C0]/30 to-white",
    iconBg: "bg-[#F5E8C0] text-[#B8952A]",
    hoverIconBg: "group-hover:bg-[#B8952A] group-hover:text-white",
    accent: "bg-[#B8952A]",
  },
  {
    title: "Email Address",
    detail: "contact@aimskills.org",
    subDetail: "We reply within 24 hours",
    href: "mailto:contact@aimskills.org",
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
    <section className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <MapPin size={17} strokeWidth={2.2} />
            Contact Information
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Reach AimSkills Through{" "}
            <span className="text-[#B8952A]">Any Channel</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Visit, call, or write to us. We are ready to support your training,
            partnership, and social impact goals.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>
{/* 
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={sectionVariants} className="grid gap-5">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex size-13 h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                      <Icon size={25} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#0D2B6B]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
          >
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-[#F8F9FB]">
              <iframe
                title="AimSkills location map"
                src="https://www.google.com/maps?q=India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#B8CCF0]/50" />
            </div>
          </motion.div>
        </div> */}
         <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Cards Column - Enhanced */}
          <motion.div variants={sectionVariants} className="grid gap-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${card.color} p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#D4AF55]/50 sm:p-6`}
                >
                  {/* Decorative gradient blobs */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#B8CCF0]/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125" />
                  
                  {/* Subtle accent line */}
                  <div className={`absolute left-0 top-0 h-full w-1 ${card.accent} opacity-0 transition-all duration-300 group-hover:opacity-100`} />

                  <div className="relative flex items-start gap-5">
                    <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${card.hoverIconBg}`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#0D2B6B]">
                          {card.title}
                        </h3>
                        <ArrowUpRight size={16} strokeWidth={2.4} className="text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#1A4DA8]" />
                      </div>
                      
                      <p className="mt-2 text-base font-semibold text-slate-700">
                        {card.detail}
                      </p>
                      
                      <div className="mt-2 flex items-center gap-2">
                        <div className={`h-1 w-1 rounded-full ${card.accent}`} />
                        <p className="text-sm font-medium text-slate-500">
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
              className="rounded-2xl border border-[#B8CCF0]/50 bg-gradient-to-r from-[#EEF3FC] to-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#B8CCF0]/50">
                  <Clock size={22} strokeWidth={2.2} className="text-[#1A4DA8]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0D2B6B]">
                    Quick Response Promise
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    We respond to all inquiries within <span className="font-bold text-[#1A4DA8]">24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Column - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="group overflow-hidden rounded-3xl border border-[#B8CCF0]/50 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {/* Map Header */}
            <div className="border-b border-slate-200 bg-gradient-to-r from-[#EEF3FC] to-white px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#1A4DA8] text-white shadow-md">
                    <MapPin size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0D2B6B] sm:text-lg">
                      Our Headquarters
                    </h3>
                    <p className="text-sm text-slate-500">
                      AimSkills Education Trust, India
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#1A4DA8] shadow-sm transition-all duration-200 hover:bg-[#EEF3FC] hover:border-[#1A4DA8]/30"
                >
                  View Larger
                  <ArrowUpRight size={12} strokeWidth={2.4} />
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative overflow-hidden">
              <div className="relative h-[400px] sm:h-[450px]">
                <iframe
                  title="AimSkills location map"
                  src="https://www.google.com/maps?q=India&output=embed"
                  className="h-full w-full border-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                
                {/* Map overlay effects */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />
                
                {/* Map interaction hint */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-xl bg-white/90 px-4 py-2 text-sm font-bold text-[#0D2B6B] shadow-lg backdrop-blur-sm">
                    Scroll to zoom • Drag to pan
                  </div>
                </div>
              </div>
            </div>

            {/* Map Footer */}
            <div className="border-t border-slate-200 bg-white px-5 py-3 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 size={16} strokeWidth={2} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">
                    India Operations
                  </span>
                </div>
                
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-bold text-[#1A4DA8] transition-colors hover:text-[#2E6FD9]"
                >
                  Get Directions
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
// src/components/contact/ContactInformationSection.jsx
// import { motion } from "framer-motion";
// import { 
//   ArrowUpRight, 
//   Clock, 
//   Mail, 
//   MapPin, 
//   Phone, 
//   PhoneCall,
//   Building2 
// } from "lucide-react";

// const contactCards = [
//   {
//     title: "Office Location",
//     detail: "AimSkills Education Trust, India",
//     subDetail: "Visit our headquarters",
//     href: "https://maps.google.com",
//     icon: MapPin,
//     color: "from-[#EEF3FC] to-white",
//     iconBg: "bg-[#EEF3FC] text-[#1A4DA8]",
//     hoverIconBg: "group-hover:bg-[#1A4DA8] group-hover:text-white",
//     accent: "bg-[#1A4DA8]",
//   },
//   {
//     title: "Phone Number",
//     detail: "+91 84829 69631",
//     subDetail: "Mon-Sat, 9 AM - 6 PM IST",
//     href: "tel:+918482969631",
//     icon: Phone,
//     color: "from-[#F5E8C0]/30 to-white",
//     iconBg: "bg-[#F5E8C0] text-[#B8952A]",
//     hoverIconBg: "group-hover:bg-[#B8952A] group-hover:text-white",
//     accent: "bg-[#B8952A]",
//   },
//   {
//     title: "Email Address",
//     detail: "contact@aimskills.org",
//     subDetail: "We reply within 24 hours",
//     href: "mailto:contact@aimskills.org",
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
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function ContactInformationSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       {/* Premium background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#B8CCF0/6_1px,transparent_1px),linear-gradient(to_bottom,#B8CCF0/6_1px,transparent_1px)] bg-[size:64px_64px]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,204,240,0.08)_0%,transparent_50%)]" />
//       </div>
      
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/40 blur-3xl" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E6FD9]/3 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.16 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         {/* Enhanced Header */}
//         <motion.div
//           variants={itemVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-5 py-2.5 text-sm font-bold text-[#1A4DA8] shadow-sm ring-1 ring-[#B8CCF0]/30">
//             <span className="flex size-2 rounded-full bg-[#1A4DA8] animate-pulse" />
//             <PhoneCall size={16} strokeWidth={2.2} />
//             Available for Inquiries
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Reach Us Through{" "}
//             <span className="relative inline-block text-[#B8952A]">
//               Any Channel
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
//                 <path d="M0,4 Q50,8 100,4" fill="none" stroke="#D4AF55" strokeWidth="2" opacity="0.4" />
//               </svg>
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
//             Visit, call, or write to us. We are ready to support your training,
//             partnership, and social impact goals.
//           </p>

//           <div className="mx-auto mt-8 flex items-center justify-center gap-3">
//             <div className="h-1 w-8 rounded-full bg-[#B8952A]" />
//             <div className="size-1.5 rounded-full bg-[#B8952A]/40" />
//             <div className="h-1 w-8 rounded-full bg-[#B8952A]" />
//           </div>
//         </motion.div>

//         {/* Main content - Same layout, enhanced styling */}
//         <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
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
//                       AimSkills Education Trust, India
//                     </p>
//                   </div>
//                 </div>
                
//                 <a
//                   href="https://maps.google.com"
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
//                   src="https://www.google.com/maps?q=India&output=embed"
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
//                   href="https://maps.google.com"
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