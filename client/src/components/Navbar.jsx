
// import { useEffect, useState, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ChevronDown,
//   FileBoxIcon,
//   FishingHookIcon,
//   HeartHandshake,
//   Image,
//   ImageOffIcon,
//   Import,
//   Loader2,
//   Loader2Icon,
//   Mail,
//   Menu,
//   Newspaper,
//   Phone,
//   UserRoundPlus,
//   Users,
//   X,
//   ArrowUpRight,
//   BriefcaseBusiness,
//   GraduationCap,
// } from "lucide-react";
// import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube} from "react-icons/fa";
// /* ─── Design Tokens ───────────────────────────────────────────────────────
//    Navy Deep : #0D2B6B   Royal Blue: #1A4DA8   Vivid Blue: #2E6FD9
//    Sky Tint  : #B8CCF0   Ice Wash  : #EEF3FC
//    Aim Gold  : #B8952A   Warm Gold : #D4AF55   Gold Tint : #F5E8C0
//    Charcoal  : #111827   Off White : #F8F9FB
// ──────────────────────────────────────────────────────────────────────────── */

// const NAV_ITEMS = [
//   { label: "About Us",         href: "/about" },
//   { label: "Our Programs",     href: "/programs" },
//   { label: "Impact",           href: "/impact" },
//   { label: "CSR Partnerships", href: "/csr" },
// ];

// const RESOURCE_ITEMS = [
//   {
//     label: "Gallery",
//     href: "/gallery",
//     icon: Image,
//     description: "Moments from our learning spaces",
//     tag: "Photos",
//   },
//   {
//     label: "Blogs",
//     href: "/blogs",
//     icon: Newspaper,
//     description: "Stories, updates, and field notes",
//     tag: "Latest",
//   },
// ];

// const INVOLVED_ITEMS = [
//   {
//     label: "Donate",
//     href: "/donate",
//     icon: HeartHandshake,
//     description: "Fund a child's skill journey",
//     cta: true,
//   },
//   {
//     label: "Volunteer",
//     href: "/volunteer",
//     icon: UserRoundPlus,
//     description: "Share your time and expertise",
//   },
//   {
//     label: "Become Training Partner",
//     href: "/partner",
//     icon: BriefcaseBusiness,
//     description: "Collaborate for skill development programs",
//   },
//   {
//     label: "Hire Trained Candidates",
//     href: "/hire",
//     icon: GraduationCap,
//     description: "Access our pool of skilled professionals",
//   },
//   {
//     label: "Contact Us",
//     href: "/contact",
//     icon: Phone,
//     description: "Start a conversation with us",
//   },
// ];

// /* ─── Dropdown ─────────────────────────────────────────────────────────── */
// function Dropdown({ label, items, activePath, mobile = false }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);
//   const isActive = items.some((i) => i.href === activePath);

//   useEffect(() => {
//     if (mobile) return;
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [mobile]);

//   /* ── Mobile ── */
//   if (mobile) {
//     return (
//       <div>
//         <button
//           type="button"
//           onClick={() => setOpen((v) => !v)}
//           aria-expanded={open}
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "12px 16px",
//             borderRadius: 14,
//             border: "none",
//             background: isActive ? "#EEF3FC" : "transparent",
//             color: isActive ? "#0D2B6B" : "#111827",
//             fontSize: 15,
//             fontWeight: 600,
//             cursor: "pointer",
//             transition: "background 0.2s",
//             fontFamily: "inherit",
//           }}
//         >
//           {label}
//           <ChevronDown
//             size={17}
//             style={{
//               transition: "transform 0.25s",
//               transform: open ? "rotate(180deg)" : "rotate(0deg)",
//               color: "#1A4DA8",
//             }}
//           />
//         </button>

//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
//               style={{ overflow: "hidden", marginTop: 4 }}
//             >
//               <div
//                 style={{
//                   background: "#F0F4FD",
//                   border: "1px solid #B8CCF0",
//                   borderRadius: 14,
//                   padding: 8,
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 4,
//                 }}
//               >
//                 {items.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setOpen(false)}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 12,
//                         padding: "10px 12px",
//                         borderRadius: 10,
//                         textDecoration: "none",
//                         background: item.cta
//                           ? "linear-gradient(135deg,#B8952A,#D4AF55)"
//                           : activePath === item.href
//                           ? "#EEF3FC"
//                           : "transparent",
//                         color: item.cta ? "#fff" : "#111827",
//                         transition: "background 0.18s",
//                       }}
//                     >
//                       <span
//                         style={{
//                           width: 34,
//                           height: 34,
//                           borderRadius: 10,
//                           background: item.cta ? "rgba(255,255,255,0.25)" : "#EEF3FC",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           flexShrink: 0,
//                           color: item.cta ? "#fff" : "#1A4DA8",
//                         }}
//                       >
//                         <Icon size={16} strokeWidth={2.2} />
//                       </span>
//                       <div>
//                         <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
//                         <div
//                           style={{
//                             fontSize: 12,
//                             color: item.cta ? "rgba(255,255,255,0.85)" : "#6B7280",
//                             marginTop: 1,
//                           }}
//                         >
//                           {item.description}
//                         </div>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   }

