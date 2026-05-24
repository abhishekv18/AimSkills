// src/pages/BecomeTrainingPartnerPage.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TrainingPartnerHeroSection from "../components/training-partner/TrainingPartnerHeroSection";
import PartnershipBenefitsSection from "../components/training-partner/PartnershipBenefitsSection";
import PartnershipProcessSection from "../components/training-partner/PartnershipProcessSection";
import TrainingPartnerFormSection from "../components/training-partner/TrainingPartnerFormSection";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartneRSction";
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

export default function BecomeTrainingPartnerPage() {

      const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);
  return (


    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/training-partner" />

      <TrainingPartnerHeroSection />

      <SectionReveal id="partnership-benefits">
        <PartnershipBenefitsSection />
      </SectionReveal>

      <SectionReveal id="partnership-process">
        <PartnershipProcessSection />
      </SectionReveal>

      <SectionReveal id="partner-form">
        <TrainingPartnerFormSection />
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
