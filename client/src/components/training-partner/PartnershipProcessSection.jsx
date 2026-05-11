// src/components/training-partner/PartnershipProcessSection.jsx
import { motion } from "framer-motion";
import { Handshake, MessageSquareText, Rocket, Workflow } from "lucide-react";

const steps = [
  {
 
    title: "Connect",
    description:
      "Share your institutional goals, training capacity, geography, and partnership interest.",
    icon: MessageSquareText,
  },
  {
   
    title: "Collaborate",
    description:
      "We align program models, roles, training delivery, documentation, and shared outcomes.",
    icon: Handshake,
  },
  {
  
    title: "Impact",
    description:
      "Together, we implement skill development initiatives and track measurable learning progress.",
    icon: Rocket,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PartnershipProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF3FC] via-white to-[#F8F9FB] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Workflow size={17} strokeWidth={2.2} />
            Partnership Process
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            A Simple Path to{" "}
            <span className="text-[#B8952A]">Meaningful Collaboration</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            From first conversation to implementation, our partnership process is
            structured, transparent, and built for long-term value.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="relative mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3"
        >
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#B8CCF0] to-transparent lg:block" />

          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.step}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#EEF3FC] opacity-90 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-14 left-8 h-28 w-28 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A] group-hover:-rotate-3 group-hover:scale-105">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                  
                  </div>

                  <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-[#0D2B6B]">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-1 w-12 rounded-full bg-[#B8952A] transition-all duration-300 group-hover:w-24" />

                  <p className="mt-6 text-sm font-medium leading-7 text-slate-600">
                    {item.description}
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
