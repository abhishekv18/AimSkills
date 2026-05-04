import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  HeartHandshake,
  Image,
  Menu,
  Newspaper,
  Phone,
  Sparkles,
  UserRoundPlus,
  X,
} from "lucide-react";

const navItems = [
//   { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "CSR Partnerships", href: "/csr" },
];

const resourceItems = [
  {
    label: "Gallery",
    href: "/gallery",
    icon: Image,
    description: "Moments from our learning spaces",
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: Newspaper,
    description: "Stories, updates, and field notes",
  },
];

const involvedItems = [
  {
    label: "Donate",
    href: "donate",
    icon: HeartHandshake,
    description: "Support a child's future today",
    cta: true,
  },
  {
    label: "Volunteer",
    href: "/volunteer",
    icon: UserRoundPlus,
    description: "Share your time and skills",
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: Phone,
    description: "Start a conversation with us",
  },
];

function Dropdown({ label, items, activePath, mobile = false }) {
  const [open, setOpen] = useState(false);
  const isActive = items.some((item) => item.href === activePath);

  const dropdownContent = (
    <motion.div
      initial={{ opacity: 0, y: mobile ? -4 : 12, scale: mobile ? 1 : 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: mobile ? -4 : 10, scale: mobile ? 1 : 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={
        mobile
          ? "mt-3 space-y-2 rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/70 to-amber-50/70 p-3 shadow-sm"
          : "absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-3xl border border-white/80 bg-gradient-to-br from-white via-sky-50/95 to-amber-50/90 p-3 shadow-2xl shadow-sky-900/10 backdrop-blur-xl"
      }
    >
      {items.map((item) => {
        const Icon = item.icon;
        const itemActive = activePath === item.href;

        return (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`group flex items-start gap-4 rounded-2xl p-4 transition-all duration-200 ${
              item.cta
                ? "bg-gradient-to-r from-amber-300 to-yellow-200 text-slate-950 shadow-md shadow-amber-200/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200/80"
                : itemActive
                  ? "bg-sky-100 text-sky-950"
                  : "text-slate-700 hover:-translate-y-0.5 hover:bg-white hover:text-sky-950 hover:shadow-md hover:shadow-sky-100/70"
            }`}
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                item.cta
                  ? "bg-white/75 text-amber-600"
                  : "bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white"
              }`}
            >
              <Icon size={20} strokeWidth={2.2} />
            </span>

            <span className="min-w-0">
              <span className="block text-sm font-bold tracking-wide">
                {item.label}
              </span>
              <span
                className={`mt-1 block text-sm leading-5 ${
                  item.cta ? "text-slate-700" : "text-slate-500"
                }`}
              >
                {item.description}
              </span>
            </span>
          </a>
        );
      })}
    </motion.div>
  );

  if (mobile) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold transition-colors ${
            isActive
              ? "bg-sky-100 text-sky-800"
              : "text-slate-700 hover:bg-sky-50 hover:text-sky-800"
          }`}
        >
          {label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>{open && dropdownContent}</AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        aria-expanded={open}
        className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          isActive
            ? "bg-sky-100 text-sky-800"
            : "text-slate-700 hover:bg-sky-50 hover:text-sky-800"
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>{open && dropdownContent}</AnimatePresence>
    </div>
  );
}

export default function Navbar({ activePath = "#home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-sky-100 bg-white/90 shadow-lg shadow-sky-900/5 backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
         <span className="flex size-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-sky-200 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
  <img
    src="\src\assets\WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
    alt="AimSkills logo"
    className="h-full w-full object-cover"
  />
</span>


          <span>
            <span className="block text-xl font-extrabold tracking-tight text-slate-950">
              AimSkills
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
              For every child
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activePath === item.href;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-100 text-sky-800"
                    : "text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <Dropdown
            label="Resources"
            items={resourceItems}
            activePath={activePath}
          />
          <Dropdown
            label="Get Involved"
            items={involvedItems}
            activePath={activePath}
          />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#volunteer"
            className="rounded-full border border-sky-200 px-5 py-2.5 text-sm font-bold text-sky-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
          >
            Volunteer
          </a>
          <a
            href="#donate"
            className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 px-5 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-200/80"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-2xl border border-sky-100 bg-white text-slate-800 shadow-sm transition-colors hover:bg-sky-50 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sky-100 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const isActive = activePath === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-sky-100 text-sky-800"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <Dropdown
                label="Resources"
                items={resourceItems}
                activePath={activePath}
                mobile
              />
              <Dropdown
                label="Get Involved"
                items={involvedItems}
                activePath={activePath}
                mobile
              />

              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href="#volunteer"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-sky-200 px-4 py-3 text-center text-sm font-bold text-sky-700 transition-colors hover:bg-sky-50"
                >
                  Volunteer
                </a>
                <a
                  href="#donate"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-200 px-4 py-3 text-center text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-200/60"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
