// src/pages/HireTrainedCandidatesPage.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HireHeroSection from "../components/hire/HireHeroSection";
import WhyHireSection from "../components/hire/WhyHireSection";
import IndustryReadySection from "../components/hire/IndustryReadySection";
import HireCandidateFormSection from "../components/hire/HireCandidateFormSection";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
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

export default function HireTrainedCandidatesPage() {

    const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/hire-trained-candidates" />

      <HireHeroSection />

      <SectionReveal id="why-hire">
        <WhyHireSection />
      </SectionReveal>

      <SectionReveal id="industry-ready">
        <IndustryReadySection />
      </SectionReveal>

      <SectionReveal id="hire-form">
        <HireCandidateFormSection />
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
