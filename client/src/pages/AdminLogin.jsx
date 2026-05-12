// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Briefcase, GraduationCap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const AdminLoginPage = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate login - replace with actual logic later
//     setTimeout(() => {
//       setIsLoading(false);
//       console.log('Login attempted with:', formData);
//     }, 1500);
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8F9FB]">
//       {/* Header */}
//       <motion.header
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-sm border-b border-[#EEF3FC] z-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link to="/" className="flex items-center space-x-3 group">
//               <div className="bg-gradient-to-br from-[#EEF3FC] to-white p-1.5 rounded-xl group-hover:shadow-md transition-all duration-300">
//                 <img
//                   src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
//                   className="w-12 h-10 object-contain"
//                   alt="AimSkills Logo"
//                 />
//               </div>
//               <div className="hidden md:block">
//                 <h1 className="text-xl font-bold text-[#0D2B6B] group-hover:text-[#1A4DA8] transition-colors">
//                   AimSkills
//                 </h1>
//                 <p className="text-sm text-[#111827]/70">Youth Employment Initiative</p>
//               </div>
//             </Link>

//             <Link to="/">
//               <button className="flex items-center space-x-2 text-[#111827]/70 hover:text-[#1A4DA8] transition-colors px-3 py-2 rounded-lg hover:bg-[#EEF3FC]">
//                 <Home className="h-5 w-5" />
//                 <span className="text-sm hidden sm:inline">Home</span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </motion.header>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row min-h-screen pt-16">
//         {/* Left Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0D2B6B] via-[#1A4DA8] to-[#2E6FD9] relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-black/10" />
//           <motion.div 
//             variants={staggerChildren}
//             initial="hidden"
//             animate="visible"
//             className="relative z-10 flex flex-col justify-center items-center p-12 text-white"
//           >
//             <div className="max-w-md">
//               <motion.div variants={fadeUp} className="mb-8 text-center">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 rounded-2xl mb-6 backdrop-blur-sm">
//                   <Shield className="h-10 w-10 text-[#F5E8C0]" />
//                 </div>
//                 <h2 className="text-3xl font-bold mb-4">Admin Portal</h2>
//                 <p className="text-lg text-[#B8CCF0]">
//                   Secure access to manage AimSkills operations and youth employment initiatives.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} className="space-y-4">
//                 <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
//                   <Users className="h-6 w-6 text-[#F5E8C0] flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-base">Youth Management</h3>
//                     <p className="text-sm text-[#B8CCF0]">Track student progress and placements</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
//                   <Briefcase className="h-6 w-6 text-[#F5E8C0] flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-base">Employment Programs</h3>
//                     <p className="text-sm text-[#B8CCF0]">Manage skill development initiatives</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
//                   <GraduationCap className="h-6 w-6 text-[#F5E8C0] flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-base">Training Oversight</h3>
//                     <p className="text-sm text-[#B8CCF0]">Monitor courses and certifications</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Section (Form) */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="w-full max-w-md"
//           >
//             <motion.div variants={fadeUp} className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1A4DA8] to-[#2E6FD9] rounded-2xl mb-6 shadow-lg">
//                 <Lock className="h-7 w-7 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-[#0D2B6B] mb-2">Welcome Back</h2>
//               <p className="text-[#111827]/60">
//                 Sign in to access the admin dashboard
//               </p>
//             </motion.div>

//             <motion.form 
//               variants={staggerChildren}
//               initial="hidden"
//               animate="visible"
//               className="space-y-5" 
//               onSubmit={handleSubmit}
//             >
//               <motion.div variants={fadeUp}>
//                 <label htmlFor="email" className="block text-sm font-semibold text-[#0D2B6B] mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-[#1A4DA8]/50 group-focus-within:text-[#2E6FD9] transition-colors" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="block w-full pl-12 pr-4 py-3 border-2 border-[#EEF3FC] rounded-xl focus:outline-none focus:border-[#2E6FD9] focus:ring-2 focus:ring-[#2E6FD9]/20 text-[#111827] placeholder-[#111827]/40 text-sm bg-[#F8F9FB] hover:border-[#B8CCF0] transition-all"
//                     placeholder="admin@aimskills.org"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div variants={fadeUp}>
//                 <label htmlFor="password" className="block text-sm font-semibold text-[#0D2B6B] mb-2">
//                   Password
//                 </label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-[#1A4DA8]/50 group-focus-within:text-[#2E6FD9] transition-colors" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="current-password"
//                     required
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="block w-full pl-12 pr-12 py-3 border-2 border-[#EEF3FC] rounded-xl focus:outline-none focus:border-[#2E6FD9] focus:ring-2 focus:ring-[#2E6FD9]/20 text-[#111827] placeholder-[#111827]/40 text-sm bg-[#F8F9FB] hover:border-[#B8CCF0] transition-all"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-[#1A4DA8]/50 hover:text-[#2E6FD9] transition-colors" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-[#1A4DA8]/50 hover:text-[#2E6FD9] transition-colors" />
//                     )}
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div variants={fadeUp} className="pt-2">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#B8952A] to-[#D4AF55] hover:from-[#D4AF55] hover:to-[#B8952A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8952A]/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-2">
//                     {isLoading ? (
//                       <>
//                         <svg
//                           className="animate-spin h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                           />
//                         </svg>
//                         <span>Signing in...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>Sign in to Dashboard</span>
//                         <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                       </>
//                     )}
//                   </div>
//                 </button>
//               </motion.div>
//             </motion.form>

//             <motion.div 
//               variants={fadeUp}
//               className="mt-8 text-center"
//             >
//               <p className="text-sm text-[#111827]/60">
//                 Need help? Contact{' '}
//                 <a 
//                   href="mailto:support@aimskills.org" 
//                   className="font-semibold text-[#1A4DA8] hover:text-[#2E6FD9] transition-colors"
//                 >
//                   support@aimskills.org
//                 </a>
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <motion.footer 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="bg-[#0D2B6B] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col items-center text-center space-y-4 md:flex-row md:justify-between md:space-y-0 md:text-left">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
//                 className="w-12 h-10 object-contain"
//                 alt="AimSkills Logo"
//               />
//               <div>
//                 <h3 className="text-lg font-bold">AimSkills</h3>
//                 <p className="text-sm text-[#B8CCF0]">Youth Employment Initiative</p>
//               </div>
//             </div>
//             <div className="text-sm text-[#B8CCF0]">
//               © 2026 AimSkills. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default AdminLoginPage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', formData);
    }, 1500);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-sm border-b border-[#EEF3FC] z-50"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="bg-gradient-to-br from-[#EEF3FC] to-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300">
                <img
                  src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
                  className="w-9 h-7 sm:w-12 sm:h-10 object-contain"
                  alt="AimSkills Logo"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-[#0D2B6B] group-hover:text-[#1A4DA8] transition-colors">
                  AimSkills
                </h1>
                <p className="text-xs sm:text-sm text-[#111827]/70">Youth Employment Initiative</p>
              </div>
            </Link>

            <Link to="/">
              <button className="flex items-center space-x-1.5 sm:space-x-2 text-[#111827]/70 hover:text-[#1A4DA8] transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-[#EEF3FC]">
                <Home className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">Home</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-1 pt-14 sm:pt-16">
        {/* Left Section - Desktop only */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0D2B6B] via-[#1A4DA8] to-[#2E6FD9] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center items-center p-8 xl:p-12 text-white"
          >
            <div className="max-w-md">
              <motion.div variants={fadeUp} className="mb-6 xl:mb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 xl:w-20 h-16 xl:h-20 bg-white/15 rounded-2xl mb-4 xl:mb-6 backdrop-blur-sm">
                  <Shield className="h-8 xl:h-10 w-8 xl:w-10 text-[#F5E8C0]" />
                </div>
                <h2 className="text-2xl xl:text-3xl font-bold mb-3">Admin Portal</h2>
                <p className="text-base xl:text-lg text-[#B8CCF0]">
                  Secure access to manage AimSkills operations and youth employment initiatives.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <div className="flex items-center space-x-3 bg-white/10 p-3 xl:p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
                  <Users className="h-5 w-5 text-[#F5E8C0] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm xl:text-base">Youth Management</h3>
                    <p className="text-xs xl:text-sm text-[#B8CCF0]">Track student progress and placements</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 xl:p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
                  <Briefcase className="h-5 w-5 text-[#F5E8C0] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm xl:text-base">Employment Programs</h3>
                    <p className="text-xs xl:text-sm text-[#B8CCF0]">Manage skill development initiatives</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 xl:p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
                  <GraduationCap className="h-5 w-5 text-[#F5E8C0] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm xl:text-base">Training Oversight</h3>
                    <p className="text-xs xl:text-sm text-[#B8CCF0]">Monitor courses and certifications</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-white flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-sm sm:max-w-md"
          >
            <motion.div variants={fadeUp} className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1A4DA8] to-[#2E6FD9] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
                <Lock className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2B6B] mb-1 sm:mb-2">Welcome Back</h2>
              <p className="text-xs sm:text-sm text-[#111827]/60">
                Sign in to access the admin dashboard
              </p>
            </motion.div>

            <motion.form 
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-5" 
              onSubmit={handleSubmit}
            >
              <motion.div variants={fadeUp}>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-[#0D2B6B] mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A4DA8]/50 group-focus-within:text-[#2E6FD9] transition-colors" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-[#EEF3FC] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#2E6FD9] focus:ring-2 focus:ring-[#2E6FD9]/20 text-[#111827] placeholder-[#111827]/40 text-xs sm:text-sm bg-[#F8F9FB] hover:border-[#B8CCF0] transition-all"
                    placeholder="admin@aimskills.org"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-[#0D2B6B] mb-1.5 sm:mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A4DA8]/50 group-focus-within:text-[#2E6FD9] transition-colors" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-9 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 border-2 border-[#EEF3FC] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#2E6FD9] focus:ring-2 focus:ring-[#2E6FD9]/20 text-[#111827] placeholder-[#111827]/40 text-xs sm:text-sm bg-[#F8F9FB] hover:border-[#B8CCF0] transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A4DA8]/50 hover:text-[#2E6FD9] transition-colors" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A4DA8]/50 hover:text-[#2E6FD9] transition-colors" />
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-2.5 sm:py-3.5 px-4 border border-transparent text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl text-white bg-gradient-to-r from-[#B8952A] to-[#D4AF55] hover:from-[#D4AF55] hover:to-[#B8952A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8952A]/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
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
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign in to Dashboard</span>
                        <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </motion.div>
            </motion.form>

            <motion.div 
              variants={fadeUp}
              className="mt-6 sm:mt-8 text-center"
            >
              <p className="text-xs sm:text-sm text-[#111827]/60">
                Need help? Contact{' '}
                <a 
                  href="mailto:support@aimskills.org" 
                  className="font-semibold text-[#1A4DA8] hover:text-[#2E6FD9] transition-colors"
                >
                  support@aimskills.org
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0D2B6B] text-white mt-auto"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
                className="w-9 h-7 sm:w-12 sm:h-10 object-contain"
                alt="AimSkills Logo"
              />
              <div>
                <h3 className="text-sm sm:text-lg font-bold">AimSkills</h3>
                <p className="text-xs sm:text-sm text-[#B8CCF0]">Youth Employment Initiative</p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#B8CCF0]">
              © 2026 AimSkills. All rights reserved.
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default AdminLoginPage;