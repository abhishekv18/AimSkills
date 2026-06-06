
// import { motion } from "framer-motion";
// import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

// const cards = [
//   {
//     title: "Our Company",
//     description:
//       "AimSkills is an initiative by industry experts possessing rich experience in their respective domains. It was envisioned as a common platform for youth to come forward and join hands in reforming and rebuilding our society. We strive to mobilize youth to understand their responsibilities towards society and inspire them to take up skills-oriented training programs, leading to better earning and a bright future.",
//     icon: Lightbulb,
//     href: "/about",
//     highlight: "Industry-led initiative",
//   },
//   {
//     title: "Our Mission",
//     description:
//       "Our mission is to empower communities, leading self-sustaining lives filled with dignity and self-worth. We aim to establish educational institutions at primary, secondary, and undergraduate levels to provide quality education to the upcoming generation. We are committed to providing equal opportunities through concessions, scholarships, and assistance to children from poor, needy, and deserving families.",
//     icon: Target,
//     href: "/programs",
//     highlight: "Education for all",
//   },
//   {
//     title: "Our Passion",
//     description:
//       "We provide quality free education and skill training to underprivileged children and youth. One of our long-term goals is to establish model skill centers for underprivileged children. We scan interior and remote villages, interact with local stakeholders, and mobilize unemployed rural youth aged 18-35 years. They receive proper training in various disciplines and are groomed to employable levels with complete placement support.",
//     icon: HeartHandshake,
//     href: "/impact",
//     highlight: "Skills to livelihood",
//   },
// ];

// const sectionVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 26, scale: 0.97 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function AboutCard({ card, index }) {
//   const Icon = card.icon;

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
//       className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8"
//     >
//       <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//         <Icon size={24} strokeWidth={2} />
//       </div>

//       <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[#F5E8C0]/50 px-2.5 py-1 text-xs font-bold text-[#B8952A] w-fit">
//         {card.highlight}
//       </div>

//       <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#0D2B6B]">
//         {card.title}
//       </h3>

//       <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
//         {card.description}
//       </p>

//       <a
//         href={card.href}
//         className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#1A4DA8] transition-colors hover:text-[#0D2B6B]"
//       >
//         Learn more
//         <ArrowRight size={14} strokeWidth={2.5} />
//       </a>
//     </motion.article>
//   );
// }

// export default function AboutCardsSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
//       <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#EEF3FC]/50 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/30 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.18 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-3xl text-center">
//           <motion.div
//             variants={cardVariants}
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-4 py-1.5 text-sm font-bold text-[#1A4DA8]"
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
//             Our Foundation
//           </motion.div>

//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
//           >
//             Built on Purpose, Mission, and Passion
//           </motion.h2>

//           <motion.p
//             variants={cardVariants}
//             className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
//           >
//             The values that guide our work and shape every learning opportunity
//             we create.
//           </motion.p>
//         </div>

//         <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
//           {cards.map((card, index) => (
//             <AboutCard key={card.title} card={card} index={index} />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

const cards = [
  {
    title: "Our Company",
    description:
      "AimSkills is an initiative by industry experts possessing rich experience in their respective domains. It was envisioned as a common platform for youth to come forward and join hands in reforming and rebuilding our society. We strive to mobilize youth to understand their responsibilities towards society and inspire them to take up skills-oriented training programs, leading to better earning and a bright future.",
    icon: Lightbulb,
    href: "/about",
    highlight: "Industry-led initiative",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower communities, leading self-sustaining lives filled with dignity and self-worth. We aim to establish educational institutions at primary, secondary, and undergraduate levels to provide quality education to the upcoming generation. We are committed to providing equal opportunities through concessions, scholarships, and assistance to children from poor, needy, and deserving families.",
    icon: Target,
    href: "/programs",
    highlight: "Education for all",
  },
  {
    title: "Our Passion",
    description:
      "We provide quality free education and skill training to underprivileged children and youth. One of our long-term goals is to establish model skill centers for underprivileged children. We scan interior and remote villages, interact with local stakeholders, and mobilize unemployed rural youth aged 18-35 years. They receive proper training in various disciplines and are groomed to employable levels with complete placement support.",
    icon: HeartHandshake,
    href: "/impact",
    highlight: "Skills to livelihood",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function AboutCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-7 lg:p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      {/* Icon */}
      <div className="mb-4 sm:mb-5 md:mb-6 flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon size={22} strokeWidth={2} className="sm:size-[24px]" />
      </div>

      {/* Highlight Badge */}
      <div className="mb-1.5 sm:mb-2 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#F5E8C0]/50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-[#B8952A] w-fit">
        {card.highlight}
      </div>

      {/* Title */}
      <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-extrabold tracking-tight text-[#0D2B6B]">
        {card.title}
      </h3>

      {/* Description */}
      <p className="mt-3 sm:mt-4 flex-1 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
        {card.description}
      </p>

      {/* Learn More Link */}
      <a
        href={card.href}
        className="mt-5 sm:mt-6 inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-[#1A4DA8] transition-colors hover:text-[#0D2B6B] group/link"
      >
        Learn more
        <ArrowRight 
          size={13} 
          strokeWidth={2.5} 
          className="sm:size-[14px] transition-transform duration-300 group-hover/link:translate-x-1" 
        />
      </a>
    </motion.article>
  );
}

export default function AboutCardsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-16 sm:-left-20 top-0 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#EEF3FC]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-20 bottom-0 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#F5E8C0]/30 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            variants={cardVariants}
            className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-[#1A4DA8]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
            Our Foundation
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={cardVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]"
          >
            Built on Purpose, Mission, and Passion
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={cardVariants}
            className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-slate-600"
          >
            The values that guide our work and shape every learning opportunity
            we create.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}