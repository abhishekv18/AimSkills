// // src/components/donate/DonorSupportSection.jsx
// import { motion } from "framer-motion";
// import { HelpCircle, Mail, MessageSquareText, Phone } from "lucide-react";

// const supportItems = [
//   {
//     title: "Donation Guidance",
//     description: "Need help choosing a donation method? Our team can guide you.",
//     icon: HelpCircle,
//   },
//   {
//     title: "Email Assistance",
//     description: "Write to us for donation confirmation or contribution queries.",
//     icon: Mail,
//     href: "mailto:info@aimskills.in",
//   },
//   {
//     title: "Call Support",
//     description: "Connect with our team for direct donation support.",
//     icon: Phone,
//     href: "tel:+917248776407",
//   },
// ];

// const faqs = [
//   "Can I donate through UPI?",
//   "Can I request donation confirmation?",
//   "Can organizations support specific programs?",
// ];

// export default function DonorSupportSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <MessageSquareText size={17} strokeWidth={2.2} />
//             Donor Support
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             We’re Here to Help You{" "}
//             <span className="text-[#B8952A]">Give Confidently</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Whether you are an individual donor or an organization, our team can
//             help with donation guidance and program support.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </div>

//         <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
//           {supportItems.map((item) => {
//             const Icon = item.icon;
//             const Wrapper = item.href ? "a" : "div";

//             return (
//               <motion.div
//                 key={item.title}
//                 whileHover={{ y: -6, scale: 1.02 }}
//               >
//                 <Wrapper
//                   href={item.href}
//                   className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//                 >
//                   <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
//                     <Icon size={23} strokeWidth={2.2} />
//                   </div>

//                   <h3 className="mt-6 text-lg font-extrabold text-[#0D2B6B]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </Wrapper>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-20 sm:-left-28 top-12 sm:top-16 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 sm:-right-28 bottom-6 sm:bottom-8 h-60 sm:h-72 md:h-80 w-60 sm:w-72 md:w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A4DA8] shadow-sm">
            <MessageSquareText size={15} strokeWidth={2.2} className="sm:size-[17px]" />
            Donor Support
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            We're Here to Help You{" "}
            <span className="text-[#B8952A]">Give Confidently</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-slate-700">
            Whether you are an individual donor or an organization, our team can
            help with donation guidance and program support.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-5 sm:mt-6 md:mt-7 h-1 w-16 sm:w-20 rounded-full bg-[#B8952A]" />
        </div>

        {/* Support Items Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A4DA8] transition-all duration-300 group-hover:bg-[#F5E8C0] group-hover:text-[#B8952A]">
                    <Icon size={20} strokeWidth={2.2} className="sm:size-[22px] md:size-[23px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-extrabold text-[#0D2B6B]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium leading-5 sm:leading-6 md:leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#B8CCF0]/40 bg-[#EEF3FC]/50 p-5 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg font-extrabold text-[#0D2B6B] text-center mb-4 sm:mb-5">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-2.5 sm:gap-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-white px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#0D2B6B] shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <span className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-[#B8952A] text-white text-[10px] sm:text-xs font-bold">
                    ?
                  </span>
                  {faq}
                </motion.div>
              ))}
            </div>
            <p className="mt-4 sm:mt-5 text-center text-[10px] sm:text-xs text-slate-500">
              Contact us for more information about donations and support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}