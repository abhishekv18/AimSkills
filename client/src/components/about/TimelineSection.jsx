
// import { motion } from "framer-motion";
// import { CalendarDays, ChevronRight } from "lucide-react";

// const timelineItems = [
//   {
//     date: "21 March 2016",
//     title: "Date of Incorporation",
//     description:
//       "Aim Skills Education Trust was formed into a legal body by registering as per Indian Government Corporate Governing bodies, marking the official beginning of our structured journey.",
//     highlight: true,
//   },
//   {
//     date: "13 December 2016",
//     title: "Started Rural Development Projects",
//     description:
//       "We began serving the youth of rural India by providing livelihood-oriented training programs and proper placement options, opening doors to sustainable career opportunities.",
//   },
//   {
//     date: "25 February 2017",
//     title: "Started Corporate Training Programs",
//     description:
//       "Started serving the corporate world by increasing their overall productivity through targeted corporate training programs designed to offer complete return on investment.",
//   },
//   {
//     date: "25 February 2017",
//     title: "Introduced TTT / FDP",
//     description:
//       "Started delivering various Faculty Development Programs focused on individual skills, upgrading teaching capabilities, effective learning management, and more to technical and professional institutions.",
//   },
// ];

// const sectionVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.16,
//       delayChildren: 0.12,
//     },
//   },
// };

// const titleVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function TimelineItem({ item, index }) {
//   const isEven = index % 2 === 0;
//   const isFirst = index === 0;

//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, x: isEven ? -42 : 42 },
//         visible: {
//           opacity: 1,
//           x: 0,
//           transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
//         },
//       }}
//       className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 ${
//         isEven ? "" : "lg:[&>*:first-child]:col-start-2"
//       }`}
//     >
//       <div className={isEven ? "lg:pr-10 lg:text-right" : "lg:pl-10"}>
//         <motion.article
//           whileHover={{ y: -4 }}
//           transition={{ duration: 0.2 }}
//           className={`group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md sm:p-6 ${
//             isFirst
//               ? "border-[#B8952A]/40 hover:border-[#B8952A]"
//               : "border-slate-200 hover:border-[#D4AF55]/60"
//           }`}
//         >
//           {/* Date badge */}
//           <div
//             className={`mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
//               isEven ? "lg:ml-auto lg:flex-row-reverse" : ""
//             } ${
//               isFirst
//                 ? "bg-[#B8952A] text-white"
//                 : "bg-[#EEF3FC] text-[#1A4DA8]"
//             }`}
//           >
//             <CalendarDays size={13} strokeWidth={2} />
//             <span>{item.date}</span>
//           </div>

//           <h3 className="text-lg font-extrabold leading-6 text-[#0D2B6B] sm:text-xl">
//             {item.title}
//           </h3>

//           <p className="mt-3 text-sm leading-6 text-slate-600">
//             {item.description}
//           </p>

//           {/* Subtle indicator for the first (incorporation) item */}
//           {isFirst && (
//             <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#B8952A]">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
//               Foundation milestone
//             </div>
//           )}
//         </motion.article>
//       </div>

//       {/* Timeline node */}
//       <div
//         className={`absolute top-7 flex items-center justify-center lg:left-1/2 ${
//           isEven ? "lg:-translate-x-1/2" : "lg:-translate-x-1/2"
//         }`}
//       >
//         <div
//           className={`flex size-6 items-center justify-center rounded-full border-[3px] border-[#EEF3FC] shadow-sm ${
//             isFirst ? "bg-[#B8952A]" : "bg-[#1A4DA8]"
//           }`}
//         >
//           {isFirst && <div className="size-2 rounded-full bg-white" />}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function TimelineSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-14 sm:py-16 lg:py-20">
//       <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#B8CCF0]/25 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.16 }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         {/* Section header */}
//         <motion.div variants={titleVariants} className="mx-auto max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-4 py-1.5 text-sm font-bold text-[#1A4DA8]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
//             Our Journey
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             Our History Timeline
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//             We have gone through several transformation phases during our
//             professional journey.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative mt-12 space-y-8 pl-8 lg:mt-14 lg:space-y-10 lg:pl-0">
//           {/* Vertical line */}
//           <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#B8CCF0] lg:left-1/2 lg:-translate-x-1/2">
//             <motion.div
//               initial={{ height: 0 }}
//               whileInView={{ height: "100%" }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//               className="w-full rounded-full bg-gradient-to-b from-[#B8952A] via-[#1A4DA8] to-[#B8952A]"
//             />
//           </div>

//           {timelineItems.map((item, index) => (
//             <TimelineItem key={item.title} item={item} index={index} />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { CalendarDays, ChevronRight } from "lucide-react";

