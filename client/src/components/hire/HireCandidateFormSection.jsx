// // src/components/hire/HireCandidateFormSection.jsx
// import { motion } from "framer-motion";
// import {
//   BadgeCheck,
//   BriefcaseBusiness,
//   Building2,
//   Mail,
//   Phone,
//   Send,
//   ShieldCheck,
//   UserRound,
// } from "lucide-react";

// const fields = [
//   {
//     label: "Company Name",
//     type: "text",
//     placeholder: "Enter company name",
//     icon: Building2,
//   },
//   {
//     label: "HR / Contact Person",
//     type: "text",
//     placeholder: "Enter contact person name",
//     icon: UserRound,
//   },
//   {
//     label: "Official Email",
//     type: "email",
//     placeholder: "hr@company.com",
//     icon: Mail,
//   },
//   {
//     label: "Mobile Number",
//     type: "tel",
//     placeholder: "+91 00000 00000",
//     icon: Phone,
//   },
//   {
//     label: "Job Role Requirement",
//     type: "text",
//     placeholder: "Sales Executive, Data Entry, Retail Associate...",
//     icon: BriefcaseBusiness,
//   },
// ];

// const benefits = [
//   "Industry-ready talent",
//   "Pre-trained candidates",
//   "Faster hiring process",
//   "Placement-ready profiles",
// ];

// function InputField({ field }) {
//   const Icon = field.icon;

//   return (
//     <label className={field.label === "Job Role Requirement" ? "block sm:col-span-2" : "block"}>
//       <span className="text-sm font-bold text-[#0D2B6B]">{field.label}</span>
//       <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-[#B8952A]">
//         <Icon size={18} strokeWidth={2.2} className="shrink-0 text-[#1A4DA8]" />
//         <input
//           type={field.type}
//           placeholder={field.placeholder}
//           className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-slate-400"
//         />
//       </span>
//     </label>
//   );
// }

// export default function HireCandidateFormSection() {
//   return (
//     <section
//       id="hire-form"
//       className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, x: -42 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <BriefcaseBusiness size={17} strokeWidth={2.2} />
//             Hiring Request
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Request Trained Candidates From{" "}
//             <span className="text-[#B8952A]">AimSkills</span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
//             Partner with AimSkills to hire skilled candidates prepared for
//             real-world careers.
//           </p>

//           <form className="mt-8 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-8">
//             <div className="grid gap-5 sm:grid-cols-2">
//               {fields.map((field) => (
//                 <InputField key={field.label} field={field} />
//               ))}
//             </div>

//             <label className="mt-5 block">
//               <span className="text-sm font-bold text-[#0D2B6B]">
//                 Hiring Requirements
//               </span>
//               <textarea
//                 rows={5}
//                 placeholder="Share number of candidates, job location, required skills, salary range, and hiring timeline."
//                 className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-7 text-[#111827] shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#B8952A]"
//               />
//             </label>

//             <motion.button
//               type="submit"
//               whileHover={{ y: -2, scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-7 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-colors hover:bg-[#D4AF55] sm:w-auto"
//             >
//               Request Candidates
//               <Send size={18} strokeWidth={2.4} />
//             </motion.button>
//           </form>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 42 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//           className="relative"
//         >
//           <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-white" />
//           <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" />

//           <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
//             <img
//               src="/assets/hire/form.jpg"
//               alt="Hiring trained candidates from AimSkills"
//               className="h-[360px] w-full rounded-2xl object-cover sm:h-[520px]"
//             />
//             <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0D2B6B]/65 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur-md">
//               <div className="flex items-start gap-4">
//                 <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
//                   <ShieldCheck size={21} strokeWidth={2.2} />
//                 </div>

//                 <div>
//                   <p className="text-sm font-extrabold text-[#0D2B6B]">
//                     Hire with confidence
//                   </p>
//                   <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
//                     Connect with candidates trained for interviews, practical
//                     skills, and workplace readiness.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 grid gap-3 sm:grid-cols-2">
//             {benefits.map((benefit) => (
//               <div
//                 key={benefit}
//                 className="flex items-center gap-2 rounded-xl border border-[#B8CCF0]/70 bg-white px-4 py-3 text-sm font-bold text-[#0D2B6B] shadow-sm"
//               >
//                 <BadgeCheck
//                   size={17}
//                   strokeWidth={2.3}
//                   className="shrink-0 text-[#B8952A]"
//                 />
//                 {benefit}
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/hire/HireCandidateFormSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Mail,
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
    label: "Company Name",
    name: "companyName",
    type: "text",
    placeholder: "Enter company name",
    icon: Building2,
  },
  {
    label: "HR / Contact Person",
    name: "name",
    type: "text",
    placeholder: "Enter contact person name",
    icon: UserRound,
  },
  {
    label: "Official Email",
    name: "email",
    type: "email",
    placeholder: "hr@company.com",
    icon: Mail,
  },
  {
    label: "Mobile Number",
    name: "phone",
    type: "tel",
    placeholder: "9898989898",
    icon: Phone,
  },
  {
    label: "Job Role Requirement",
    name: "role",
    type: "text",
    placeholder: "Sales Executive, Data Entry, Retail Associate...",
    icon: BriefcaseBusiness,
  },
];

const benefits = [
  "Industry-ready talent",
  "Pre-trained candidates",
  "Faster hiring process",
  "Placement-ready profiles",
];

function InputField({ field, value, onChange }) {
  const Icon = field.icon;

  return (
    <label className={field.label === "Job Role Requirement" ? "block sm:col-span-2" : "block"}>
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

export default function HireCandidateFormSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    role: "",
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
        ServerUrl + "/api/hire/register",
        formData,
        { withCredentials: true }
      );

      toast.success(result.data.message || "Hiring request submitted successfully!", {
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
        companyName: "",
        name: "",
        email: "",
        phone: "",
        role: "",
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
      id="hire-form"
      className="relative overflow-hidden bg-[#EEF3FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.08)_1px,transparent_0)] bg-[length:30px_30px] opacity-30" />
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <BriefcaseBusiness size={17} strokeWidth={2.2} />
            Hiring Request
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Request Trained Candidates From{" "}
            <span className="text-[#B8952A]">AimSkills</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
            Partner with AimSkills to hire skilled candidates prepared for
            real-world careers.
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
              <span className="text-sm font-bold text-[#0D2B6B]">
                Hiring Requirements
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share number of candidates, job location, required skills, salary range, and hiring timeline."
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
                  Submitting...
                </>
              ) : (
                <>
                  Request Candidates
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
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-white" />
          {/* <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#F5E8C0]" /> */}

          <div className="relative overflow-hidden rounded-3xl border border-[#B8CCF0]/70 bg-white p-2 shadow-md">
            <img
              src="/src/assets/Gemini_Generated_Image_n6urtvn6urtvn6ur.png"
              alt="Hiring trained candidates from AimSkills"
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
                    Hire with confidence
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                    Connect with candidates trained for interviews, practical
                    skills, and workplace readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 rounded-xl border border-[#B8CCF0]/70 bg-white px-4 py-3 text-sm font-bold text-[#0D2B6B] shadow-sm"
              >
                <BadgeCheck
                  size={17}
                  strokeWidth={2.3}
                  className="shrink-0 text-[#B8952A]"
                />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}