//   /* ── Desktop ── */
//   return (
//     <div
//       ref={ref}
//       style={{ position: "relative" }}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         aria-expanded={open}
//         className={`aims-nav-link${isActive ? " active" : ""}`}
//         style={{ display: "flex", alignItems: "center", gap: 5, border: isActive ? "1.5px solid #1A4DA8" : "1.5px solid transparent", fontFamily: "inherit" }}
//       >
//         {label}
//         <ChevronDown
//           size={14}
//           style={{
//             transition: "transform 0.25s",
//             transform: open ? "rotate(180deg)" : "rotate(0deg)",
//           }}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 10, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 8, scale: 0.97 }}
//             transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               position: "absolute",
//               top: "calc(100% + 14px)",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: 300,
//               background: "#fff",
//               borderRadius: 20,
//               border: "1px solid #EEF3FC",
//               boxShadow: "0 20px 60px rgba(13,43,107,0.12), 0 4px 16px rgba(13,43,107,0.06)",
//               padding: 8,
//               zIndex: 100,
//             }}
//           >
//             {/* Caret */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: -7,
//                 left: "50%",
//                 width: 13,
//                 height: 13,
//                 background: "#fff",
//                 border: "1px solid #EEF3FC",
//                 borderBottom: "none",
//                 borderRight: "none",
//                 transform: "translateX(-50%) rotate(45deg)",
//               }}
//             />

//             {items.map((item) => {
//               const Icon = item.icon;
//               const active = activePath === item.href;
//               return (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: 12,
//                     padding: "10px 12px",
//                     borderRadius: 12,
//                     textDecoration: "none",
//                     background: item.cta
//                       ? "linear-gradient(135deg,#B8952A 0%,#D4AF55 100%)"
//                       : active
//                       ? "#EEF3FC"
//                       : "transparent",
//                     color: item.cta ? "#fff" : "#111827",
//                     marginBottom: 2,
//                     transition: "all 0.18s",
//                   }}
//                   onMouseOver={(e) => {
//                     if (!item.cta && !active) e.currentTarget.style.background = "#EEF3FC";
//                     if (item.cta) e.currentTarget.style.filter = "brightness(1.05)";
//                   }}
//                   onMouseOut={(e) => {
//                     if (!item.cta && !active) e.currentTarget.style.background = "transparent";
//                     if (item.cta) e.currentTarget.style.filter = "brightness(1)";
//                   }}
//                 >
//                   <span
//                     style={{
//                       width: 36,
//                       height: 36,
//                       borderRadius: 10,
//                       flexShrink: 0,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       background: item.cta ? "rgba(255,255,255,0.25)" : "#EEF3FC",
//                       color: item.cta ? "#fff" : "#1A4DA8",
//                     }}
//                   >
//                     <Icon size={17} strokeWidth={2} />
//                   </span>
//                   <span style={{ flex: 1 }}>
//                     <span
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 6,
//                         fontSize: 13.5,
//                         fontWeight: 700,
//                         color: item.cta ? "#fff" : "#111827",
//                       }}
//                     >
//                       {item.label}
//                       {item.cta && <ArrowUpRight size={12} strokeWidth={2.5} />}
//                       {item.tag && (
//                         <span
//                           style={{
//                             fontSize: 9,
//                             fontWeight: 700,
//                             padding: "2px 6px",
//                             borderRadius: 20,
//                             background: "#EEF3FC",
//                             color: "#1A4DA8",
//                             letterSpacing: "0.04em",
//                           }}
//                         >
//                           {item.tag}
//                         </span>
//                       )}
//                     </span>
//                     <span
//                       style={{
//                         display: "block",
//                         fontSize: 12,
//                         color: item.cta ? "rgba(255,255,255,0.85)" : "#6B7280",
//                         marginTop: 2,
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {item.description}
//                     </span>
//                   </span>
//                 </a>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ─── Main Export ──────────────────────────────────────────────────────── */
// export default function Navbar({
//   activePath = "/",
//   logoSrc = "/assets/aimskills-logo.png",
// }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handle = () => setScrolled(window.scrollY > 12);
//     handle();
//     window.addEventListener("scroll", handle, { passive: true });
//     return () => window.removeEventListener("scroll", handle);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

//         .aims-header, .aims-header * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; }

//         /* Nav link */
//         .aims-nav-link {
//           padding: 8px 14px;
//           border-radius: 40px;
//           font-size: 14px;
//           font-weight: 600;
//           text-decoration: none;
//           color: #111827;
//           letter-spacing: 0.01em;
//           transition: background 0.18s, color 0.18s;
//           background: transparent;
//           cursor: pointer;
//         }
//         .aims-nav-link:hover { background: #EEF3FC; color: #0D2B6B; }
//         .aims-nav-link.active { background: #EEF3FC; color: #0D2B6B; border-color: #1A4DA8 !important; }