const timelineItems = [
  {
    date: "21 March 2016",
    title: "Date of Incorporation",
    description:
      "Aim Skills Education Trust was formed into a legal body by registering as per Indian Government Corporate Governing bodies, marking the official beginning of our structured journey.",
    highlight: true,
  },
  {
    date: "13 December 2016",
    title: "Started Rural Development Projects",
    description:
      "We began serving the youth of rural India by providing livelihood-oriented training programs and proper placement options, opening doors to sustainable career opportunities.",
  },
  {
    date: "25 February 2017",
    title: "Started Corporate Training Programs",
    description:
      "Started serving the corporate world by increasing their overall productivity through targeted corporate training programs designed to offer complete return on investment.",
  },
  {
    date: "25 February 2017",
    title: "Introduced TTT / FDP",
    description:
      "Started delivering various Faculty Development Programs focused on individual skills, upgrading teaching capabilities, effective learning management, and more to technical and professional institutions.",
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
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isEven ? -42 : 42 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={`relative grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-12 ${
        isEven ? "" : "lg:[&>*:first-child]:col-start-2"
      }`}
    >
      {/* ── Card Column ── */}
      <div className={isEven ? "lg:pr-8 xl:pr-10 lg:text-right" : "lg:pl-8 xl:pl-10"}>
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className={`group relative overflow-hidden rounded-xl border bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md ${
            isFirst
              ? "border-[#B8952A]/40 hover:border-[#B8952A]"
              : "border-slate-200 hover:border-[#D4AF55]/60"
          }`}
        >
          {/* Date badge */}
          <div
            className={`mb-2 sm:mb-3 inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold ${
              isEven ? "lg:ml-auto lg:flex-row-reverse" : ""
            } ${
              isFirst
                ? "bg-[#B8952A] text-white"
                : "bg-[#EEF3FC] text-[#1A4DA8]"
            }`}
          >
            <CalendarDays size={12} strokeWidth={2} className="sm:size-[13px]" />
            <span>{item.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold leading-5 sm:leading-6 text-[#0D2B6B]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
            {item.description}
          </p>

          {/* Foundation milestone indicator */}
          {isFirst && (
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#B8952A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
              Foundation milestone
            </div>
          )}
        </motion.article>
      </div>

      {/* ── Timeline Node (Desktop) ── */}
      <div className="hidden lg:flex absolute top-7 items-center justify-center lg:left-1/2 lg:-translate-x-1/2">
        <div
          className={`flex size-5 sm:size-6 items-center justify-center rounded-full border-[3px] border-[#EEF3FC] shadow-sm ${
            isFirst ? "bg-[#B8952A]" : "bg-[#1A4DA8]"
          }`}
        >
          {isFirst && <div className="size-1.5 sm:size-2 rounded-full bg-white" />}
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-14 sm:py-16 md:py-18 lg:py-20">
      {/* Background decorative blobs - responsive sizing */}
      <div className="pointer-events-none absolute -left-16 sm:-left-20 top-0 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#B8CCF0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 sm:-right-20 bottom-0 h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* ── Section Header ── */}
        <motion.div variants={titleVariants} className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-[#1A4DA8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
            Our Journey
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D2B6B]">
            Our History Timeline
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-slate-600">
            We have gone through several transformation phases during our
            professional journey.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14 space-y-6 sm:space-y-8 lg:space-y-10 pl-6 sm:pl-8 lg:pl-0">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-0 sm:left-0 top-0 w-0.5 bg-[#B8CCF0] lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-full bg-gradient-to-b from-[#B8952A] via-[#1A4DA8] to-[#B8952A]"
            />
          </div>

          {/* Mobile timeline nodes */}
          <div className="lg:hidden">
            {timelineItems.map((item, index) => (
              <div key={item.title} className="relative">
                {/* Mobile node */}
                <div className="absolute left-[-23px] sm:left-[-27px] top-5 sm:top-6 flex items-center justify-center">
                  <div
                    className={`flex size-4 sm:size-5 items-center justify-center rounded-full border-[2.5px] sm:border-[3px] border-[#EEF3FC] shadow-sm ${
                      index === 0 ? "bg-[#B8952A]" : "bg-[#1A4DA8]"
                    }`}
                  >
                    {index === 0 && <div className="size-1 sm:size-1.5 rounded-full bg-white" />}
                  </div>
                </div>
                
                {/* Card */}
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl border bg-white p-4 sm:p-5 shadow-sm transition-all duration-200 hover:shadow-md mb-6 sm:mb-8 ${
                    index === 0
                      ? "border-[#B8952A]/40 hover:border-[#B8952A]"
                      : "border-slate-200 hover:border-[#D4AF55]/60"
                  }`}
                >
                  {/* Date badge */}
                  <div
                    className={`mb-2 sm:mb-3 inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold ${
                      index === 0
                        ? "bg-[#B8952A] text-white"
                        : "bg-[#EEF3FC] text-[#1A4DA8]"
                    }`}
                  >
                    <CalendarDays size={12} strokeWidth={2} className="sm:size-[13px]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold leading-5 sm:leading-6 text-[#0D2B6B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {index === 0 && (
                    <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#B8952A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
                      Foundation milestone
                    </div>
                  )}
                </motion.article>
              </div>
            ))}
          </div>

          {/* Desktop timeline items */}
          <div className="hidden lg:block">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}