// src/components/volunteer/VolunteerOpportunitiesSection.jsx
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Laptop, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const opportunities = [
  {
    icon: BookOpen,
    title: "Guest Lectures",
    description: "Share your industry expertise through interactive sessions and inspire the next generation of professionals.",
    commitment: "2-4 hours/session",
    color: "bg-[#EEF3FC] text-[#1A4DA8]",
    borderColor: "border-[#B8CCF0]/60",
    hoverColor: "hover:border-[#1A4DA8]/40",
  },
  {
    icon: Briefcase,
    title: "Career Mentorship",
    description: "Guide students through career decisions, resume building, and interview preparation one-on-one.",
    commitment: "1-2 hours/week",
    color: "bg-[#F5E8C0] text-[#B8952A]",
    borderColor: "border-[#D4AF55]/40",
    hoverColor: "hover:border-[#B8952A]/40",
  },
  {
    icon: Laptop,
    title: "Skill Workshops",
    description: "Lead hands-on workshops in digital skills, soft skills, or technical domains for small groups.",
    commitment: "3-6 hours/workshop",
    color: "bg-[#E8F5E9] text-emerald-600",
    borderColor: "border-emerald-200",
    hoverColor: "hover:border-emerald-400",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Help organize career fairs, awareness drives, and community outreach programs in your city.",
    commitment: "Flexible hours",
    color: "bg-[#F3E5F5] text-purple-600",
    borderColor: "border-purple-200",
    hoverColor: "hover:border-purple-400",
  },
  {
    icon: GraduationCap,
    title: "Curriculum Support",
    description: "Contribute to course design, create learning materials, or review training content for relevance.",
    commitment: "Project-based",
    color: "bg-[#FFF3E0] text-orange-600",
    borderColor: "border-orange-200",
    hoverColor: "hover:border-orange-400",
  },
  {
    icon: Heart,
    title: "Student Support",
    description: "Provide emotional support, motivation, and guidance to students from underserved communities.",
    commitment: "2-3 hours/week",
    color: "bg-[#FCE4EC] text-pink-600",
    borderColor: "border-pink-200",
    hoverColor: "hover:border-pink-400",
  },
];

const benefits = [
  "Flexible scheduling that works around your availability",
  "Training and orientation provided for all volunteer roles",
  "Recognition certificates and leadership opportunities",
  "Join a network of 500+ passionate change-makers",
  "Make measurable impact on youth employment outcomes",
];

export default function VolunteerOpportunitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Users size={17} strokeWidth={2.2} />
            Ways to Contribute
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Find Your Perfect{" "}
            <span className="text-[#B8952A]">Volunteer Role</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Whether you have a few hours or want to make a long-term commitment,
            there's a meaningful way for you to contribute.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative rounded-2xl border ${opportunity.borderColor} bg-white p-6 shadow-sm transition-all duration-300 ${opportunity.hoverColor} hover:shadow-xl`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${opportunity.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2B6B]">
                      {opportunity.title}
                    </h3>
                    <span className="mt-1 inline-block rounded-full bg-[#F8F9FB] px-3 py-1 text-xs font-semibold text-slate-600">
                      {opportunity.commitment}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  {opportunity.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#1A4DA8] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRight size={16} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/50 bg-gradient-to-br from-[#EEF3FC] to-white p-8 shadow-lg sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8CCF0]/30 blur-2xl" />
            
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
                  Why volunteers choose AimSkills
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Join a supportive community where your contribution creates real, measurable impact.
                </p>
              </div>

              <div className="flex-1 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0D2B6B] shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2.4}
                      className="shrink-0 text-[#B8952A]"
                    />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <a
            href="#volunteer-form"
            className="inline-flex items-center gap-2 rounded-xl bg-[#B8952A] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-[#B8952A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] hover:shadow-xl"
          >
            Apply to Volunteer Now
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}