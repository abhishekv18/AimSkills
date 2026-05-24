
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutCardsSection from "../components/about/AboutCardsSection";
import FounderMessageSection from "../components/about/FounderMessageSection";
import LegalRegistrationSection from "../components/about/LegalRegistrationSection";
import TeamOverviewSection from "../components/about/TeamOverviewSection";
import AwardsSection from "../components/about/AwardsSection";
import TimelineSection from "../components/about/TimelineSection";
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

export default function AboutPage() {
    const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);
  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/about" />

      <AboutHeroSection />

      <SectionReveal id="about-cards">
        <AboutCardsSection />
      </SectionReveal>

      <SectionReveal id="founder-message">
        <FounderMessageSection />
      </SectionReveal>

      <SectionReveal id="legal-registration">
        <LegalRegistrationSection />
      </SectionReveal>

      <SectionReveal id="team-overview">
        <TeamOverviewSection />
      </SectionReveal>

      <SectionReveal id="awards">
        <AwardsSection />
      </SectionReveal>

      <SectionReveal id="timeline">
        <TimelineSection />
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
