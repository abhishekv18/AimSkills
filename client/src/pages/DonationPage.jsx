// // src/pages/DonatePage.jsx
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import DonateHeroSection from "../components/donate/DonateHeroSection";
// import WhyDonateSection from "../components/donate/WhyDonateSection";
// import DonationImpactSection from "../components/donate/DonationImpactSection";
// import DonationMethodsSection from "../components/donate/DonationMethodsSection";
// import TransparencyTrustSection from "../components/donate/TransparencyTrustSection";
// import DonorSupportSection from "../components/donate/DonorSupportSection";
// import CTASection from "../components/CTASection";
// import PartnersSection from "../components/PartnersSection";
// import Footer from "../components/Footer";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

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

// export default function DonatePage() {

//     const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userData) {
//       navigate("/admin/dashboard");
//     }
//   }, [userData, navigate]);

//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/donate" />

//       <DonateHeroSection />

//       <SectionReveal id="why-donate">
//         <WhyDonateSection />
//       </SectionReveal>

//       <SectionReveal id="donation-impact">
//         <DonationImpactSection />
//       </SectionReveal>

//       <SectionReveal id="donation-methods">
//         <DonationMethodsSection />
//       </SectionReveal>

//       <SectionReveal id="transparency">
//         <TransparencyTrustSection />
//       </SectionReveal>

//       <SectionReveal id="support">
//         <DonorSupportSection />
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
// src/pages/DonatePage.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import DonateHeroSection from "../components/donate/DonateHeroSection";
import WhyDonateSection from "../components/donate/WhyDonateSection";
import DonationImpactSection from "../components/donate/DonationImpactSection";
import DonationMethodsSection from "../components/donate/DonationMethodsSection";
import TransparencyTrustSection from "../components/donate/TransparencyTrustSection";
import DonorSupportSection from "../components/donate/DonorSupportSection";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
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

export default function DonatePage() {
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
      <Navbar activePath="/donate" />

      {/* Hero Section */}
      <DonateHeroSection />

      {/* Why Donate */}
      <SectionReveal id="why-donate" className="relative bg-white">
        <WhyDonateSection />
      </SectionReveal>

      {/* Donation Impact */}
      <SectionReveal id="donation-impact" className="relative bg-[#EEF3FC]">
        <DonationImpactSection />
      </SectionReveal>

      {/* Donation Methods */}
      <SectionReveal id="donation-methods" className="relative bg-white">
        <DonationMethodsSection />
      </SectionReveal>

      {/* Transparency & Trust */}
      <SectionReveal id="transparency" className="relative bg-[#F8F9FB]">
        <TransparencyTrustSection />
      </SectionReveal>

      {/* Donor Support */}
      <SectionReveal id="support" className="relative bg-white">
        <DonorSupportSection />
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