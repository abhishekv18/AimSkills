
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Link2,
  MessageSquare,
  Search,
  Share2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const ServerUrl = "https://aimskills.onrender.com";
const BLOGS_PER_PAGE = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function formatDate(date) {
  if (!date) return "Recently published";
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

function estimateReadTime(content = "") {
  const words = String(content).trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function getExcerpt(content, maxLength = 160) {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}
 

function normalizeBlog(blog) {
  return {
    id: blog._id || blog.id,
    title: blog.title || "Untitled Article",
    slug: blog.slug || blog._id || blog.id,
    imageUrl: blog.imageUrl || blog.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    content: blog.content || "",
    excerpt: getExcerpt(blog.content, 180),
    createdAt: blog.createdAt || blog.updatedAt || new Date(),
  };
}

function BlogHeroSection({ totalBlogs }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_7xdl1m7xdl1m7xdl.png"
          alt="AimSkills knowledge and insights"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/92 via-[#0D2B6B]/70 to-[#0D2B6B]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/50 via-transparent to-[#0D2B6B]/10" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/25 bg-[#F5E8C0]/8" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-22 lg:px-8">
        <div className="grid gap-10 w-full lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#D4AF55] animate-pulse" />
              AimSkills Knowledge Hub
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Insights That
              <br />
              <span className="text-[#D4AF55]">Drive Impact</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200/90 sm:text-lg">
              Explore stories of transformation, skill development insights, 
              and community impact from across India's youth employment landscape.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#blogs-grid" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B8952A] to-[#D4AF55] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#B8952A]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B8952A]/30">
                Explore Articles
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a href="/about" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/30">
                About AimSkills
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-row justify-center gap-2.5 lg:flex-col lg:w-[170px] shrink-0">
            {[
              { value: `${totalBlogs}+`, label: "Articles" },
              { value: "50K+", label: "Readers" },
              { value: "15+", label: "Writers" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/15 bg-[#1A4DA8]/40 px-3 py-3 lg:px-4 lg:py-3.5 flex-1 text-center lg:text-left transition-all hover:bg-white/12 hover:border-white/25">
                <div className="text-lg lg:text-xl font-extrabold text-[#D4AF55]">{stat.value}</div>
                <div className="mt-0.5 text-[10px] lg:text-[11px] font-semibold text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShareModal({ blog, isOpen, onClose }) {
  if (!blog) return null;
  const url = `${window.location.origin}/blogs/${blog.slug}`;
  const shareText = `${blog.title} - AimSkills`;

  const shareLinks = [
    { name: "Copy Link", icon: Link2, action: () => { navigator.clipboard.writeText(url); toast.success("Link copied!"); onClose(); }, style: "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:shadow-sm" },
    { name: "Twitter", icon: X, action: () => { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-sky-50 text-sky-500 hover:bg-sky-100 hover:shadow-sm" },
    { name: "Facebook", icon: () => <span className="font-bold">f</span>, action: () => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm" },
    { name: "LinkedIn", icon: () => <span className="font-bold">in</span>, action: () => { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:shadow-sm" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-[#0D2B6B]/30 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm rounded-3xl bg-white p-7 shadow-2xl shadow-slate-300/40">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0D2B6B]">Share Article</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Spread the knowledge</p>
                </div>
                <button onClick={onClose} className="flex size-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"><X size={16} /></button>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-5 line-clamp-2 p-4 bg-[#F8F9FB] rounded-2xl border border-slate-100">{blog.title}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {shareLinks.map((link) => (
                  <button key={link.name} onClick={link.action} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${link.style}`}>
                    <link.icon size={16} />{link.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);
    if (currentPage === 1) end = Math.min(3, totalPages);
    if (currentPage === totalPages) start = Math.max(totalPages - 2, 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const pages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed">
        <ChevronLeft size={18} />
      </button>

      {!pages.includes(1) && (
        <>
          <button onClick={() => onPageChange(1)} className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-700">1</button>
          {pages[0] > 2 && <span className="px-1 text-slate-300 text-sm">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex size-11 items-center justify-center rounded-xl text-sm font-bold transition-all ${
            page === currentPage
              ? "bg-gradient-to-br from-[#1A4DA8] to-[#2E6FD9] text-white shadow-lg shadow-[#1A4DA8]/25 scale-105"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700"
          }`}
        >
          {page}
        </button>
      ))}

      {!pages.includes(totalPages) && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span className="px-1 text-slate-300 text-sm">...</span>}
          <button onClick={() => onPageChange(totalPages)} className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-700">{totalPages}</button>
        </>
      )}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed">
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}

function FeaturedBlogCard({ blog, onShare }) {
  if (!blog) return null;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/40 hover:-translate-y-1.5"
    >
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[500px]">
          <img src={blog.imageUrl} alt={blog.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/70 via-[#0D2B6B]/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0D2B6B]/8 lg:to-[#0D2B6B]/25" />
          <div className="absolute bottom-6 left-6 right-6 lg:hidden">
            <h3 className="text-2xl font-extrabold text-white line-clamp-2 drop-shadow-lg">{blog.title}</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 bg-gradient-to-b lg:bg-gradient-to-r lg:from-white lg:to-[#F8F9FB]">
          <h3 className="hidden text-3xl font-extrabold leading-tight tracking-tight text-[#0D2B6B] lg:block lg:text-4xl">
            {blog.title}
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-600 line-clamp-4">{blog.excerpt}</p>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium text-slate-500">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF3FC] text-[#1A4DA8]">
              <CalendarDays className="h-3.5 w-3.5" />{formatDate(blog.createdAt)}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF3FC] text-[#1A4DA8]">
              <Clock className="h-3.5 w-3.5" />{estimateReadTime(blog.content)}
            </span>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <Link to={`/blogs/${blog.id}`} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#2E6FD9] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#1A4DA8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1A4DA8]/30">
              Read Full Article <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={(e) => { e.preventDefault(); onShare(blog); }} className="flex size-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:bg-[#EEF3FC] hover:text-[#1A4DA8] hover:border-[#B8CCF0] hover:shadow-sm" title="Share">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function BlogCard({ blog, onShare }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-400 hover:shadow-xl hover:shadow-slate-200/30 hover:border-slate-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={blog.imageUrl} alt={blog.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <button
          onClick={(e) => { e.preventDefault(); onShare(blog); }}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm text-slate-600 shadow-md opacity-0 transition-all duration-300 hover:bg-white hover:text-[#1A4DA8] hover:shadow-lg group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
        >
          <Share2 size={15} />
        </button>
      </div>

      <Link to={`/blogs/${blog.id}`} className="block p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF3FC] px-3 py-1 text-[#1A4DA8]">
            <CalendarDays className="h-3 w-3" />{formatDate(blog.createdAt)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3 w-3" />{estimateReadTime(blog.content)}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-lg font-extrabold leading-snug text-[#0D2B6B] transition-colors duration-300 group-hover:text-[#1A4DA8]">
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">{blog.excerpt}</p>

        <div className="mt-5 pt-4 border-t border-slate-100 inline-flex items-center gap-2 text-sm font-bold text-[#1A4DA8] transition-all duration-300 group-hover:gap-3 group-hover:text-[#B8952A]">
          Read More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </Link>
    </motion.article>
  );
}

function LoadingState() {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-56 animate-pulse bg-gradient-to-r from-[#EEF3FC] via-white to-[#EEF3FC]" />
            <div className="space-y-4 p-6">
              <div className="flex gap-2">
                <div className="h-6 w-20 animate-pulse rounded-full bg-[#EEF3FC]" />
                <div className="h-6 w-16 animate-pulse rounded-full bg-[#EEF3FC]" />
              </div>
              <div className="h-5 w-full animate-pulse rounded-lg bg-[#EEF3FC]" />
              <div className="h-5 w-3/4 animate-pulse rounded-lg bg-[#EEF3FC]" />
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EmptyState({ hasError, onRetry }) {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-lg shadow-slate-200/30">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EEF3FC] text-[#1A4DA8] shadow-sm">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="mt-6 text-2xl font-extrabold text-[#0D2B6B]">
            {hasError ? "Unable To Load Articles" : "No Articles Found"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            {hasError ? "Please try again later." : "New stories will appear here soon."}
          </p>
          {hasError && (
            <button onClick={onRetry} className="mt-6 rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#2E6FD9] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#1A4DA8]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Try Again
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shareBlog, setShareBlog] = useState(null);
 const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setHasError(false);
      const result = await axios.get(`${ServerUrl}/api/blog/get`, { withCredentials: true });
      const blogList = result.data?.blogs || result.data?.data || result.data || [];
      setBlogs(Array.isArray(blogList) ? blogList.map(normalizeBlog) : []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setHasError(true);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const sortedBlogs = useMemo(() => [...blogs].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)), [blogs]);
  const featuredBlog = sortedBlogs[0];
  const remainingBlogs = useMemo(() => sortedBlogs.slice(featuredBlog ? 1 : 0), [sortedBlogs, featuredBlog]);

  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return remainingBlogs;
    const searchValue = search.toLowerCase().trim();
    return remainingBlogs.filter(blog => blog.title.toLowerCase().includes(searchValue) || blog.excerpt.toLowerCase().includes(searchValue));
  }, [remainingBlogs, search]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = useMemo(() => filteredBlogs.slice((currentPage - 1) * BLOGS_PER_PAGE, currentPage * BLOGS_PER_PAGE), [filteredBlogs, currentPage]);

  useEffect(() => { setCurrentPage(1); }, [search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("blogs-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] text-[#111827]">
      <Navbar />
      
      <BlogHeroSection totalBlogs={blogs.length} />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingState key="loading" />
        ) : hasError ? (
          <EmptyState key="error" hasError onRetry={fetchBlogs} />
        ) : blogs.length === 0 ? (
          <EmptyState key="empty" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            
            {/* Introduction Section */}
            <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#EEF3FC]/40 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#F5E8C0]/20 rounded-full blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-[#EEF3FC] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1A4DA8] shadow-sm">
                    <TrendingUp size={14} /> Latest Updates
                  </motion.div>

                  <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
                    Stories of <span className="text-[#B8952A]">Change</span> & Growth
                  </motion.h2>

                  <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    Dive into articles that explore skill development, youth empowerment, 
                    and the collective effort to bridge India's employment gap.
                  </motion.p>
                </div>

                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-3">
                  {[
                    { icon: FileText, label: "Articles Published", value: `${blogs.length}+`, gradient: "from-[#EEF3FC] to-[#B8CCF0]/30" },
                    { icon: Users, label: "Monthly Readers", value: "50K+", gradient: "from-[#F5E8C0]/40 to-[#B8952A]/10" },
                    { icon: MessageSquare, label: "Topics Covered", value: "25+", gradient: "from-[#EEF3FC] to-[#1A4DA8]/10" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br ${stat.gradient} p-6 shadow-sm transition-all hover:shadow-md`}
                    >
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-sm">
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-[#0D2B6B]">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Featured Blog */}
            {featuredBlog && !search && (
              <section className="bg-[#F8F9FB] pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#B8952A]/30 bg-gradient-to-r from-[#F5E8C0]/30 to-[#F5E8C0]/10 px-4 py-2 text-xs font-bold text-[#B8952A] shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-[#B8952A] animate-pulse" /> Featured Article
                    </div>
                  </div>
                  <FeaturedBlogCard blog={featuredBlog} onShare={setShareBlog} />
                </div>
              </section>
            )}

            {/* Search Bar */}
            <section id="blogs-grid" className="border-y border-slate-200 bg-white/95 backdrop-blur-sm py-6 sticky top-20 z-20 shadow-sm">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative mx-auto w-full max-w-xl">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1A4DA8]/60" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FB] py-3.5 pl-12 pr-12 text-sm font-medium text-[#111827] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#B8952A] focus:bg-white focus:ring-4 focus:ring-[#F5E8C0]/50 focus:shadow-md"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 flex size-7 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700 transition-colors">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Blog Grid */}
            <section className="bg-[#F8F9FB] py-16 sm:py-20">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {filteredBlogs.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
                    <Search className="mx-auto h-14 w-14 text-slate-300" />
                    <h3 className="mt-5 text-xl font-bold text-slate-600">No articles match</h3>
                    <p className="mt-2 text-sm text-slate-500">Try different keywords</p>
                    <button onClick={() => setSearch("")} className="mt-5 text-sm font-bold text-[#1A4DA8] hover:text-[#2E6FD9] transition-colors">Clear search</button>
                  </motion.div>
                ) : (
                  <>
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.03 }} className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                      {paginatedBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} onShare={setShareBlog} />
                      ))}
                    </motion.div>

                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                    {totalPages > 1 && (
                      <p className="text-center text-xs text-slate-400 mt-6">
                        Page {currentPage} of {totalPages} • {filteredBlogs.length} articles
                      </p>
                    )}
                  </>
                )}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <ShareModal blog={shareBlog} isOpen={!!shareBlog} onClose={() => setShareBlog(null)} />
      <CTASection />
      <PartnersSection />
      <Footer />
    </main>
  );
}