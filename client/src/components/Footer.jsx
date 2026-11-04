
// import { motion } from "framer-motion";
// import {
//   HeartHandshake,
//   Mail,
//   MapPin,
//   Phone,
//   Users,
//   FileText,
//   Shield,
//   Cookie,
//   Heart,
//   // ExternalLink,
//   MessageCircle,
// } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Programs", href: "/programs" },
//   { label: "Impact", href: "/impact" },
// ];

// const resourceLinks = [
//   { label: "Gallery", href: "/gallery" },
//   { label: "Blogs", href: "/blogs" },
// ];

// const involvedLinks = [
//   { label: "Donate", href: "/donate" },
//   { label: "Volunteer", href: "/volunteer" },
//   { label: "Contact Us", href: "/contact" },
// ];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/", icon: Shield },
//   { label: "Terms of Service", href: "/", icon: FileText },
//   { label: "Cookie Policy", href: "/", icon: Cookie },
//   { label: "Refund Policy", href: "/", icon: FileText },
// ];

// const connectLinks = [
//   { 
//     href: "https://www.facebook.com/aimskillsedu", 
//     label: "Facebook", 
//     icon: FaFacebook,
//     color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
//   },
//   { 
//     href: "https://www.instagram.com/aimskillsedu", 
//     label: "Instagram", 
//     icon: FaInstagram,
//     color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
//   },
//   { 
//     href: "https://twitter.com/Aimskillsedu", 
//     label: "Twitter", 
//     icon: FaXTwitter,
//     color: "hover:bg-black hover:border-black",
//   },
//   { 
//     href: "https://www.linkedin.com/company/aimskillsedu", 
//     label: "LinkedIn", 
//     icon: FaLinkedin,
//     color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
//   },
//   { 
//     href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A", 
//     label: "YouTube", 
//     icon: FaYoutube,
//     color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
//   },
// ];

// const footerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 18,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function FooterLink({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
//     >
//       {children}
//     </a>
//   );
// }

// function FooterColumn({ title, children }) {
//   return (
//     <motion.div variants={itemVariants}>
//       <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
//         {title}
//       </h3>
//       <div className="mt-5 flex flex-col gap-3">{children}</div>
//     </motion.div>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#0D2B6B] text-white">
//       {/* Ambient background decorations */}
//       <div className="pointer-events-none absolute -left-28 top-15 h-80 w-80 rounded-full bg-[#2E6FD9]/25 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#B8952A]/25 blur-3xl" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A4DA8]/15 blur-3xl" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:28px_28px] opacity-20" />

//       <motion.div
//         variants={footerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.16,
//         }}
//         className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16"
//       >
//         {/* Top CTA Card */}
//         <motion.div
//           variants={itemVariants}
//           className="grid gap-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm backdrop-blur-sm sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-8"
//         >
//           <div className="text-center lg:text-left">
//             <a href="/" className="inline-flex items-center gap-3">
//               <span className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white p-1.5">
//                 <img 
//                   src="/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg" 
//                   alt="AimSkills Logo"
//                   className="h-full w-full rounded-lg object-contain"
//                 />
//               </span>

//               <span>
//                 <span className="block text-3xl font-extrabold tracking-tight text-white">
//                   Aim<span className="text-[#D4AF55]"> Skills</span>
//                 </span>
//                 <span className="mt-1 block text-xs font-bold uppercase tracking-[0.22em] text-[#B8CCF0]">
//                   Building futures
//                 </span>
//               </span>
//             </a>

//             <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-7 text-white/70 lg:mx-0">
//               Empowering youth with skills, education, and opportunities to
//               build a better future. Registered under AimSkills Education Trust.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
//             <motion.a
//               href="/donate"
//               whileHover={{
//                 y: -2,
//                 scale: 1.03,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#D4AF55]"
//             >
//               <HeartHandshake size={20} strokeWidth={2.4} />
//               Donate Now
//             </motion.a>

//             <motion.a
//               href="/volunteer"
//               whileHover={{
//                 y: -2,
//                 scale: 1.03,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-7 py-4 text-base font-bold text-white shadow-md shadow-black/10 transition-colors hover:bg-[#2E6FD9]"
//             >
//               <Users size={20} strokeWidth={2.4} />
//               Become a Volunteer
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Connect With Us Section */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
//         >
//           <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex size-10 items-center justify-center rounded-xl bg-[#B8952A]/20">
//                 <MessageCircle size={20} className="text-[#D4AF55]" strokeWidth={2.2} />
//               </div>
//               <div>
//                 <h3 className="text-lg font-extrabold text-white">
//                   Connect With Us
//                 </h3>
//                 <p className="text-sm font-medium text-white/60">
//                   Follow us on social media for updates
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center justify-center gap-3">
//               {connectLinks.map((link) => {
//                 const Icon = link.icon;
//                 return (
//                   <motion.a
//                     key={link.label}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={link.label}
//                     whileHover={{ y: -3, scale: 1.08 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ${link.color} hover:shadow-lg hover:shadow-black/20`}
//                   >
//                     <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
//                     <span className="hidden sm:inline">{link.label}</span>
//                     {/* <ExternalLink size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-70" /> */}
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Links Grid */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-14 grid gap-10 border-t border-white/10 pt-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5"
//         >
//           <FooterColumn title="Quick Links">
//             {quickLinks.map((link) => (
//               <FooterLink key={link.label} href={link.href}>
//                 {link.label}
//               </FooterLink>
//             ))}
//           </FooterColumn>

