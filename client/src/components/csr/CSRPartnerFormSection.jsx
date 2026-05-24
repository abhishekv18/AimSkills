
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Mail, MessageSquareText, Phone, Send, UserRound } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { ServerUrl } from "../../App";

const fields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Your name",
    icon: UserRound,
  },
  {
    label: "Organization",
    name: "organization",
    type: "text",
    placeholder: "Company or institution name",
    icon: Building2,
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "you@company.com",
    icon: Mail,
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "9898989898",
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

function InputField({ field, value, onChange }) {
  const Icon = field.icon;

  return (
    <label className="block">
      <span className="text-sm font-bold text-[#0D2B6B]">{field.label}</span>
      <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-[#1A4DA8]">
        <Icon size={18} strokeWidth={2.2} className="shrink-0 text-[#1A4DA8]" />
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-slate-400"
        />
      </span>
    </label>
  );
}

export default function CSRPartnerFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await axios.post(
        ServerUrl + "/api/csr/register",
        formData,
        { withCredentials: true }
      );

      toast.success(result.data.message || "Inquiry submitted successfully!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#0D2B6B",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px",
          fontWeight: "600",
        },
        iconTheme: {
          primary: "#F5E8C0",
          secondary: "#0D2B6B",
        },
      });
      
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong. Please try again.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#7F1D1D",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontWeight: "600",
          },
          iconTheme: {
            primary: "#FCA5A5",
            secondary: "#7F1D1D",
          },
        });
      } else if (error.request) {
        toast.error("Network error. Please check your connection and try again.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#7F1D1D",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontWeight: "600",
          },
          iconTheme: {
            primary: "#FCA5A5",
            secondary: "#7F1D1D",
          },
        });
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#7F1D1D",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontWeight: "600",
          },
          iconTheme: {
            primary: "#FCA5A5",
            secondary: "#7F1D1D",
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

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
            Let's Design a CSR Program With{" "}
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
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <InputField
                key={field.label}
                field={field}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            ))}
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-[#0D2B6B]">
              CSR Interest / Message
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your CSR focus area, location, beneficiaries, or project goals."
              value={formData.message}
              onChange={handleInputChange}
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-7 text-[#111827] shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#1A4DA8]"
            />
          </label>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={isLoading ? {} : { y: -2, scale: 1.02 }}
            whileTap={isLoading ? {} : { scale: 0.98 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-colors hover:bg-[#D4AF55] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Submit Partnership Inquiry
                <Send size={18} strokeWidth={2.4} />
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}