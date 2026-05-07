
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import AboutHeroSection from "../components/about/AboutHeroSection";
// import AboutCardsSection from "../components/about/AboutCardsSection";
// import PhotoGallerySection from "../components/about/PhotoGallerySection";
// import AwardsSection from "../components/about/AwardsSection";
// import TimelineSection from "../components/about/TimelineSection";
// import CTASection from "../components/CTASection";
// import Footer from "../components/Footer";
// import PartnersSection from "../components/PartneRSction";

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

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
//       <Navbar activePath="/about" />

//       <AboutHeroSection />

//       <SectionReveal
//         id="about-cards"
//         className="relative bg-white py-10 sm:py-14 lg:py-16"
//       >
//         <AboutCardsSection />
//       </SectionReveal>

//       <SectionReveal
//         id="photo-gallery"
//         className="relative overflow-hidden bg-[#EEF3FC] py-10 sm:py-14 lg:py-16"
//       >
//         <PhotoGallerySection />
//       </SectionReveal>

//       <SectionReveal
//         id="awards"
//         className="relative bg-white py-10 sm:py-14 lg:py-16"
//       >
//         <AwardsSection />
//       </SectionReveal>

//       <SectionReveal
//         id="timeline"
//         className="relative overflow-hidden bg-[#EEF3FC] py-10 sm:py-14 lg:py-16"
//       >
//         <TimelineSection />
//       </SectionReveal>

//       <SectionReveal
//         id="cta"
//         className="relative bg-white"
//       >
//         <CTASection />
//       </SectionReveal>

//       <SectionReveal id="partners" className="relative bg-[#EEF3FC]">
//         <PartnersSection />
//       </SectionReveal>

//       <Footer />
//     </main>
//   );
// }

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutCardsSection from "../components/about/AboutCardsSection";
import PhotoGallerySection from "../components/about/PhotoGallerySection";
import AwardsSection from "../components/about/AwardsSection";
import TimelineSection from "../components/about/TimelineSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import PartnersSection from "../components/PartneRSction";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F9FB] text-[#111827] antialiased">
      <Navbar activePath="/about" />

      <AboutHeroSection />

      <SectionReveal
        id="about-cards"
        className="relative bg-white py-8 sm:py-10 lg:py-12"
      >
        <AboutCardsSection />
      </SectionReveal>

      <SectionReveal
        id="photo-gallery"
        className="relative overflow-hidden bg-[#EEF3FC] py-8 sm:py-10 lg:py-12"
      >
        <PhotoGallerySection />
      </SectionReveal>

      <SectionReveal
        id="awards"
        className="relative bg-white py-8 sm:py-10 lg:py-12"
      >
        <AwardsSection />
      </SectionReveal>

      <SectionReveal
        id="timeline"
        className="relative overflow-hidden bg-[#EEF3FC] py-8 sm:py-10 lg:py-12"
      >
        <TimelineSection />
      </SectionReveal>

      <SectionReveal
        id="cta"
        className="relative bg-white"
      >
        <CTASection />
      </SectionReveal>

      <SectionReveal id="partners" className="relative bg-[#EEF3FC]">
        <PartnersSection />
      </SectionReveal>

      <Footer />
    </main>
  );
}