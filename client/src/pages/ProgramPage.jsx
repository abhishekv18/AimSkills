
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import ProgramsHeroSection from "../components/program/ProgramsHeroSection";
// import ProgramsIntroSection from "../components/program/ProgramsIntroSection";
// import DetailedProgramsSection from "../components/program/DetailedProgramsSection";
// import ApproachSection from "../components/program/ApproachSection";
// import PartnersSection from "../components/PartneRSction";
// import CTASection from "../components/CTASection";
// import Footer from "../components/Footer";
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
//       viewport={{
//         once: true,
//         amount: 0.14,
//       }}
//       className={className}
//     >
//       {children}
//     </motion.section>
//   );
// }

// export default function ProgramsPage() {
//     const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userData) {
//       navigate("/admin/dashboard");
//     }
//   }, [userData, navigate]);

//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/programs" />

//       <ProgramsHeroSection />

//       <SectionReveal
//         id="programs-intro"
//         className="relative bg-white py-8 sm:py-10 lg:py-12"
//       >
//         <ProgramsIntroSection />
//       </SectionReveal>

//       <SectionReveal
//         id="detailed-programs"
//         className="relative overflow-hidden bg-[#EEF3FC] py-8 sm:py-10 lg:py-12"
//       >
//        <DetailedProgramsSection/>
//       </SectionReveal>

//       <SectionReveal
//         id="approach"
//         className="relative bg-white py-8 sm:py-10 lg:py-12"
//       >
//         <ApproachSection />
//       </SectionReveal>

//       <SectionReveal id="cta" className="relative bg-white">
//         <CTASection />
//       </SectionReveal>

//       <SectionReveal
//         id="partners"
//         className="relative overflow-hidden bg-[#F8F9FB]"
//       >
//         <PartnersSection />
//       </SectionReveal>

//       <Footer />
//     </main>
//   );
// }


import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProgramsHeroSection from "../components/program/ProgramsHeroSection";
import ProgramsIntroSection from "../components/program/ProgramsIntroSection";
import DetailedProgramsSection from "../components/program/DetailedProgramsSection";
import ApproachSection from "../components/program/ApproachSection";
import PartnersSection from "../components/PartneRSction";
import CTASection from "../components/CTASection";
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
      viewport={{
        once: true,
        amount: 0.14,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function ProgramsPage() {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/programs" />

      <ProgramsHeroSection />

      <SectionReveal
        id="programs-intro"
        className="relative bg-white py-8 sm:py-10 lg:py-12"
      >
        <ProgramsIntroSection />
      </SectionReveal>

      {/* FIX: Remove SectionReveal wrapper - render DetailedProgramsSection directly */}
      <section
        id="detailed-programs"
        className="relative overflow-hidden bg-[#EEF3FC] py-8 sm:py-10 lg:py-12"
      >
        <DetailedProgramsSection />
      </section>

      <SectionReveal
        id="approach"
        className="relative bg-white py-8 sm:py-10 lg:py-12"
      >
        <ApproachSection />
      </SectionReveal>

      <SectionReveal id="cta" className="relative bg-white">
        <CTASection />
      </SectionReveal>

      <SectionReveal
        id="partners"
        className="relative overflow-hidden bg-[#F8F9FB]"
      >
        <PartnersSection />
      </SectionReveal>

      <Footer />
    </main>
  );
}