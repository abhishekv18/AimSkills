// src/components/csr/CSRPartnerFormSection.jsx
import { motion } from "framer-motion";
import { Building2, Mail, MessageSquareText, Phone, Send, UserRound } from "lucide-react";

const fields = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Your name",
    icon: UserRound,
  },
  {
    label: "Organization",
    type: "text",
    placeholder: "Company or institution name",
    icon: Building2,
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "you@company.com",
    icon: Mail,
  },
  {
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 00000 00000",
    icon: Phone,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

function InputField({ field }) {
  const Icon = field.icon;

  return (
    <label className="block">
      <span className="text-sm font-bold text-[#0D2B6B]">{field.label}</span>
      <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-[#1A4DA8]">
        <Icon size={18} strokeWidth={2.2} className="shrink-0 text-[#1A4DA8]" />
        <input
          type={field.type}
          placeholder={field.placeholder}
          className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-slate-400"
        />
      </span>
    </label>
  );
}

export default function CSRPartnerFormSection() {
  return (
    <section
      id="partner-form"
      className="relative overflow-hidden bg-[#F8F9FB] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"
      >
        <motion.div variants={itemVariants}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <Send size={17} strokeWidth={2.2} />
            Become a CSR Partner
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Let’s Design a CSR Program With{" "}
            <span className="text-[#B8952A]">Measurable Impact</span>
          </h2>

          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
            Share your CSR goals with us. Our team will help you explore a
            partnership model aligned with your funding priorities, geography,
            beneficiaries, and reporting needs.
          </p>

          <div className="mt-8 rounded-2xl border border-[#B8CCF0]/70 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                <MessageSquareText size={21} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0D2B6B]">
                  Prefer a direct conversation?
                </h3>
                <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                  Email us at contact@aimskills.org or call +91 84829 69631.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          variants={itemVariants}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <InputField key={field.label} field={field} />
            ))}
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-[#0D2B6B]">
              CSR Interest / Message
            </span>
            <textarea
              rows={5}
              placeholder="Tell us about your CSR focus area, location, beneficiaries, or project goals."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-7 text-[#111827] shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#1A4DA8]"
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-colors hover:bg-[#D4AF55] sm:w-auto"
          >
            Submit Partnership Inquiry
            <Send size={18} strokeWidth={2.4} />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