//         /* CTA buttons */
//         .aims-donate-btn {
//           display: inline-flex; align-items: center; gap: 6px;
//           padding: 10px 22px; border-radius: 40px;
//           background: linear-gradient(135deg,#B8952A,#D4AF55);
//           color: #fff; font-size: 14px; font-weight: 800;
//           text-decoration: none; letter-spacing: 0.01em;
//           box-shadow: 0 4px 18px rgba(184,149,42,0.38);
//           transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
//           border: none; cursor: pointer; white-space: nowrap;
//         }
//         .aims-donate-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(184,149,42,0.5);
//           filter: brightness(1.06);
//         }

//         .aims-partner-btn {
//           display: inline-flex; align-items: center; gap: 6px;
//           padding: 10px 22px; border-radius: 40px;
//           background: #153B8F;
//           color: #fff; font-size: 14px; font-weight: 700;
//           text-decoration: none; letter-spacing: 0.01em;
//           box-shadow: 0 4px 16px rgba(13,43,107,0.28);
//           transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
//           border: none; cursor: pointer; white-space: nowrap;
//         }
//         .aims-partner-btn:hover {
//           transform: translateY(-2px);
//           background: #1A4DA8;
//           box-shadow: 0 8px 24px rgba(13,43,107,0.38);
//         }

//         /* Mobile link */
//         .aims-mobile-link {
//           display: block; padding: 12px 16px; border-radius: 14px;
//           font-size: 15px; font-weight: 600;
//           text-decoration: none; color: #111827;
//           transition: background 0.18s, color 0.18s;
//         }
//         .aims-mobile-link:hover, .aims-mobile-link.active {
//           background: #EEF3FC; color: #0D2B6B;
//         }

//         /* Social */
//         .aims-social-pill {
//           width: 28px; height: 28px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           color: #fff; background: rgba(255,255,255,0.15);
//           transition: background 0.2s, transform 0.2s; text-decoration: none;
//         }
//         .aims-social-pill:hover { background: #B8952A; transform: scale(1.12); }

//         .aims-social-mobile {
//           width: 32px; height: 32px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           color: #1A4DA8; background: #EEF3FC;
//           transition: background 0.2s, color 0.2s, transform 0.2s; text-decoration: none;
//         }
//         .aims-social-mobile:hover { background: #0D2B6B; color: #fff; transform: scale(1.1); }

//         /* Topbar */
//         @keyframes aimsPulse {
//           0%,100% { opacity:1; } 50% { opacity:0.5; }
//         }
//         .aims-live-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: #D4AF55; animation: aimsPulse 2s ease-in-out infinite; flex-shrink: 0;
//         }

//         /* Responsive */
//         @media (min-width: 1024px) {
//           .aims-desktop-nav    { display: flex !important; }
//           .aims-partner-desk   { display: inline-flex !important; }
//           .aims-hamburger      { display: none !important; }
//           .aims-topbar         { display: block !important; }
//         }
//         @media (max-width: 1023px) {
//           .aims-topbar { display: none !important; }
//         }

//         /* Topbar link hover */
//         .aims-tb-link { transition: color 0.18s; }
//         .aims-tb-link:hover { color: #D4AF55 !important; }
//       `}</style>

//       <header
//         className="aims-header"
//         style={{ position: "sticky", top: 0, zIndex: 50, width: "100%" }}
//       >
//         {/* ── Top bar ── */}
//         <div
//           className="aims-topbar"
//           style={{
//             display: "none",
//             overflow: "hidden",
//             maxHeight: scrolled ? 0 : 44,
//             opacity: scrolled ? 0 : 1,
//             transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
//             background: "#0D2B6B",
//           }}
//         >
//           <div
//             style={{
//               maxWidth: 1280,
//               margin: "0 auto",
//               padding: "0 28px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               height: 44,
//             }}
//           >
//             {/* Contact */}
//             <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
//               {[
//                 { href: "tel:+917248776407", Icon: Phone, label: "+91 72487 76407" },
//                 { href: "mailto:aimskillstrust@gmail.com", Icon: Mail, label: "aimskillstrust@gmail.com" },
//               ].map(({ href, Icon, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="aims-tb-link"
//                   style={{
//                     display: "flex", alignItems: "center", gap: 7,
//                     fontSize: 13, fontWeight: 600,
//                     color: "rgba(255,255,255,0.88)", textDecoration: "none",
//                   }}
//                 >
//                   <Icon size={13} />
//                   {label}
//                 </a>
//               ))}
//             </div>

