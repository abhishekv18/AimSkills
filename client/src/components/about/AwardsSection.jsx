
import { motion } from "framer-motion";
import { BadgeCheck, Star, Trophy, Users, Building2, ThumbsUp } from "lucide-react";

const awards = [
  {
    title: "Paul & Laura Swanson",
    subtitle: "Premium Paul & Laura Swanson Award",
    image: "/Gemini_Generated_Image_t3dhjbt3dhjbt3dh.png",
    description: "Recognized for outstanding quality of training and exceptional trainee feedback management.",
  },
  {
    title: "Brown Eagle Award",
    subtitle: "Excellence in Training Delivery",
    image: "/Gemini_Generated_Image_3jabgz3jabgz3jab.png",
    description: "Awarded for best team coordination, trainer efficiency, and post-training feedback collection.",
  },
  {
    title: "Best Training Company",
    subtitle: "Quality & Impact Recognition",
    image: "/Gemini_Generated_Image_diihvldiihvldiih.png",
    description: "Honored by partners for maintaining the highest standards in skill development programs.",
  },
];

const highlights = [
  {
    icon: Trophy,
    text: "Best training company award",
  },
  {
    icon: Users,
    text: "Best team coordination",
  },
  {
    icon: Building2,
    text: "Trusted by leading partners",
  },
  {
    icon: ThumbsUp,
    text: "Excellence in feedback management",
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

const leftVariants = {
  hidden: { opacity: 0, x: -42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function AwardCard({ award }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="mb-4 flex justify-center">
        <div className="relative overflow-hidden rounded-lg bg-[#EEF3FC]/50 p-3">
          <motion.img
            src={award.image}
            alt={award.title}
            className="h-24 w-auto object-contain cursor-pointer"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#0D2B6B]/5 to-transparent" />
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="fill-[#B8952A] text-[#B8952A]"
              strokeWidth={1}
            />
          ))}
        </div>
        
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#0D2B6B]">
          {award.title}
        </h3>
        
        <p className="mt-1 text-xs font-bold text-[#B8952A]">
          {award.subtitle}
        </p>
        
        <p className="mt-3 text-xs leading-5 text-slate-500">
          {award.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/30 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
      >
        {/* Left - Description Panel */}
        <motion.div
          variants={leftVariants}
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D2B6B] to-[#1A4DA8] p-8 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#2E6FD9]/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#B8952A]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-20" />

          <div className="relative flex flex-col flex-1">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] backdrop-blur-md">
                <BadgeCheck size={16} strokeWidth={2} />
                Recognition
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Awards &{" "}
                <span className="text-[#D4AF55]">Recognition</span>
              </h2>

              <div className="mt-5 h-1 w-16 bg-[#D4AF55]" />

              <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base">
                We have been awarded by our partners as best training company for the quality of training, best team coordination, our trainer's efficiency and post training feedback collection & feedback management.
              </p>
            </div>

            {/* Highlights list */}
            <div className="mt-8 space-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#B8952A]/20 text-[#D4AF55]">
                      <Icon size={15} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Partner indicator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-[#1A4DA8] bg-[#2E6FD9] text-xs font-bold text-white"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-300">
                Awarded by leading industry partners
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right - Award Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}