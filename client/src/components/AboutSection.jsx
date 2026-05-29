import { motion } from "framer-motion";
import { HandHeart, Sprout, Target, UsersRound } from "lucide-react";

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -42,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 42,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const features = [
  {
    title: "Empowering Youth",
    description: "Helping young people build confidence, direction, and career readiness.",
    icon: UsersRound,
  },
  {
    title: "Skill-Based Training",
    description: "Delivering practical learning experiences aligned with employability.",
    icon: HandHeart,
  },
  {
    title: "Community Development",
    description: "Creating pathways for stronger families and sustainable local growth.",
    icon: Sprout,
  },
];

function FeatureItem({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group rounded-2xl border border-[#B8CCF0]/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
          <Icon size={21} strokeWidth={2.2} />
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-[#111827]">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF3FC] to-[#F8F9FB] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#B8CCF0]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-[#EEF3FC]" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" />

          <div className="relative overflow-hidden rounded-2xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
            <img
              src="/Gemini_Generated_Image_rdep1wrdep1wrdep.png"
              alt="AimSkills students in a training session"
              className="h-[340px] w-full rounded-xl object-cover sm:h-[430px] lg:h-[520px]"
            />

            <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                  <Target size={21} strokeWidth={2.2} />
                </div>

                <div>
                  <div className="text-sm font-extrabold text-[#111827]">
                    Learning that leads to livelihood
                  </div>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                    Building confidence, capability, and career pathways through
                    guided training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            About Aim Skills
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
          >
            Who We Are & What We{" "}
            <span className="text-[#B8952A]">Stand For</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-6 space-y-5 text-base font-medium leading-8 text-slate-700 sm:text-lg"
          >
            <p>
              Aim Skills is a young, vibrant, and purpose-driven organization
              dedicated to empowering individuals and uplifting communities
              across the nation.
            </p>

            <p>
              Our mission is to enlighten lives by providing opportunities to
              socially and economically marginalized youth through skill
              development and education.
            </p>

            <p>
              As a registered non-profit organization, we are committed to
              helping individuals build sustainable livelihoods by enhancing
              their employability and confidence.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            className="mt-8 grid gap-4"
          >
            {features.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