//             {/* Social */}
//             <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <div className="aims-live-dot" />
//                 <span
//                   style={{
//                     fontSize: 11, fontWeight: 700,
//                     color: "rgba(255,255,255,0.7)",
//                     letterSpacing: "0.1em", textTransform: "uppercase",
//                   }}
//                 >
//                   Follow Us
//                 </span>
//               </div>
//               <div style={{ display: "flex", gap: 6 }}>
//                 {[
//                     { href: "https://www.facebook.com/aimskillsedu",  label: "Facebook",  Icon: FaFacebook },
//                       { href: "https://www.instagram.com/aimskillsedu", label: "Instagram", Icon: FaInstagram },
//                       { href: "https://twitter.com/Aimskillsedu", label: "Twitter", Icon: X },
//                       { href: "https://www.linkedin.com/company/aimskillsedu",  label: "LinkedIn",  Icon: FaLinkedin },
//                       { href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A",   label: "YouTube",   Icon: FaYoutube },
//                 ].map(({ href, label, Icon }) => (
//                   <a key={label} href={href} aria-label={label} className="aims-social-pill">
//                     <Icon size={13} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Main nav ── */}
//         <nav
//           style={{
//             width: "100%",
//             background: "rgba(255,255,255,0.97)",
//             borderBottom: "1px solid #EEF3FC",
//             backdropFilter: "blur(18px)",
//             boxShadow: scrolled
//               ? "0 4px 32px rgba(13,43,107,0.09)"
//               : "0 1px 0 #EEF3FC",
//             transition: "box-shadow 0.3s ease",
//           }}
//         >
//           <div
//             style={{
//               maxWidth: 1280,
//               margin: "0 auto",
//               padding: "0 20px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               height: 72,
//               gap: 16,
//             }}
//           >
//             {/* ── Logo ── */}
//             <a
//               href="/"
//               style={{
//                 display: "flex", alignItems: "center", gap: 12,
//                 textDecoration: "none", flexShrink: 0,
//               }}
//             >
//               <div
//                 style={{
//                   width: 48, height: 48, borderRadius: 14,
//                   background: "linear-gradient(135deg,#EEF3FC 0%,#F5E8C0 100%)",
//                   border: "1.5px solid #1A4DA8",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   overflow: "hidden", flexShrink: 0,
//                   boxShadow: "0 4px 14px rgba(13,43,107,0.16)",
//                   transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.07) rotate(-4deg)")
//                 }
//                 onMouseOut={(e) =>
//                   (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
//                 }
//               >
//                 <img
//                   src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
//                   alt="AimSkills logo"
//                   style={{ width: "100%", height: "100%", objectFit: "contain" }}
//                 />
//               </div>

//               <div style={{ lineHeight: 1 }}>
//                 <div
//                   style={{
//                     fontSize: 23, fontWeight: 800,
//                     letterSpacing: "-0.03em", lineHeight: 1.1,
//                     color: "#111827",
//                   }}
//                 >
//                   Aim<span style={{ color: "#B8952A" }}> Skills</span>
//                 </div>
//                 <div
//                   style={{
//                     fontSize: 10, fontWeight: 700, color: "#1A4DA8",
//                     letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 3,
//                   }}
//                 >
//                  Building futures
//                 </div>
//               </div>
//             </a>

//             {/* ── Desktop links ── */}
//             <div
//               className="aims-desktop-nav"
//               style={{
//                 display: "none", alignItems: "center",
//                 gap: 2, flex: 1, justifyContent: "center",
//               }}
//             >
//               {NAV_ITEMS.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className={`aims-nav-link${activePath === item.href ? " active" : ""}`}
//                   style={{ border: "1.5px solid transparent" }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <Dropdown label="Resources"    items={RESOURCE_ITEMS} activePath={activePath} />
//               <Dropdown label="Get Involved" items={INVOLVED_ITEMS} activePath={activePath} />
//             </div>

//             {/* ── Right CTAs ── */}
//             <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
//               <a href="/donate" className="aims-donate-btn">
//                 <HeartHandshake size={15} strokeWidth={2.5} />
//                 Donate
//               </a>

//               <a
//                 href="/partner"
//                 className="aims-partner-btn aims-partner-desk"
//                 style={{ display: "none" }}
//               >
//                 <Users size={15} strokeWidth={2.5} />
//                 Partner with Us
//               </a>

//               {/* Hamburger */}
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen((v) => !v)}
//                 aria-label={menuOpen ? "Close menu" : "Open menu"}
//                 aria-expanded={menuOpen}
//                 className="aims-hamburger"
//                 style={{
//                   width: 42, height: 42, borderRadius: 12,
//                   border: "1.5px solid #EEF3FC",
//                   background: menuOpen ? "#EEF3FC" : "#fff",
//                   color: "#1A4DA8",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   cursor: "pointer", transition: "background 0.2s",
//                   fontFamily: "inherit",
//                 }}
//               >
//                 <AnimatePresence mode="wait" initial={false}>
//                   <motion.span
//                     key={menuOpen ? "x" : "menu"}
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.18 }}
//                     style={{ display: "flex" }}
//                   >
//                     {menuOpen ? <X size={20} /> : <Menu size={20} />}
//                   </motion.span>
//                 </AnimatePresence>
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* ── Mobile drawer ── */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//               style={{
//                 position: "absolute",
//                 top: "100%", left: 0, right: 0,
//                 background: "#fff",
//                 borderBottom: "1px solid #EEF3FC",
//                 boxShadow: "0 20px 60px rgba(13,43,107,0.1)",
//                 zIndex: 49,
//               }}
//             >
//               <div
//                 style={{
//                   maxWidth: 1280, margin: "0 auto",
//                   padding: "16px 20px 28px",
//                   display: "flex", flexDirection: "column", gap: 4,
//                 }}
//               >
//                 {NAV_ITEMS.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setMenuOpen(false)}
//                     className={`aims-mobile-link${activePath === item.href ? " active" : ""}`}
//                   >
//                     {item.label}
//                   </a>
//                 ))}

