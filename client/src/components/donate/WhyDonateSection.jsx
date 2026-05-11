// src/components/donate/WhyDonateSection.jsx
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, HandHeart, Sprout } from "lucide-react";

const reasons = [
  {
    title: "Skill Development",
    stat: "1 student",
    caption: "can begin career-focused learning with your support.",
    icon: GraduationCap,
  },
  {
    title: "Women Empowerment",
    stat: "1 family",
    caption: "moves closer to dignity, confidence, and livelihood readiness.",
    icon: HandHeart,
  },
  {
    title: "Rural Development",
    stat: "1 village",
    caption: "gets access to awareness, training, and development pathways.",
    icon: Sprout,
  },
  {
    title: "Employment Opportunities",
    stat: "1 career",
    caption: "can start with practical training and guided placement support.",
    icon: BriefcaseBusiness,
  },
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyDonateSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            Why Your Donation Matters
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            A Contribution That Creates{" "}
            <span className="text-[#B8952A]">Real Opportunity</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Your support helps AimSkills deliver education, training, guidance,
            and community development where it is needed most.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
                    {reason.title}
                  </h3>

                  <div className="mt-4 text-2xl font-extrabold text-[#B8952A]">
                    {reason.stat}
                  </div>

                  <p className="mt-2 text-sm font-medium leading-7 text-slate-600">
                    {reason.caption}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
