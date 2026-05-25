
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { ServerUrl } from "../../App";

const fields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    icon: UserRound,
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    icon: Mail,
  },
  {
    label: "Mobile Number",
    name: "phone",
    type: "tel",
    placeholder: "9898989898",
    icon: Phone,
  },
];

const supportPoints = [
  "Quick Response",
  "Dedicated Support",
  "Partnership Assistance",
  "Training Guidance",
];

function InputField({ field, value, onChange }) {
  const Icon = field.icon;

  return (
    <label className={field.label === "Mobile Number" ? "block sm:col-span-2" : "block"}>
      <span className="text-sm font-bold text-[#0D2B6B]">{field.label}</span>
      <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-[#B8952A]">
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

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
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
        ServerUrl + "/api/contact/register",
        formData,
        { withCredentials: true }
      );

      toast.success(result.data.message || "Message sent successfully!", {
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
      id="contact-form"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <MessageSquareText size={17} strokeWidth={2.2} />
            Send a Message
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            We Would Love to{" "}
            <span className="text-[#B8952A]">Connect</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
            We would love to connect and help create meaningful opportunities
            together.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-8">
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
              <span className="text-sm font-bold text-[#0D2B6B]">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us how we can help you."
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-7 text-[#111827] shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#B8952A]"
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
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} strokeWidth={2.4} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-[#EEF3FC]" />
         

          <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
            <img
              src="/src/assets/Gemini_Generated_Image_m4vuzwm4vuzwm4vu.png"
              alt="AimSkills contact and support team"
              className="h-[360px] w-full rounded-2xl object-cover sm:h-[520px]"
            />
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                  <ShieldCheck size={21} strokeWidth={2.2} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#0D2B6B]">
                    Professional support, meaningful guidance
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                    Our team helps with programs, partnerships, volunteering,
                    and impact opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {supportPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-[#B8CCF0]/70 bg-white px-4 py-3 text-sm font-bold text-[#0D2B6B] shadow-sm"
              >
                <BadgeCheck
                  size={17}
                  strokeWidth={2.3}
                  className="shrink-0 text-[#B8952A]"
                />
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}