//                 <Dropdown label="Resources"    items={RESOURCE_ITEMS} activePath={activePath} mobile />
//                 <Dropdown label="Get Involved" items={INVOLVED_ITEMS} activePath={activePath} mobile />

//                 {/* CTA row */}
//                 <div
//                   style={{
//                     display: "flex", gap: 10, marginTop: 12,
//                     paddingTop: 16, borderTop: "1px solid #EEF3FC",
//                   }}
//                 >
//                   <a
//                     href="/donate"
//                     className="aims-donate-btn"
//                     style={{ flex: 1, justifyContent: "center" }}
//                   >
//                     <HeartHandshake size={15} />
//                     Donate Now
//                   </a>
//                   <a
//                     href="/partner"
//                     className="aims-partner-btn"
//                     style={{ flex: 1, justifyContent: "center" }}
//                   >
//                     <Users size={15} />
//                     Partner with Us
//                   </a>
//                 </div>

//                 {/* Contact info */}
//                 <div
//                   style={{
//                     marginTop: 10, padding: "16px 18px",
//                     background: "linear-gradient(135deg,#EEF3FC,#F5E8C0)",
//                     borderRadius: 16, border: "1px solid #EEF3FC",
//                   }}
//                 >
//                   <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                     {[
//                       { href: "tel:+917248776407", Icon: Phone, label: "+91 72487 76407" },
//                 { href: "mailto:aimskillstrust@gmail.com", Icon: Mail, label: "aimskillstrust@gmail.com" },
//                     ].map(({ href, Icon, label }) => (
//                       <a
//                         key={label} href={href}
//                         style={{
//                           display: "flex", alignItems: "center", gap: 10,
//                           fontSize: 13.5, fontWeight: 600,
//                           color: "#1A4DA8", textDecoration: "none",
//                         }}
//                       >
//                         <Icon size={15} /> {label}
//                       </a>
//                     ))}
//                   </div>

//                   <div
//                     style={{
//                       display: "flex", gap: 8, marginTop: 14,
//                       paddingTop: 12, borderTop: "1px solid #B8CCF0",
//                     }}
//                   >
//                     {[
//                       { href: "https://www.facebook.com/aimskillsedu",  label: "Facebook",  Icon: FaFacebook },
//                       { href: "https://www.instagram.com/aimskillsedu", label: "Instagram", Icon: FaInstagram },
//                           { href: "https://twitter.com/Aimskillsedu", label: "Twitter", Icon: X },
//                       { href: "https://www.linkedin.com/company/aimskillsedu",  label: "LinkedIn",  Icon: FaLinkedin },
//                       { href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A",   label: "YouTube",   Icon: FaYoutube },
//                     ].map(({ href, label, Icon }) => (
//                       <a key={label} href={href} aria-label={label} className="aims-social-mobile">
//                         <Icon size={15} />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// }


import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  FileBoxIcon,
  FishingHookIcon,
  HeartHandshake,
  Image,
  ImageOffIcon,
  Import,
  Loader2,
  Loader2Icon,
  Mail,
  Menu,
  Newspaper,
  Phone,
  UserRoundPlus,
  Users,
  X,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
