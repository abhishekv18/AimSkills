// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Images } from "lucide-react";

// const galleryImages = [
//   {
//     src: "/src/assets/img1.jpg",
//     alt: "AimSkills classroom training session",
//     caption: "Classroom Training",
//   },
//   {
//     src: "/src/assets/img2.jpg",
//     alt: "Students learning through AimSkills program",
//     caption: "Youth Skill Development",
//   },
//   {
//     src: "/src/assets/img3.jpg",
//     alt: "AimSkills workshop activity",
//     caption: "Practical Workshops",
//   },
//   {
//     src: "/src/assets/img4.jpg",
//     alt: "Community learning session",
//     caption: "Community Learning",
//   },
//   {
//     src: "/src/assets/img5.jpg",
//     alt: "Faculty development training",
//     caption: "Faculty Development",
//   },
// ];

// const sectionVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.12,
//       delayChildren: 0.12,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function PhotoGallerySection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const visibleSlides = useMemo(() => {
//     const previous =
//       activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
//     const next = (activeIndex + 1) % galleryImages.length;

//     return [
//       { ...galleryImages[previous], position: "previous", index: previous },
//       { ...galleryImages[activeIndex], position: "active", index: activeIndex },
//       { ...galleryImages[next], position: "next", index: next },
//     ];
//   }, [activeIndex]);

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       setActiveIndex((current) => (current + 1) % galleryImages.length);
//     }, 3600);

//     return () => window.clearInterval(timer);
//   }, []);

//   const previousSlide = () => {
//     setActiveIndex((current) =>
//       current === 0 ? galleryImages.length - 1 : current - 1
//     );
//   };

//   const nextSlide = () => {
//     setActiveIndex((current) => (current + 1) % galleryImages.length);
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#F8F9FB] py-16 sm:py-20 lg:py-24">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.18,
//         }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <Images size={17} strokeWidth={2.2} />
//             Gallery
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Moments from Our Learning Spaces
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             A glimpse into training sessions, workshops, and community learning
//             initiatives.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <motion.div variants={itemVariants} className="relative mt-12 lg:mt-16">
//           <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 overflow-hidden py-6">
//             {visibleSlides.map((slide) => {
//               const isActive = slide.position === "active";

//               return (
//                 <motion.button
//                   key={`${slide.src}-${slide.position}-${activeIndex}`}
//                   type="button"
//                   onClick={() => setActiveIndex(slide.index)}
//                   initial={{
//                     opacity: 0,
//                     scale: isActive ? 0.96 : 0.86,
//                     y: 20,
//                   }}
//                   animate={{
//                     opacity: isActive ? 1 : 0.55,
//                     scale: isActive ? 1.08 : 0.88,
//                     y: 0,
//                     filter: isActive ? "blur(0px)" : "blur(1.5px)",
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.86,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className={`group relative shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-lg ${
//                     isActive
//                       ? "h-[300px] w-[82vw] sm:h-[420px] sm:w-[620px] lg:h-[500px] lg:w-[760px]"
//                       : "hidden h-[360px] w-[300px] md:block lg:w-[340px]"
//                   }`}
//                 >
//                   <img
//                     src={slide.src}
//                     alt={slide.alt}
//                     className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
//                   />

//                   <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/60 via-transparent to-transparent" />

//                   <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                     <div className="inline-flex rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#0D2B6B] shadow-sm backdrop-blur-md">
//                       {slide.caption}
//                     </div>
//                   </div>
//                 </motion.button>
//               );
//             })}
//           </div>

//           <div className="mt-8 flex items-center justify-center gap-4">
//             <button
//               type="button"
//               onClick={previousSlide}
//               aria-label="Previous gallery image"
//               className="flex size-11 items-center justify-center rounded-full border border-[#B8CCF0]/70 bg-white text-[#1A4DA8] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF3FC] hover:shadow-md"
//             >
//               <ChevronLeft size={20} strokeWidth={2.3} />
//             </button>

