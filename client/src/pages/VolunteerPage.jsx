
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import VolunteerHeroSection from "../components/volunteer/VolunteerHeroSection";
// import VolunteerOpportunitiesSection from "../components/volunteer/VolunteerOpportunitiesSection";
// import WhyVolunteerSection from "../components/volunteer/WhyVolunteerSection";
// import VolunteerFormSection from "../components/volunteer/VolunteerFormSection";
// import CTASection from "../components/CTASection";
// import PartnersSection from "../components/PartneRSction";
// import Footer from "../components/Footer";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function SectionReveal({ children, id }) {
//   return (
//     <motion.section
//       id={id}
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.14 }}
//     >
//       {children}
//     </motion.section>
//   );
// }

// export default function VolunteerPage() {
//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/volunteer" />

//       <VolunteerHeroSection />

//       <SectionReveal id="volunteer-opportunities">
//         <VolunteerOpportunitiesSection />
//       </SectionReveal>

//       <SectionReveal id="why-volunteer">
//         <WhyVolunteerSection />
//       </SectionReveal>

//       <SectionReveal id="volunteer-form">
//         <VolunteerFormSection />
//       </SectionReveal>

//       <SectionReveal id="cta">
//         <CTASection />
//       </SectionReveal>

//       <SectionReveal id="partners">
//         <PartnersSection />
//       </SectionReveal>

//       <Footer />
//     </main>
//   );
// }

// src/pages/VolunteerPage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VolunteerHeroSection from "../components/volunteer/VolunteerHeroSection";
import VolunteerOpportunitiesSection from "../components/volunteer/VolunteerOpportunitiesSection";
import WhyVolunteerSection from "../components/volunteer/WhyVolunteerSection";
import VolunteerFormSection from "../components/volunteer/VolunteerFormSection";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartneRSction";
import Footer from "../components/Footer";
import { Shield, X, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionReveal({ children, id }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      {children}
    </motion.section>
  );
}

function AdminAccessButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Floating shield button - bottom left */}
    {/* Floating shield button - bottom left */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 2, duration: 0.5 }}
  className="fixed bottom-6 left-6 z-50"
>
  <motion.button
    onClick={() => setIsVisible(!isVisible)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative flex items-center gap-2 overflow-hidden rounded-full border shadow-lg transition-all duration-300 ${
      isVisible
        ? "border-[#B8CCF0]/40 bg-[#153B8F] px-4 py-3"
        : "border-slate-200 bg-white px-3 py-3 hover:border-[#B8CCF0]/40 hover:shadow-xl"
    }`}
  >
    <Shield
      size={isVisible ? 18 : 20}
      strokeWidth={2}
      className={`transition-colors duration-300 ${
        isVisible ? "text-[#D4AF55]" : "text-slate-400"
      }`}
    />

    <AnimatePresence>
      {isVisible && (
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden whitespace-nowrap text-xs font-bold text-white"
        >
          Admin
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>
</motion.div>
      {/* Admin login panel */}
   <AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-24 left-6 z-50 w-72 overflow-hidden rounded-2xl border border-[#B8CCF0]/40 bg-white shadow-2xl"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between bg-[#153B8F] px-5 py-4">
        <div className="flex items-center gap-3">
         <div className="flex size-9 items-center justify-center rounded-xl border border-[#D4AF55]/30 bg-gradient-to-br from-[#B8952A]/20 to-[#D4AF55]/10 shadow-[0_0_20px_rgba(212,175,85,0.25)] backdrop-blur-sm">
  <Shield
    size={16}
    strokeWidth={2.2}
    className="text-[#D4AF55] drop-shadow-[0_0_6px_rgba(212,175,85,0.8)]"
  />
</div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Admin Portal
            </h4>
            <p className="text-xs text-[#B8CCF0]/80">
              Authorized access only
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="flex size-8 items-center justify-center rounded-lg text-[#B8CCF0]/50 transition-colors hover:bg-[#B8CCF0]/15 hover:text-[#B8CCF0]"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Panel content */}
      <div className="space-y-4 bg-[#F8F9FB] p-5">
        <p className="text-xs leading-5 text-slate-600">
          This area is restricted to authorized administrators only.
        </p>

        <Link
          to="/admin/login"
          onClick={() => setIsVisible(false)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#153B8F] px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#1A4DA8]"
        >
          <LogIn size={16} strokeWidth={2} />
          Access Admin Panel
        </Link>

        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <div className="h-px w-8 bg-[#B8CCF0]/30" />
          <Shield size={10} strokeWidth={1.8} className="text-[#B8CCF0]/60" />
          <span>Secure connection</span>
          <div className="h-px w-8 bg-[#B8CCF0]/30" />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

export default function VolunteerPage() {

    const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/volunteer" />

      <VolunteerHeroSection />

      <SectionReveal id="volunteer-opportunities">
        <VolunteerOpportunitiesSection />
      </SectionReveal>

      <SectionReveal id="why-volunteer">
        <WhyVolunteerSection />
      </SectionReveal>

      <SectionReveal id="volunteer-form">
        <VolunteerFormSection />
      </SectionReveal>

      <SectionReveal id="cta">
        <CTASection />
      </SectionReveal>

      <SectionReveal id="partners">
        <PartnersSection />
      </SectionReveal>

      <Footer />

      {/* Admin access - subtle, professional */}
      <AdminAccessButton />
    </main>
  );
}