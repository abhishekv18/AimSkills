// // src/pages/CSRPage.jsx
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import CTASection from "../components/CTASection";
// import PartnersSection from "../components/PartnersSection";
// import Footer from "../components/Footer";
// import CSRHeroSection from "../components/csr/CSRHeroSection";
// import CSRIntroSection from "../components/csr/CSRIntroSection";
// import WhyPartnerSection from "../components/csr/WhyPartnerSection";
// import CSRFocusAreasSection from "../components/csr/CSRFocusAreasSection";
// import CSRProjectsSection from "../components/csr/CSRProjectsSection";
// import CSRBenefitsSection from "../components/csr/CSRBenefitsSection";
// import CSRProposalSection from "../components/csr/CSRProposalSection";
// import CSRPartnerFormSection from "../components/csr/CSRPartnerFormSection";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const sectionVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.72,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function SectionReveal({ children, id, className = "" }) {
//   return (
//     <motion.section
//       id={id}
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.14 }}
//       className={className}
//     >
//       {children}
//     </motion.section>
//   );
// }

// export default function CSRPage() {

//     const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userData) {
//       navigate("/admin/dashboard");
//     }
//   }, [userData, navigate]);

//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/csr" />

//       <CSRHeroSection />

//       <SectionReveal id="csr-intro">
//         <CSRIntroSection />
//       </SectionReveal>

//       <SectionReveal id="why-partner">
//         <WhyPartnerSection />
//       </SectionReveal>

//       <SectionReveal id="focus-areas">
//         <CSRFocusAreasSection />
//       </SectionReveal>

//       <SectionReveal id="csr-projects">
//         <CSRProjectsSection />
//       </SectionReveal>

//       <SectionReveal id="benefits">
//         <CSRBenefitsSection />
//       </SectionReveal>

//       <SectionReveal id="proposal">
//         <CSRProposalSection />
//       </SectionReveal>

//       <SectionReveal id="partner-form">
//         <CSRPartnerFormSection />
//       </SectionReveal>
//   <SectionReveal id="cta">
//         <CTASection />
//       </SectionReveal>
//       <SectionReveal id="partners">
//         <PartnersSection />
//       </SectionReveal>

    

//       <Footer />
//     </main>
//   );
// }
// src/pages/CSRPage.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import CSRHeroSection from "../components/csr/CSRHeroSection";
import CSRIntroSection from "../components/csr/CSRIntroSection";
import WhyPartnerSection from "../components/csr/WhyPartnerSection";
import CSRFocusAreasSection from "../components/csr/CSRFocusAreasSection";
import CSRProjectsSection from "../components/csr/CSRProjectsSection";
import CSRBenefitsSection from "../components/csr/CSRBenefitsSection";
import CSRProposalSection from "../components/csr/CSRProposalSection";
import CSRPartnerFormSection from "../components/csr/CSRPartnerFormSection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionReveal({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function CSRPage() {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] antialiased">
      {/* Navigation */}
      <Navbar activePath="/csr" />

      {/* Hero Section */}
      <CSRHeroSection />

      {/* CSR Introduction */}
      <SectionReveal id="csr-intro" className="relative bg-white">
        <CSRIntroSection />
      </SectionReveal>

      {/* Why Partner With Us */}
      <SectionReveal id="why-partner" className="relative bg-[#EEF3FC]">
        <WhyPartnerSection />
      </SectionReveal>

      {/* Focus Areas */}
      <SectionReveal id="focus-areas" className="relative bg-white">
        <CSRFocusAreasSection />
      </SectionReveal>

      {/* CSR Projects */}
      <SectionReveal id="csr-projects" className="relative bg-[#F8F9FB]">
        <CSRProjectsSection />
      </SectionReveal>

      {/* Benefits */}
      <SectionReveal id="benefits" className="relative bg-white">
        <CSRBenefitsSection />
      </SectionReveal>

      {/* Proposal */}
      <SectionReveal id="proposal" className="relative bg-[#EEF3FC]">
        <CSRProposalSection />
      </SectionReveal>

      {/* Partner Form */}
      <SectionReveal id="partner-form" className="relative bg-white">
        <CSRPartnerFormSection />
      </SectionReveal>

      {/* Call to Action */}
      <SectionReveal id="cta" className="relative bg-[#F5E8C0]">
        <CTASection />
      </SectionReveal>

      {/* Partners */}
      <SectionReveal id="partners" className="relative bg-[#F8F9FB]">
        <PartnersSection />
      </SectionReveal>

      {/* Footer */}
      <Footer />
    </main>
  );
}