//             <div className="flex items-center gap-2">
//               {galleryImages.map((image, index) => (
//                 <button
//                   key={image.src}
//                   type="button"
//                   onClick={() => setActiveIndex(index)}
//                   aria-label={`Show gallery image ${index + 1}`}
//                   className={`h-2.5 rounded-full transition-all duration-200 ${
//                     activeIndex === index
//                       ? "w-8 bg-[#B8952A]"
//                       : "w-2.5 bg-[#B8CCF0] hover:bg-[#1A4DA8]"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               type="button"
//               onClick={nextSlide}
//               aria-label="Next gallery image"
//               className="flex size-11 items-center justify-center rounded-full border border-[#B8CCF0]/70 bg-white text-[#1A4DA8] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF3FC] hover:shadow-md"
//             >
//               <ChevronRight size={20} strokeWidth={2.3} />
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

const galleryImages = [
  {
    src: "/src/assets/img1.jpg",
    alt: "AimSkills classroom training session",
    caption: "Classroom Training",
  },
  {
    src: "/src/assets/img2.jpg",
    alt: "Students learning through AimSkills program",
    caption: "Youth Skill Development",
  },
  {
    src: "/src/assets/img3.jpg",
    alt: "AimSkills workshop activity",
    caption: "Practical Workshops",
  },
  {
    src: "/src/assets/img4.jpg",
    alt: "Community learning session",
    caption: "Community Learning",
  },
  {
    src: "/src/assets/img5.jpg",
    alt: "Faculty development training",
    caption: "Faculty Development",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PhotoGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleSlides = useMemo(() => {
    const previous =
      activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
    const next = (activeIndex + 1) % galleryImages.length;

    return [
      { ...galleryImages[previous], position: "previous", index: previous },
      { ...galleryImages[activeIndex], position: "active", index: activeIndex },
      { ...galleryImages[next], position: "next", index: next },
    ];
  }, [activeIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#B8CCF0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-4 py-1.5 text-sm font-bold text-[#1A4DA8]">
            <Images size={16} strokeWidth={2} />
            Gallery
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Moments from Our Learning Spaces
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A glimpse into training sessions, workshops, and community learning
            initiatives.
          </p>

            <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </motion.div>

        <motion.div variants={itemVariants} className="relative mt-10 lg:mt-12">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 overflow-hidden py-4">
            {visibleSlides.map((slide) => {
              const isActive = slide.position === "active";

              return (
                <motion.button
                  key={`${slide.src}-${slide.position}-${activeIndex}`}
                  type="button"
                  onClick={() => setActiveIndex(slide.index)}
                  initial={{ opacity: 0, scale: isActive ? 0.96 : 0.86, y: 20 }}
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    scale: isActive ? 1.08 : 0.88,
                    y: 0,
                    filter: isActive ? "blur(0px)" : "blur(1.5px)",
                  }}
                  exit={{ opacity: 0, scale: 0.86 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                    isActive
                      ? "h-[300px] w-[82vw] sm:h-[420px] sm:w-[620px] lg:h-[500px] lg:w-[760px]"
                      : "hidden h-[360px] w-[300px] md:block lg:w-[340px]"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle overlay at bottom only */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-xl bg-gradient-to-t from-[#0D2B6B]/40 to-transparent" />

                  {/* Caption - always visible on active slide */}
                  {isActive && (
                    <div className="absolute bottom-5 left-5">
                      <span className="inline-block rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0D2B6B] shadow-sm backdrop-blur-sm">
                        {slide.caption}
                      </span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Navigation controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1A4DA8] shadow-sm transition-colors hover:bg-[#EEF3FC]"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>

            <div className="flex items-center gap-1.5">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Image ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeIndex === index
                      ? "w-7 bg-[#B8952A]"
                      : "w-2 bg-slate-300 hover:bg-[#B8CCF0]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1A4DA8] shadow-sm transition-colors hover:bg-[#EEF3FC]"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}