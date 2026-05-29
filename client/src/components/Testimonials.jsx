import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We got what we expected and AimSkills Trust delivered what they committed. AimSkills is young and vibrant, but they are very dynamic in their actions and quality parameters. Communicative and responsive staff and delivered the training with the help of industry experts.",
    name: "Nitin Yadav",
    company: "The Ocean HR Solution",
    logo: "/the-ocean-hr.png",
  },
  {
    quote:
      "We were in the need of faculty development programs and than get in touch with the team of AimSkills Trust. They are expert in their field and helped us a lot in upgrading the skills of our in-house trainers. Got tremendous and productive results. Thanks team Aim Skills for the amazing training experience.",
    name: "Mr. Rachit Kumar",
    company: "Shree Bala Ji Degree College",
    logo: "/bala_ji.jpg",
  },
  {
    quote:
      "These people are experienced in the training domain. Properly assessed the requirements, design the required training modules and delivered successfully in given time frame. Got proper return over our investments. Happy with the training delivered by AimSkills Trust.",
    name: "Mr. Anand Pandey",
    company: "CLAT Mentors India Pvt. Ltd.",
    logo: "/clat.jpg",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -18,
        scale: 0.96,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative mx-auto flex min-h-[360px] w-full max-w-3xl flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-10"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EEF3FC] opacity-80 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-14 left-8 h-28 w-28 rounded-full bg-[#F5E8C0] opacity-70 blur-2xl" />

      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-2 shadow-sm">
          <img
            src={testimonial.logo}
            alt={`${testimonial.company} logo`}
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        <Quote
          size={46}
          strokeWidth={1.8}
          className="mt-7 text-[#B8952A]/20"
        />

        <p className="mt-3 max-w-2xl text-lg font-medium leading-relaxed text-slate-700">
          “{testimonial.quote}”
        </p>

        <div className="mt-7 h-px w-16 bg-[#B8952A]/30" />

        <div className="mt-5">
          <h3 className="text-base font-extrabold text-[#0D2B6B]">
            {testimonial.name}
          </h3>
          <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FB] to-[#EEF3FC] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#B8CCF0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-14 h-80 w-80 rounded-full bg-[#F5E8C0]/70 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.18,
        }}
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-white px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#B8952A]" />
            Testimonials
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            What Our Partners Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Real experiences from organizations and individuals we've worked
            with
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#B8952A]" />
        </div>

        <div className="relative mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[activeIndex].name}
              testimonial={testimonials[activeIndex]}
            />
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-[#B8CCF0]/70 bg-white text-[#1A4DA8] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF3FC] hover:shadow-md"
            >
              <ChevronLeft size={20} strokeWidth={2.3} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    activeIndex === index
                      ? "w-8 bg-[#B8952A]"
                      : "w-2.5 bg-[#B8CCF0] hover:bg-[#1A4DA8]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-[#B8CCF0]/70 bg-white text-[#1A4DA8] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF3FC] hover:shadow-md"
            >
              <ChevronRight size={20} strokeWidth={2.3} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
