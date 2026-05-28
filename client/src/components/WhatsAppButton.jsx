
// import { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const WhatsAppButton = () => {
//   const [showButton, setShowButton] = useState(false);
//   const location = useLocation();

//   // Block on admin pages
//   const blockedRoutes = ["/admin","/blogs/"];

//   const isBlockedRoute = blockedRoutes.some((route) =>
//     location.pathname.startsWith(route)
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show only once
//       if (window.scrollY > 100) {
//         setShowButton(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Hide completely on admin routes
//   if (isBlockedRoute) return null;

//   // WhatsApp pre-filled message
//   const message =
//     "Hi Aim Skill NGO, I want to know more about your services.";

//   return (
//     <a
//       href={`https://wa.me/918604050163?text=${encodeURIComponent(
//         message
//       )}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className={`
//         fixed bottom-5 sm:bottom-7 right-6 z-[9999]
//         flex h-13 w-13 items-center justify-center
//         rounded-full
//         bg-[#1C8C5E]
//         shadow-[0_10px_30px_rgba(0,0,0,0.28)]
//         backdrop-blur-md
//         transition-all duration-500 ease-out
//         hover:bg-[#18794D]
//         hover:scale-110
//         active:scale-95

//         ${
//           showButton
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10 pointer-events-none"
//         }
//       `}
//     >
//       <FaWhatsapp
//         size={25}
//         className="text-white"
//       />
//     </a>
//   );
// };

// export default WhatsAppButton;



import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  // Block on admin pages
  const blockedRoutes = ["/admin", "/blogs/"];

  const isBlockedRoute = blockedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isBlockedRoute) return null;

  // Larger WhatsApp message
  const message =
    "Hello Aim Skills Education Trust, I visited your website and would like to know more about your training programs, consultancy services, skill development initiatives, and opportunities for collaboration. Please share more details. Thank you.";

  return (
    <a
      href={`https://wa.me/917248776407?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`
        fixed bottom-5 sm:bottom-7 right-6 z-[9999]
        flex h-13 w-13 items-center justify-center
        rounded-full
        bg-[#1C8C5E]
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        backdrop-blur-md
        transition-all duration-500 ease-out
        hover:bg-[#18794D]
        hover:scale-110
        active:scale-95

        ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <FaWhatsapp size={25} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;