//           <FooterColumn title="Resources">
//             {resourceLinks.map((link) => (
//               <FooterLink key={link.label} href={link.href}>
//                 {link.label}
//               </FooterLink>
//             ))}
//           </FooterColumn>

//           <FooterColumn title="Get Involved">
//             {involvedLinks.map((link) => (
//               <FooterLink key={link.label} href={link.href}>
//                 {link.label}
//               </FooterLink>
//             ))}
//           </FooterColumn>

//           <FooterColumn title="Legal">
//             {legalLinks.map((link) => {
//               const Icon = link.icon;
//               return (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white hover:underline underline-offset-4 sm:justify-start"
//                 >
//                   <Icon size={14} strokeWidth={2} className="text-[#D4AF55]" />
//                   {link.label}
//                 </a>
//               );
//             })}
//           </FooterColumn>

//           <FooterColumn title="Contact Info">
//             <a
//               href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-start justify-center gap-2 text-sm font-medium leading-6 text-white/70 transition-colors hover:text-white sm:justify-start"
//             >
//               <MapPin
//                 size={17}
//                 strokeWidth={2.2}
//                 className="mt-0.5 shrink-0 text-[#D4AF55]"
//               />
//               Aim Skills Education Trust, Noida, Uttar Pradesh 201301, India
//             </a>

//             <a
//               href="mailto:info@aimskills.in"
//               className="flex items-center justify-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white sm:justify-start"
//             >
//               <Mail
//                 size={17}
//                 strokeWidth={2.2}
//                 className="shrink-0 text-[#D4AF55]"
//               />
//               info@aimskills.in
//             </a>

//             <a
//               href="tel:+917248776407"
//               className="flex items-center justify-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white sm:justify-start"
//             >
//               <Phone
//                 size={17}
//                 strokeWidth={2.2}
//                 className="shrink-0 text-[#D4AF55]"
//               />
//               +91 72487 76407
//             </a>
//           </FooterColumn>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row"
//         >
//           <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
//             <p className="text-sm font-medium text-white/60">
//               © {new Date().getFullYear()} Aim Skills Education Trust. All rights reserved.
//             </p>
//             <span className="hidden text-white/40 sm:inline">•</span>
//             <p className="inline-flex items-center gap-1 text-sm font-medium text-white/50">
//               Made with <Heart size={14} className="fill-red-500 text-red-500" /> by <span className="font-semibold text-white/70">Abhishek</span>
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <a
//               href="/"
//               className="text-sm font-medium text-white/60 transition-colors hover:text-white"
//             >
//               Privacy Policy
//             </a>
//             <span className="text-white/30">•</span>
//             <a
//               href="/"
//               className="text-sm font-medium text-white/60 transition-colors hover:text-white"
//             >
//               Terms of Service
//             </a>
//             <span className="text-white/30">•</span>
//             <a
//               href="/"
//               className="text-sm font-medium text-white/60 transition-colors hover:text-white"
//             >
//               Cookie Policy
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// }

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Users,
  FileText,
  Shield,
  Cookie,
  Heart,
  MessageCircle,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
];

const resourceLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
];

const involvedLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/", icon: Shield },
  { label: "Terms of Service", href: "/", icon: FileText },
  { label: "Cookie Policy", href: "/", icon: Cookie },
  { label: "Refund Policy", href: "/", icon: FileText },
];

