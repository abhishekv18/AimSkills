
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
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] antialiased">
      {/* Navigation */}
      <Navbar activePath="/about" />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* About Cards - Mission, Vision, Values */}
      <SectionReveal id="about-cards" className="relative bg-white">
        <AboutCardsSection />
      </SectionReveal>

      {/* Founder's Message */}
      <SectionReveal id="founder-message" className="relative bg-[#EEF3FC]">
        <FounderMessageSection />
      </SectionReveal>

      {/* Legal Registration & Certifications */}
      <SectionReveal id="legal-registration" className="relative bg-white">
        <LegalRegistrationSection />
      </SectionReveal>

      {/* Team Overview */}
      <SectionReveal id="team-overview" className="relative bg-[#F8F9FB]">
        <TeamOverviewSection />
      </SectionReveal>

      {/* Awards & Recognition */}
      <SectionReveal id="awards" className="relative bg-white">
        <AwardsSection />
      </SectionReveal>

      {/* Timeline / Journey */}
      <SectionReveal id="timeline" className="relative bg-[#EEF3FC]">
        <TimelineSection />
      </SectionReveal>

      {/* Call to Action */}
      <SectionReveal id="cta" className="relative bg-[#F5E8C0]">
        <CTASection />
      </SectionReveal>

      {/* Partners & Collaborators */}
      <SectionReveal id="partners" className="relative bg-white">
        <PartnersSection />
      </SectionReveal>

      {/* Footer */}
      <Footer />
    </main>
  );
}