/* ─── Design Tokens ───────────────────────────────────────────────────────
   Navy Deep : #0D2B6B   Royal Blue: #1A4DA8   Vivid Blue: #2E6FD9
   Sky Tint  : #B8CCF0   Ice Wash  : #EEF3FC
   Aim Gold  : #B8952A   Warm Gold : #D4AF55   Gold Tint : #F5E8C0
   Charcoal  : #111827   Off White : #F8F9FB
──────────────────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: "About Us",         href: "/about" },
  { label: "Our Programs",     href: "/programs" },
  { label: "Impact",           href: "/impact" },
  { label: "CSR Partnerships", href: "/csr" },
];

const RESOURCE_ITEMS = [
  {
    label: "Gallery",
    href: "/gallery",
    icon: Image,
    description: "Moments from our learning spaces",
    tag: "Photos",
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: Newspaper,
    description: "Stories, updates, and field notes",
    tag: "Latest",
  },
];

const INVOLVED_ITEMS = [
  {
    label: "Donate",
    href: "/donate",
    icon: HeartHandshake,
    description: "Fund a child's skill journey",
    cta: true,
  },
  {
    label: "Volunteer",
    href: "/volunteer",
    icon: UserRoundPlus,
    description: "Share your time and expertise",
  },
  {
    label: "Become Training Partner",
    href: "/partner",
    icon: BriefcaseBusiness,
    description: "Collaborate for skill development programs",
  },
  {
    label: "Hire Trained Candidates",
    href: "/hire",
    icon: GraduationCap,
    description: "Access our pool of skilled professionals",
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: Phone,
    description: "Start a conversation with us",
  },
];

/* ─── Dropdown ─────────────────────────────────────────────────────────── */
function Dropdown({ label, items, activePath, mobile = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = items.some((i) => i.href === activePath);

  useEffect(() => {
    if (mobile) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobile]);

  /* ── Mobile ── */
  if (mobile) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderRadius: 14,
            border: "none",
            background: isActive ? "#EEF3FC" : "transparent",
            color: isActive ? "#0D2B6B" : "#111827",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
            fontFamily: "inherit",
          }}
        >
          {label}
          <ChevronDown
            size={17}
            style={{
              transition: "transform 0.25s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              color: "#1A4DA8",
            }}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 4 }}
            >
              <div
                style={{
                  background: "#F0F4FD",
                  border: "1px solid #B8CCF0",
                  borderRadius: 14,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 10,
                        textDecoration: "none",
                        background: item.cta
                          ? "linear-gradient(135deg,#B8952A,#D4AF55)"
                          : activePath === item.href
                          ? "#EEF3FC"
                          : "transparent",
                        color: item.cta ? "#fff" : "#111827",
                        transition: "background 0.18s",
                      }}
                    >
                      <span
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 10,
                          background: item.cta ? "rgba(255,255,255,0.25)" : "#EEF3FC",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: item.cta ? "#fff" : "#1A4DA8",
                        }}
                      >
                        <Icon size={16} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
                        <div
                          style={{
                            fontSize: 12,
                            color: item.cta ? "rgba(255,255,255,0.85)" : "#6B7280",
                            marginTop: 1,
                          }}
                        >
                          {item.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ── Desktop ── */
  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`aims-nav-link${isActive ? " active" : ""}`}
        style={{ display: "flex", alignItems: "center", gap: 5, border: isActive ? "1.5px solid #1A4DA8" : "1.5px solid transparent", fontFamily: "inherit" }}
      >
        {label}
        <ChevronDown
          size={14}
          style={{
            transition: "transform 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "calc(100% + 14px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: 300,
              background: "#fff",
              borderRadius: 20,
              border: "1px solid #EEF3FC",
              boxShadow: "0 20px 60px rgba(13,43,107,0.12), 0 4px 16px rgba(13,43,107,0.06)",
              padding: 8,
              zIndex: 100,
            }}
          >
            {/* Caret */}
            <div
              style={{
                position: "absolute",
                top: -7,
                left: "50%",
                width: 13,
                height: 13,
                background: "#fff",
                border: "1px solid #EEF3FC",
                borderBottom: "none",
                borderRight: "none",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />

            {items.map((item) => {
              const Icon = item.icon;
              const active = activePath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 12,
                    textDecoration: "none",
                    background: item.cta
                      ? "linear-gradient(135deg,#B8952A 0%,#D4AF55 100%)"
                      : active
                      ? "#EEF3FC"
                      : "transparent",
                    color: item.cta ? "#fff" : "#111827",
                    marginBottom: 2,
                    transition: "all 0.18s",
                  }}
                  onMouseOver={(e) => {
                    if (!item.cta && !active) e.currentTarget.style.background = "#EEF3FC";
                    if (item.cta) e.currentTarget.style.filter = "brightness(1.05)";
                  }}
                  onMouseOut={(e) => {
                    if (!item.cta && !active) e.currentTarget.style.background = "transparent";
                    if (item.cta) e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: item.cta ? "rgba(255,255,255,0.25)" : "#EEF3FC",
                      color: item.cta ? "#fff" : "#1A4DA8",
                    }}
                  >
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <span style={{ flex: 1 }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13.5,
                        fontWeight: 700,
                        color: item.cta ? "#fff" : "#111827",
                      }}
                    >
                      {item.label}
                      {item.cta && <ArrowUpRight size={12} strokeWidth={2.5} />}
                      {item.tag && (
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "2px 6px",
                            borderRadius: 20,
                            background: "#EEF3FC",
                            color: "#1A4DA8",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: item.cta ? "rgba(255,255,255,0.85)" : "#6B7280",
                        marginTop: 2,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Export ──────────────────────────────────────────────────────── */
export default function Navbar({
  activePath = "/",
  logoSrc = "/assets/aimskills-logo.png",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .aims-header, .aims-header * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; }

        /* Nav link */
        .aims-nav-link {
          padding: 8px 14px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          color: #111827;
          letter-spacing: 0.01em;
          transition: background 0.18s, color 0.18s;
          background: transparent;
          cursor: pointer;
        }
        .aims-nav-link:hover { background: #EEF3FC; color: #0D2B6B; }
        .aims-nav-link.active { background: #EEF3FC; color: #0D2B6B; border-color: #1A4DA8 !important; }

        /* CTA buttons */
        .aims-donate-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px; border-radius: 40px;
          background: linear-gradient(135deg,#B8952A,#D4AF55);
          color: #fff; font-size: 14px; font-weight: 800;
          text-decoration: none; letter-spacing: 0.01em;
          box-shadow: 0 4px 18px rgba(184,149,42,0.38);
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          border: none; cursor: pointer; white-space: nowrap;
        }
        .aims-donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(184,149,42,0.5);
          filter: brightness(1.06);
        }

        .aims-partner-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px; border-radius: 40px;
          background: #153B8F;
          color: #fff; font-size: 14px; font-weight: 700;
          text-decoration: none; letter-spacing: 0.01em;
          box-shadow: 0 4px 16px rgba(13,43,107,0.28);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          border: none; cursor: pointer; white-space: nowrap;
        }
        .aims-partner-btn:hover {
          transform: translateY(-2px);
          background: #1A4DA8;
          box-shadow: 0 8px 24px rgba(13,43,107,0.38);
        }

        /* Mobile link */
        .aims-mobile-link {
          display: block; padding: 12px 16px; border-radius: 14px;
          font-size: 15px; font-weight: 600;
          text-decoration: none; color: #111827;
          transition: background 0.18s, color 0.18s;
        }
        .aims-mobile-link:hover, .aims-mobile-link.active {
          background: #EEF3FC; color: #0D2B6B;
        }

        /* Social - Topbar */
        .aims-social-pill {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; background: rgba(255,255,255,0.15);
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s; 
          text-decoration: none;
        }
        .aims-social-pill:hover { 
          transform: scale(1.15); 
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }
        
        /* Brand-specific hover colors */
        .aims-social-fb:hover { background: #1877F2; }
        .aims-social-ig:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .aims-social-x:hover { background: #000000; }
        .aims-social-li:hover { background: #0A66C2; }
        .aims-social-yt:hover { background: #FF0000; }

        /* Social - Mobile */
        .aims-social-mobile {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #1A4DA8; background: #EEF3FC;
          transition: background 0.25s, color 0.2s, transform 0.2s; 
          text-decoration: none;
        }
        .aims-social-mobile:hover { 
          color: #fff; 
          transform: scale(1.12); 
        }
        .aims-social-mobile.aims-social-fb:hover { background: #1877F2; }
        .aims-social-mobile.aims-social-ig:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .aims-social-mobile.aims-social-x:hover { background: #000000; }
        .aims-social-mobile.aims-social-li:hover { background: #0A66C2; }
        .aims-social-mobile.aims-social-yt:hover { background: #FF0000; }

        /* Topbar */
        @keyframes aimsPulse {
          0%,100% { opacity:1; } 50% { opacity:0.5; }
        }
        .aims-live-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #D4AF55; animation: aimsPulse 2s ease-in-out infinite; flex-shrink: 0;
        }

        /* Responsive */
        @media (min-width: 1024px) {
          .aims-desktop-nav    { display: flex !important; }
          .aims-partner-desk   { display: inline-flex !important; }
          .aims-hamburger      { display: none !important; }
          .aims-topbar         { display: block !important; }
        }
        @media (max-width: 1023px) {
          .aims-topbar { display: none !important; }
        }

        /* Topbar link hover */
        .aims-tb-link { transition: color 0.18s; }
        .aims-tb-link:hover { color: #D4AF55 !important; }
      `}</style>

      <header
        className="aims-header"
        style={{ position: "sticky", top: 0, zIndex: 50, width: "100%" }}
      >
        {/* ── Top bar ── */}
        <div
          className="aims-topbar"
          style={{
            display: "none",
            overflow: "hidden",
            maxHeight: scrolled ? 0 : 44,
            opacity: scrolled ? 0 : 1,
            transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
            background: "#0D2B6B",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 44,
            }}
          >
            {/* Contact */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              {[
                { href: "tel:+917248776407", Icon: Phone, label: "+91 72487 76407" },
                { href: "mailto:aimskillstrust@gmail.com", Icon: Mail, label: "aimskillstrust@gmail.com" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="aims-tb-link"
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    fontSize: 13, fontWeight: 600,
                    color: "rgba(255,255,255,0.88)", textDecoration: "none",
                  }}
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className="aims-live-dot" />
                <span
                  style={{
                    fontSize: 11, fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}
                >
                  Follow Us
                </span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[
                  { href: "https://www.facebook.com/aimskillsedu", label: "Facebook", Icon: FaFacebook, socialClass: "aims-social-fb" },
                  { href: "https://www.instagram.com/aimskillsedu", label: "Instagram", Icon: FaInstagram, socialClass: "aims-social-ig" },
                  { href: "https://twitter.com/Aimskillsedu", label: "Twitter", Icon: FaXTwitter, socialClass: "aims-social-x" },
                  { href: "https://www.linkedin.com/company/aimskillsedu", label: "LinkedIn", Icon: FaLinkedin, socialClass: "aims-social-li" },
                  { href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A", label: "YouTube", Icon: FaYoutube, socialClass: "aims-social-yt" },
                ].map(({ href, label, Icon, socialClass }) => (
                  <a 
                    key={label} 
                    href={href} 
                    aria-label={label} 
                    className={`aims-social-pill ${socialClass}`}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.97)",
            borderBottom: "1px solid #EEF3FC",
            backdropFilter: "blur(18px)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(13,43,107,0.09)"
              : "0 1px 0 #EEF3FC",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 72,
              gap: 16,
            }}
          >
            {/* ── Logo ── */}
            <a
              href="/"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                textDecoration: "none", flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "linear-gradient(135deg,#EEF3FC 0%,#F5E8C0 100%)",
                  border: "1.5px solid #1A4DA8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden", flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(13,43,107,0.16)",
                  transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.07) rotate(-4deg)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                }
              >
                <img
                  src="/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
                  alt="AimSkills logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <div style={{ lineHeight: 1 }}>
                <div
                  style={{
                    fontSize: 23, fontWeight: 800,
                    letterSpacing: "-0.03em", lineHeight: 1.1,
                    color: "#111827",
                  }}
                >
                  Aim<span style={{ color: "#B8952A" }}> Skills</span>
                </div>
                <div
                  style={{
                    fontSize: 10, fontWeight: 700, color: "#1A4DA8",
                    letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 3,
                  }}
                >
                 Building futures
                </div>
              </div>
            </a>

            {/* ── Desktop links ── */}
            <div
              className="aims-desktop-nav"
              style={{
                display: "none", alignItems: "center",
                gap: 2, flex: 1, justifyContent: "center",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`aims-nav-link${activePath === item.href ? " active" : ""}`}
                  style={{ border: "1.5px solid transparent" }}
                >
                  {item.label}
                </a>
              ))}
              <Dropdown label="Resources"    items={RESOURCE_ITEMS} activePath={activePath} />
              <Dropdown label="Get Involved" items={INVOLVED_ITEMS} activePath={activePath} />
            </div>

            {/* ── Right CTAs ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <a href="/donate" className="aims-donate-btn">
                <HeartHandshake size={15} strokeWidth={2.5} />
                Donate
              </a>

              <a
                href="/partner"
                className="aims-partner-btn aims-partner-desk"
                style={{ display: "none" }}
              >
                <Users size={15} strokeWidth={2.5} />
                Partner with Us
              </a>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="aims-hamburger"
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  border: "1.5px solid #EEF3FC",
                  background: menuOpen ? "#EEF3FC" : "#fff",
                  color: "#1A4DA8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "background 0.2s",
                  fontFamily: "inherit",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex" }}
                  >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: "100%", left: 0, right: 0,
                background: "#fff",
                borderBottom: "1px solid #EEF3FC",
                boxShadow: "0 20px 60px rgba(13,43,107,0.1)",
                zIndex: 49,
              }}
            >
              <div
                style={{
                  maxWidth: 1280, margin: "0 auto",
                  padding: "16px 20px 28px",
                  display: "flex", flexDirection: "column", gap: 4,
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`aims-mobile-link${activePath === item.href ? " active" : ""}`}
                  >
                    {item.label}
                  </a>
                ))}

                <Dropdown label="Resources"    items={RESOURCE_ITEMS} activePath={activePath} mobile />
                <Dropdown label="Get Involved" items={INVOLVED_ITEMS} activePath={activePath} mobile />

                {/* CTA row */}
                <div
                  style={{
                    display: "flex", gap: 10, marginTop: 12,
                    paddingTop: 16, borderTop: "1px solid #EEF3FC",
                  }}
                >
                  <a
                    href="/donate"
                    className="aims-donate-btn"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <HeartHandshake size={15} />
                    Donate Now
                  </a>
                  <a
                    href="/partner"
                    className="aims-partner-btn"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <Users size={15} />
                    Partner with Us
                  </a>
                </div>

                {/* Contact info */}
                <div
                  style={{
                    marginTop: 10, padding: "16px 18px",
                    background: "linear-gradient(135deg,#EEF3FC,#F5E8C0)",
                    borderRadius: 16, border: "1px solid #EEF3FC",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { href: "tel:+917248776407", Icon: Phone, label: "+91 72487 76407" },
                      { href: "mailto:aimskillstrust@gmail.com", Icon: Mail, label: "aimskillstrust@gmail.com" },
                    ].map(({ href, Icon, label }) => (
                      <a
                        key={label} href={href}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          fontSize: 13.5, fontWeight: 600,
                          color: "#1A4DA8", textDecoration: "none",
                        }}
                      >
                        <Icon size={15} /> {label}
                      </a>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex", gap: 8, marginTop: 14,
                      paddingTop: 12, borderTop: "1px solid #B8CCF0",
                    }}
                  >
                    {[
                      { href: "https://www.facebook.com/aimskillsedu", label: "Facebook", Icon: FaFacebook, socialClass: "aims-social-fb" },
                      { href: "https://www.instagram.com/aimskillsedu", label: "Instagram", Icon: FaInstagram, socialClass: "aims-social-ig" },
                      { href: "https://twitter.com/Aimskillsedu", label: "Twitter", Icon: FaXTwitter, socialClass: "aims-social-x" },
                      { href: "https://www.linkedin.com/company/aimskillsedu", label: "LinkedIn", Icon: FaLinkedin, socialClass: "aims-social-li" },
                      { href: "https://youtube.com/channel/UC3SfcVEeOO72bi3mwSLER7A", label: "YouTube", Icon: FaYoutube, socialClass: "aims-social-yt" },
                    ].map(({ href, label, Icon, socialClass }) => (
                      <a key={label} href={href} aria-label={label} className={`aims-social-mobile ${socialClass}`}>
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}