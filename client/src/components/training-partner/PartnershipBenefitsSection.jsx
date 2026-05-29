// src/components/training-partner/PartnershipBenefitsSection.jsx
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Handshake,
  Network,
  Sprout,
  UsersRound,
} from "lucide-react";

const benefitBlocks = [
  {
    eyebrow: "Nationwide Skilling Network",
    title: "Join a Training Ecosystem Designed for Reach & Reliability",
    description:
      "Aim Skills collaborates with institutions, training centers, corporate partners, and skilling agencies to create structured programs that can scale across communities and learner groups.",
    image: "/Gemini_Generated_Image_ki326tki326tki32.png",
    icon: Network,
    direction: "image-left",
    highlights: [
      "Industry Collaboration",
      "Skilled Workforce",
      "Training Infrastructure",
    ],
  },
  {
    eyebrow: "Institutional Growth",
    title: "Build Long-Term Value Through Professional Collaboration",
    description:
      "Our partnership model supports sustainable growth through program design, trainer enablement, field execution, CSR alignment, and measurable learning outcomes.",
    image: "/Gemini_Generated_Image_ibfxpcibfxpcibfx.png",
    icon: Building2,
    direction: "content-left",
    highlights: [
      "Community Development",
      "CSR Opportunities",
      "Scalable Program Delivery",
    ],
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function BenefitBlock({ block }) {
  const Icon = block.icon;
  const imageFirst = block.direction === "image-left";

  const imageContent = (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md"
    >
      <img
        src={block.image}
        alt={block.title}
        className="h-[340px] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
      />
      <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/58 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
            <Icon size={21} strokeWidth={2.2} />
          </div>
          <div>
            <p className="text-sm font-extrabold text-[#0D2B6B]">
              {block.eyebrow}
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
              Partnership built on structure, trust, and measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const textContent = (
    <motion.div variants={itemVariants} className="flex items-center">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
          <Icon size={17} strokeWidth={2.2} />
          {block.eyebrow}
        </div>

        <h3 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl">
          {block.title}
        </h3>

        <div className="mt-6 h-1 w-20 rounded-full bg-[#B8952A]" />

        <p className="mt-6 text-base font-medium leading-8 text-slate-700 sm:text-lg">
          {block.description}
        </p>

        <div className="mt-8 grid gap-3">
          {block.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8F9FB] px-4 py-3 text-sm font-bold text-[#0D2B6B]"
            >
              <CheckCircle2
                size={18}
                strokeWidth={2.4}
                className="shrink-0 text-[#B8952A]"
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}

export default function PartnershipBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Handshake size={17} strokeWidth={2.2} />
            Partnership Benefits
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Collaborate for{" "}
            <span className="text-[#B8952A]">Training-Led Growth</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            A professional partnership model for institutions and organizations
            committed to skill development, employment readiness, and community
            transformation.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {benefitBlocks.map((block) => (
            <BenefitBlock key={block.title} block={block} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
