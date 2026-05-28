// // src/components/donate/DonationMethodsSection.jsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   Copy,
//   Download,
//   HeartHandshake,
//   QrCode,
//   ShieldCheck,
//   Smartphone,
// } from "lucide-react";

// const upiId = "aimskills@upi";

// const trustItems = ["100% Secure Donation", "Direct Impact", "Trusted NGO"];

// export default function DonationMethodsSection() {
//   const [copied, setCopied] = useState(false);

//   const copyUpi = async () => {
//     await navigator.clipboard.writeText(upiId);
//     setCopied(true);
//     window.setTimeout(() => setCopied(false), 1800);
//   };

//   return (
//     <section
//       id="donation-methods"
//       className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
//     >
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <ShieldCheck size={17} strokeWidth={2.2} />
//             Secure Donation Methods
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Donate Securely Through{" "}
//             <span className="text-[#B8952A]">QR or UPI</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             Choose a simple, trusted donation method and help create meaningful
//             learning opportunities.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </div>

//         <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
//           <motion.div
//             whileHover={{ y: -8, scale: 1.015 }}
//             className="relative overflow-hidden rounded-3xl border border-[#D4AF55]/50 bg-white/85 p-6 shadow-md backdrop-blur-xl sm:p-8"
//           >
//             <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F5E8C0]/90 blur-3xl" />

//             <div className="relative">
//               <div className="mb-6 flex items-center gap-3">
//                 <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F5E8C0] text-[#B8952A]">
//                   <QrCode size={24} strokeWidth={2.3} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
//                     Scan & Donate Securely
//                   </h3>
//                   <p className="mt-1 text-sm font-medium text-slate-500">
//                     Use any UPI app to scan the QR code.
//                   </p>
//                 </div>
//               </div>

//               <div className="mx-auto flex max-w-sm items-center justify-center rounded-3xl border border-slate-200 bg-[#F8F9FB] p-6 shadow-sm">
//                 <img
//                   src="/assets/donate/upi-qr.png"
//                   alt="AimSkills donation QR code"
//                   className="h-64 w-64 rounded-2xl object-contain"
//                 />
//               </div>

//               <a
//                 href="/assets/donate/upi-qr.png"
//                 download
//                 className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//               >
//                 <Download size={18} strokeWidth={2.4} />
//                 Download QR
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -8, scale: 1.015 }}
//             className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#EEF3FC] to-white p-6 shadow-md sm:p-8"
//           >
//             <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#B8CCF0]/60 blur-3xl" />

