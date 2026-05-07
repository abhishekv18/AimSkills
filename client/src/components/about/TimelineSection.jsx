// import { motion } from "framer-motion";
// import { CalendarDays } from "lucide-react";

// const timelineItems = [
//   {
//     year: "2019",
//     title: "AimSkills Foundation Begins",
//     description:
//       "Started with a clear vision to support youth through practical learning, skill development, and community-focused education.",
//   },
//   {
//     year: "2020",
//     title: "Community Training Initiatives",
//     description:
//       "Expanded outreach through local training sessions designed to improve employability and confidence among underserved learners.",
//   },
//   {
//     year: "2021",
//     title: "Partnership-Led Growth",
//     description:
//       "Built collaborations with institutions, trainers, and community stakeholders to strengthen program delivery and impact.",
//   },
//   {
//     year: "2023",
//     title: "Placement-Oriented Programs",
//     description:
//       "Introduced focused career-readiness modules, mentoring support, and training pathways aligned with workplace opportunities.",
//   },
//   {
//     year: "2025",
//     title: "Scaling Sustainable Impact",
//     description:
//       "Continued expanding skill-based education programs with stronger systems, measurable outcomes, and wider community reach.",
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
//       staggerChildren: 0.16,
//       delayChildren: 0.12,
//     },
//   },
// };

// const titleVariants = {
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

// function TimelineItem({ item, index }) {
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       variants={{
//         hidden: {
//           opacity: 0,
//           x: isEven ? -42 : 42,
//         },
//         visible: {
//           opacity: 1,
//           x: 0,
//           transition: {
//             duration: 0.62,
//             ease: [0.22, 1, 0.36, 1],
//           },
//         },
//       }}
//       className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 ${
//         isEven ? "" : "lg:[&>*:first-child]:col-start-2"
//       }`}
//     >
//       <div className={isEven ? "lg:pr-10" : "lg:pl-10"}>
//         <motion.article
//           whileHover={{
//             y: -6,
//             scale: 1.015,
//           }}
//           transition={{
//             duration: 0.22,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4AF55]/70 hover:shadow-md"
//         >
//           <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
//           <div className="pointer-events-none absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-[#F5E8C0] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

//           <div className="relative">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#B8952A] px-4 py-2 text-sm font-extrabold text-white shadow-sm">
//               <CalendarDays size={16} strokeWidth={2.3} />
//               {item.year}
//             </div>

//             <h3 className="text-xl font-extrabold tracking-tight text-[#0D2B6B]">
//               {item.title}
//             </h3>

//             <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
//               {item.description}
//             </p>
//           </div>
//         </motion.article>
//       </div>

//       <div className="absolute left-0 top-7 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#EEF3FC] bg-[#B8952A] shadow-md lg:left-1/2">
//         <div className="size-2.5 rounded-full bg-white" />
//       </div>
//     </motion.div>
//   );
// }

// export default function TimelineSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#EEF3FC] py-16 sm:py-20 lg:py-24">
//       <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

//       <motion.div
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.16,
//         }}
//         className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <motion.div
//           variants={titleVariants}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
//             Our Journey
//           </div>

//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             History & Milestones
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
//             A steady journey of learning, collaboration, and community impact.
//           </p>

//           <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
//         </motion.div>

//         <div className="relative mt-14 space-y-10 pl-8 lg:mt-16 lg:space-y-12 lg:pl-0">
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 1.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="absolute left-0 top-0 w-0.5 rounded-full bg-[#1A4DA8] lg:left-1/2 lg:-translate-x-1/2"
//           />

//           {timelineItems.map((item, index) => (
//             <TimelineItem key={item.year} item={item} index={index} />
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
    date: "29 October 2013",
    title: "Date of Incorporation",
    description:
      "Aim Skills Education Trust was formed into a legal body by registering as per Indian Government Corporate Governing bodies, marking the official beginning of our structured journey.",
    highlight: true,
  },
  {
    date: "13 December 2013",
    title: "Started Rural Development Projects",
    description:
      "We began serving the youth of rural India by providing livelihood-oriented training programs and proper placement options, opening doors to sustainable career opportunities.",
  },
  {
    date: "25 February 2014",
    title: "Started Corporate Training Programs",
    description:
      "Started serving the corporate world by increasing their overall productivity through targeted corporate training programs designed to offer complete return on investment.",
  },
  {
    date: "25 February 2014",
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
      className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 ${
        isEven ? "" : "lg:[&>*:first-child]:col-start-2"
      }`}
    >
      <div className={isEven ? "lg:pr-10 lg:text-right" : "lg:pl-10"}>
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className={`group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md sm:p-6 ${
            isFirst
              ? "border-[#B8952A]/40 hover:border-[#B8952A]"
              : "border-slate-200 hover:border-[#D4AF55]/60"
          }`}
        >
          {/* Date badge */}
          <div
            className={`mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
              isEven ? "lg:ml-auto lg:flex-row-reverse" : ""
            } ${
              isFirst
                ? "bg-[#B8952A] text-white"
                : "bg-[#EEF3FC] text-[#1A4DA8]"
            }`}
          >
            <CalendarDays size={13} strokeWidth={2} />
            <span>{item.date}</span>
          </div>

          <h3 className="text-lg font-extrabold leading-6 text-[#0D2B6B] sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {item.description}
          </p>

          {/* Subtle indicator for the first (incorporation) item */}
          {isFirst && (
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#B8952A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
              Foundation milestone
            </div>
          )}
        </motion.article>
      </div>

      {/* Timeline node */}
      <div
        className={`absolute top-7 flex items-center justify-center lg:left-1/2 ${
          isEven ? "lg:-translate-x-1/2" : "lg:-translate-x-1/2"
        }`}
      >
        <div
          className={`flex size-6 items-center justify-center rounded-full border-[3px] border-[#EEF3FC] shadow-sm ${
            isFirst ? "bg-[#B8952A]" : "bg-[#1A4DA8]"
          }`}
        >
          {isFirst && <div className="size-2 rounded-full bg-white" />}
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FC] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#B8CCF0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#F5E8C0]/40 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div variants={titleVariants} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/60 bg-white px-4 py-1.5 text-sm font-bold text-[#1A4DA8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A]" />
            Our Journey
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            Our History Timeline
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We have gone through several transformation phases during our
            professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 space-y-8 pl-8 lg:mt-14 lg:space-y-10 lg:pl-0">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#B8CCF0] lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-full bg-gradient-to-b from-[#B8952A] via-[#1A4DA8] to-[#B8952A]"
            />
          </div>

          {timelineItems.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}