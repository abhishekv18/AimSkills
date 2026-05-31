// src/components/donate/DonorSupportSection.jsx
import { motion } from "framer-motion";
import { HelpCircle, Mail, MessageSquareText, Phone } from "lucide-react";

const supportItems = [
  {
    title: "Donation Guidance",
    description: "Need help choosing a donation method? Our team can guide you.",
    icon: HelpCircle,
  },
  {
    title: "Email Assistance",
    description: "Write to us for donation confirmation or contribution queries.",
    icon: Mail,
    href: "mailto:info@aimskills.in",
  },
  {
    title: "Call Support",
    description: "Connect with our team for direct donation support.",
    icon: Phone,
    href: "tel:+917248776407",
  },
];

const faqs = [
  "Can I donate through UPI?",
  "Can I request donation confirmation?",
  "Can organizations support specific programs?",
];

export default function DonorSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <MessageSquareText size={17} strokeWidth={2.2} />
            Donor Support
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            We’re Here to Help You{" "}
            <span className="text-[#B8952A]">Give Confidently</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Whether you are an individual donor or an organization, our team can
            help with donation guidance and program support.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {supportItems.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Wrapper
                  href={item.href}
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
{/* 
        <div className="mt-10 rounded-3xl border border-[#B8CCF0]/70 bg-[#EEF3FC] p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold text-[#0D2B6B]">
            Quick donor questions
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
              >
                {faq}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