//             <div className="relative">
//               <div className="mb-6 flex items-center gap-3">
//                 <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-sm">
//                   <Smartphone size={24} strokeWidth={2.3} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
//                     Donate via UPI ID
//                   </h3>
//                   <p className="mt-1 text-sm font-medium text-slate-500">
//                     Copy UPI ID or open your payment app.
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-[#B8CCF0]/70 bg-white p-5 shadow-sm">
//                 <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
//                   UPI ID
//                 </p>
//                 <div className="mt-3 break-all text-2xl font-extrabold tracking-tight text-[#0D2B6B]">
//                   {upiId}
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
//                 <button
//                   type="button"
//                   onClick={copyUpi}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-4 text-base font-bold text-white shadow-md shadow-[#0D2B6B]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9]"
//                 >
//                   <Copy size={18} strokeWidth={2.4} />
//                   {copied ? "Copied" : "Copy UPI"}
//                 </button>

//                 <a
//                   href={`upi://pay?pa=${upiId}&pn=AimSkills&cu=INR`}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8952A] px-6 py-4 text-base font-extrabold text-white shadow-md shadow-[#B8952A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55]"
//                 >
//                   <HeartHandshake size={18} strokeWidth={2.4} />
//                   Open UPI App
//                 </a>
//               </div>

//               <div className="mt-7 grid gap-3">
//                 {trustItems.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#0D2B6B]"
//                   >
//                     <CheckCircle2
//                       size={18}
//                       strokeWidth={2.4}
//                       className="text-[#B8952A]"
//                     />
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/donate/DonationMethodsSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Copy,
  Download,
  HeartHandshake,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const upiId = "7248776407@okbizaxis";

const trustItems = ["100% Secure Donation", "Direct Impact", "Trusted NGO"];

export default function DonationMethodsSection() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);

  const copyUpi = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedMethod(null);
  };

  return (
    <section
      id="donation-methods"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#F8F9FB] px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <ShieldCheck size={17} strokeWidth={2.2} />
            Secure Donation Methods
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Donate Securely Through{" "}
            <span className="text-[#B8952A]">QR or UPI</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Choose a simple, trusted donation method and help create meaningful
            learning opportunities.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {/* QR Code Option */}
                <motion.button
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMethodSelect("qr")}
                  className="group relative overflow-hidden rounded-3xl border-2 border-transparent bg-white p-8 text-left shadow-xl transition-all duration-300 hover:border-[#B8952A]/50 hover:shadow-2xl hover:shadow-[#B8952A]/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5E8C0]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5E8C0] to-[#D4AF55] shadow-lg shadow-[#B8952A]/20">
                      <QrCode size={32} strokeWidth={2} className="text-[#0D2B6B]" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
                      Scan QR Code
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      Quick and easy. Just scan with any UPI app to donate instantly.
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#B8952A]">
                      <span>Choose this method</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#B8952A]" />
                      <div className="h-2 w-2 rounded-full bg-[#D4AF55]/40" />
                      <div className="h-2 w-2 rounded-full bg-[#D4AF55]/40" />
                    </div>
                  </div>
                </motion.button>

                {/* UPI ID Option */}
                <motion.button
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMethodSelect("upi")}
                  className="group relative overflow-hidden rounded-3xl border-2 border-transparent bg-white p-8 text-left shadow-xl transition-all duration-300 hover:border-[#1A4DA8]/50 hover:shadow-2xl hover:shadow-[#1A4DA8]/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8CCF0]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B8CCF0] to-[#1A4DA8] shadow-lg shadow-[#0D2B6B]/20">
                      <Smartphone size={32} strokeWidth={2} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-[#0D2B6B]">
                      Pay via UPI ID
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      Copy our UPI ID and donate directly from your preferred payment app.
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1A4DA8]">
                      <span>Choose this method</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#1A4DA8]" />
                      <div className="h-2 w-2 rounded-full bg-[#B8CCF0]/40" />
                      <div className="h-2 w-2 rounded-full bg-[#B8CCF0]/40" />
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            )}

            {step === 2 && selectedMethod === "qr" && (
              <motion.div
                key="qr-details"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="relative overflow-hidden rounded-3xl border border-[#D4AF55]/50 bg-white/85 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F5E8C0]/90 blur-3xl" />
                
                <button
                  onClick={handleBack}
                  className="group mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#0D2B6B]"
                >
                  <ChevronRight size={18} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                  Back to payment methods
                </button>

                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-[#F5E8C0] text-[#B8952A]">
                    <QrCode size={32} strokeWidth={2.3} />
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-[#0D2B6B]">
                    Scan & Donate Instantly
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600">
                    Open any UPI app on your phone, scan this QR code, and your donation will be processed securely.
                  </p>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-10 flex max-w-xs items-center justify-center rounded-3xl border-2 border-[#D4AF55]/30 bg-[#F8F9FB] p-8 shadow-lg"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#F5E8C0]/20 blur-xl" />
                      <img
                        src="/src/assets/WhatsApp Image 2026-05-26 at 10.11.00 PM.jpeg"
                        alt="AimSkills donation QR code"
                        className="relative h-72 w-72 rounded-2xl object-contain"
                      />
                    </div>
                  </motion.div>

                  <a
                    href="/src/assets/WhatsApp Image 2026-05-26 at 10.11.00 PM.jpeg"
                    download
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#B8952A] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-[#B8952A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF55] hover:shadow-xl"
                  >
                    <Download size={20} strokeWidth={2.4} />
                    Download QR Code
                  </a>
                </div>
              </motion.div>
            )}

            {step === 2 && selectedMethod === "upi" && (
              <motion.div
                key="upi-details"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#EEF3FC] to-white p-8 shadow-2xl sm:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#B8CCF0]/60 blur-3xl" />
                
                <button
                  onClick={handleBack}
                  className="group mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#0D2B6B]"
                >
                  <ChevronRight size={18} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                  Back to payment methods
                </button>

                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-lg">
                    <Smartphone size={32} strokeWidth={2.3} />
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-[#0D2B6B]">
                    Donate via UPI ID
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600">
                    Copy our UPI ID below and paste it in any UPI app to make your donation.
                  </p>

                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-[#B8CCF0]/50 bg-white p-8 shadow-lg"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                      UPI ID
                    </p>
                    <div className="mt-4 break-all text-2xl font-extrabold tracking-tight text-[#0D2B6B]">
                      {upiId}
                    </div>
                    
                    <button
                      type="button"
                      onClick={copyUpi}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1A4DA8] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0D2B6B]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E6FD9] hover:shadow-xl"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 size={20} strokeWidth={2.4} />
                          Copied Successfully
                        </>
                      ) : (
                        <>
                          <Copy size={20} strokeWidth={2.4} />
                          Copy UPI ID
                        </>
                      )}
                    </button>
                  </motion.div>

                  <div className="mx-auto mt-8 max-w-md">
                    <div className="grid gap-3">
                      {trustItems.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-[#0D2B6B] shadow-sm"
                        >
                          <CheckCircle2
                            size={18}
                            strokeWidth={2.4}
                            className="text-[#B8952A]"
                          />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}