const connectLinks = [
  { 
    href: "https://www.facebook.com/aimskillsedu", 
    label: "Facebook", 
    icon: FaFacebook,
    color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  { 
    href: "https://www.instagram.com/aimskillsedu", 
    label: "Instagram", 
    icon: FaInstagram,
    color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
  },
  { 
    href: "https://twitter.com/Aimskillsedu", 
    label: "Twitter", 
    icon: FaXTwitter,
    color: "hover:bg-black hover:border-black",
  },
  { 
    href: "https://www.linkedin.com/company/aimskillsedu", 
    label: "LinkedIn", 
    icon: FaLinkedin,
    color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  { 
    href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A", 
    label: "YouTube", 
    icon: FaYoutube,
    color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
];

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-xs sm:text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-white">
        {title}
      </h3>
      <div className="mt-4 sm:mt-5 flex flex-col gap-2.5 sm:gap-3">{children}</div>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D2B6B] text-white">
      {/* Ambient background decorations - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-15 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#2E6FD9]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8952A]/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 sm:h-84 md:h-96 w-72 sm:w-84 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A4DA8]/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:clamp(20px,3vw,28px)_clamp(20px,3vw,28px)] opacity-20" />

      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.16,
        }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16"
      >
        {/* Top CTA Card */}
        <motion.div
          variants={itemVariants}
          className="grid gap-6 sm:gap-8 lg:gap-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="text-center lg:text-left">
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-2.5 sm:gap-3">
              <span className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl border border-white/15 bg-white p-1.5">
                <img 
                  src="/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg" 
                  alt="AimSkills Logo"
                  className="h-full w-full rounded-lg object-contain"
                />
              </span>

              <span>
                <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Aim<span className="text-[#D4AF55]"> Skills</span>
                </span>
                <span className="mt-0.5 sm:mt-1 block text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#B8CCF0]">
                  Building futures
                </span>
              </span>
            </a>

            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base font-medium leading-6 sm:leading-7 text-white/70 lg:mx-0">
              Empowering youth with skills, education, and opportunities to
              build a better future. Registered under AimSkills Education Trust.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 sm:flex-row lg:justify-end">
            <motion.a
              href="/donate"
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#B8952A] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#D4AF55]"
            >
              <HeartHandshake size={18} strokeWidth={2.4} className="sm:size-[20px]" />
              Donate Now
            </motion.a>

            <motion.a
              href="/volunteer"
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#1A4DA8] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold text-white shadow-md shadow-black/10 transition-colors hover:bg-[#2E6FD9]"
            >
              <Users size={18} strokeWidth={2.4} className="sm:size-[20px]" />
              Become a Volunteer
            </motion.a>
          </div>
        </motion.div>

        {/* Connect With Us Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-[#B8952A]/20">
                <MessageCircle size={18} className="text-[#D4AF55] sm:size-[20px]" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Connect With Us
                </h3>
                <p className="text-xs sm:text-sm font-medium text-white/60">
                  Follow us on social media for updates
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-2 sm:gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 ${link.color} hover:shadow-lg hover:shadow-black/20`}
                  >
                    <Icon size={16} className="transition-transform duration-300 group-hover:scale-110 sm:size-[18px]" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 lg:mt-14 grid gap-8 sm:gap-10 border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 sm:text-left"
        >
          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {resourceLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get Involved">
            {involvedLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white hover:underline underline-offset-4 sm:justify-start"
                >
                  <Icon size={13} strokeWidth={2} className="text-[#D4AF55] sm:size-[14px]" />
                  {link.label}
                </a>
              );
            })}
          </FooterColumn>

          <FooterColumn title="Contact Info">
            <a
              href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh+201301,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-white/70 transition-colors hover:text-white sm:justify-start"
            >
              <MapPin
                size={15}
                strokeWidth={2.2}
                className="mt-0.5 shrink-0 text-[#D4AF55] sm:size-[17px]"
              />
              Aim Skills Education Trust, Noida, Uttar Pradesh 201301, India
            </a>

            <a
              href="mailto:Aimskillstrust@gmail.com"
              className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/70 transition-colors hover:text-white sm:justify-start"
            >
              <Mail
                size={15}
                strokeWidth={2.2}
                className="shrink-0 text-[#D4AF55] sm:size-[17px]"
              />
              Aimskillstrust@gmail.com
            </a>

            <a
              href="tel:+917248776407"
              className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/70 transition-colors hover:text-white sm:justify-start"
            >
              <Phone
                size={15}
                strokeWidth={2.2}
                className="shrink-0 text-[#D4AF55] sm:size-[17px]"
              />
              +91 72487 76407
            </a>
          </FooterColumn>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-6 sm:pt-8 text-center sm:flex-row"
        >
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
            <p className="text-xs sm:text-sm font-medium text-white/60">
              © {new Date().getFullYear()} Aim Skills Education Trust. All rights reserved.
            </p>
            {/* <span className="hidden text-white/40 sm:inline">•</span> */}
            {/* <p className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-white/50">
              Made with <Heart size={12} className="fill-red-500 text-red-500 sm:size-[14px]" /> by <span className="font-semibold text-white/70">Abhishek</span>
            </p> */}
          </div>
          <div className="flex items-center">
            {/* <a
              href="/"
              className="text-xs sm:text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <span className="text-white/30">•</span>
            <a
              href="/"
              className="text-xs sm:text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <span className="text-white/30">•</span>
            <a
              href="/"
              className="text-xs sm:text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Cookie Policy
            </a> */}
             <p className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-white/50">
              Made with <Heart size={12} className="fill-red-500 text-red-500 sm:size-[14px]" /> by <span className="font-semibold text-white/70">Abhishek</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}