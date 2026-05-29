
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   ChevronRight,
//   Clock,
//   Copy,
//   Link2,
//   Share2,
//   X,
// } from "lucide-react";
// import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import { toast } from "react-hot-toast";

// const ServerUrl = "http://localhost:8000";

// function formatDate(date) {
//   if (!date) return "";
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));
// }

// function estimateReadTime(content = "") {
//   const words = String(content).trim().split(/\s+/).filter(Boolean).length;
//   return `${Math.max(1, Math.ceil(words / 200))} min read`;
// }

// function LoadingState() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#EEF3FC] via-[#EEF3FC] to-white flex items-center justify-center">
//       <div className="text-center">
//         <div className="mx-auto h-12 w-12 animate-spin rounded-full border-[3px] border-[#B8CCF0] border-t-[#1A4DA8]" />
//         <p className="mt-5 text-sm font-medium text-slate-500">Loading article...</p>
//       </div>
//     </div>
//   );
// }

// function ErrorState({ message, onRetry }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#EEF3FC] to-white flex items-center justify-center">
//       <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-6">
//         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg shadow-slate-200/50 text-red-400 mb-8">
//           <X className="h-8 w-8" />
//         </div>
//         <h2 className="text-2xl font-extrabold text-[#0D2B6B] mb-3">Article Not Found</h2>
//         <p className="text-slate-500 text-sm leading-relaxed mb-8">{message || "This article doesn't exist or has been removed."}</p>
//         <div className="flex gap-3 justify-center flex-wrap">
//           <Link to="/blogs" className="inline-flex items-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2E6FD9] transition-all shadow-lg shadow-[#1A4DA8]/20 hover:shadow-xl">
//             <ArrowLeft size={16} /> Back to Blogs
//           </Link>
//           {onRetry && (
//             <button onClick={onRetry} className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
//               Try Again
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function ShareModal({ blog, isOpen, onClose }) {
//   if (!blog) return null;
//   const url = window.location.href;
//   const shareText = `${blog.title} - AimSkills`;

//   const shareLinks = [
//     { name: "Copy", icon: Link2, action: () => { navigator.clipboard.writeText(url); toast.success("Link copied!"); onClose(); }, style: "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:shadow-sm" },
//     { name: "WhatsApp", icon: FaWhatsapp, action: () => { window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + url)}`, "_blank"); onClose(); }, style: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:shadow-sm" },
//     { name: "Twitter", icon: FaTwitter, action: () => { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-sky-50 text-sky-500 hover:bg-sky-100 hover:shadow-sm" },
//     { name: "Facebook", icon: FaFacebook, action: () => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm" },
//     { name: "LinkedIn", icon: FaLinkedin, action: () => { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:shadow-sm" },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-[#0D2B6B]/30 backdrop-blur-sm" />
//           <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl shadow-slate-300/50">
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h3 className="text-xl font-extrabold text-[#0D2B6B]">Share Article</h3>
//                   <p className="text-xs text-slate-400 mt-1">Spread the knowledge</p>
//                 </div>
//                 <button onClick={onClose} className="flex size-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"><X size={16} /></button>
//               </div>
//               <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-2 p-4 bg-[#EEF3FC]/50 rounded-2xl border border-[#EEF3FC]">{blog.title}</p>
//               <div className="flex gap-2 flex-wrap">
//                 {shareLinks.map((link) => (
//                   <button key={link.name} onClick={link.action} className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition-all ${link.style}`}>
//                     <link.icon size={15} />{link.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// function TopNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//       isScrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#EEF3FC]" : "bg-transparent"
//     }`}>
//       <div className="mx-auto max-w-5xl px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/blogs" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
//             isScrolled ? "text-[#1A4DA8] hover:text-[#2E6FD9]" : "text-[#1A4DA8] hover:text-[#2E6FD9]"
//           }`}>
//             <span className="flex size-8 items-center justify-center rounded-lg bg-[#EEF3FC] transition-colors">
//               <ArrowLeft size={15} />
//             </span>
//             Articles
//           </Link>
//           <div className="flex items-center gap-2 text-xs font-medium">
//             <Link to="/" className="text-slate-400 hover:text-[#1A4DA8] transition-colors">Home</Link>
//             <ChevronRight size={12} className="text-slate-300" />
//             <Link to="/blogs" className="text-slate-400 hover:text-[#1A4DA8] transition-colors">Blogs</Link>
//             <ChevronRight size={12} className="text-slate-300" />
//             <span className="text-[#1A4DA8]">Article</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function RecentArticles({ currentBlogId }) {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchRecent = async () => {
//       try {
//         const result = await axios.get(`${ServerUrl}/api/blog/get`, { withCredentials: true });
//         const allBlogs = result.data?.blogs || result.data?.data || [];
//         const recent = allBlogs
//           .filter(b => (b._id || b.id) !== currentBlogId)
//           .slice(0, 3)
//           .map(b => ({
//             id: b._id || b.id,
//             title: b.title,
//             slug: b.slug || b._id || b.id,
//             imageUrl: b.imageUrl || b.thumbnail,
//             createdAt: b.createdAt,
//           }));
//         setArticles(recent);
//       } catch (error) { console.log("Could not fetch recent"); }
//     };
//     if (currentBlogId) fetchRecent();
//   }, [currentBlogId]);

//   if (articles.length === 0) return null;

//   return (
//     <section className="py-20 sm:py-24 bg-white border-t border-[#EEF3FC]">
//       <div className="mx-auto max-w-5xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-[#EEF3FC] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A4DA8]">
//             Continue Reading
//           </div>
//           <h2 className="text-3xl font-extrabold text-[#0D2B6B] sm:text-4xl">
//             Related <span className="text-[#B8952A]">Articles</span>
//           </h2>
//           <p className="mt-3 text-sm text-slate-500">Discover more stories and insights</p>
//         </motion.div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {articles.map((article) => (
//             <motion.article
//               key={article.id}
//               whileHover={{ y: -6 }}
//               className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-400 hover:shadow-xl hover:border-[#B8CCF0]"
//             >
//               <Link to={`/blogs/${article.slug}`} className="block">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={article.imageUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
//                     alt={article.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-3">
//                     <CalendarDays size={13} className="text-[#1A4DA8]" />
//                     <p className="text-xs font-medium text-slate-400">{formatDate(article.createdAt)}</p>
//                   </div>
//                   <h3 className="text-[15px] font-extrabold text-[#0D2B6B] line-clamp-2 leading-snug transition-colors group-hover:text-[#1A4DA8]">
//                     {article.title}
//                   </h3>
//                   <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#1A4DA8] group-hover:text-[#B8952A] transition-colors">
//                     Read Article
//                     <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function BlogDetail() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showShare, setShowShare] = useState(false);

//   const fetchBlog = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const result = await axios.get(`${ServerUrl}/api/blog/get/${id}`, { withCredentials: true });
//       const blogData = result.data?.blog || result.data?.data || result.data;
//       if (blogData) {
//         setBlog({
//           id: blogData._id || blogData.id,
//           title: blogData.title,
//           content: blogData.content,
//           imageUrl: blogData.imageUrl || blogData.thumbnail,
//           createdAt: blogData.createdAt,
//         });
//       } else {
//         setError("Article not found");
//       }
//     } catch (error) {
//       setError(error.response?.status === 404 ? "Article not found" : "Failed to load article");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (loading) return <LoadingState />;
//   if (error) return <ErrorState message={error} onRetry={fetchBlog} />;

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#EEF3FC] via-[#EEF3FC] to-white">
//       <TopNavbar />

//       {/* Header */}
//       <section className="relative pt-20 pb-10 sm:pt-30 sm:pb-14">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#B8CCF0]/15 rounded-full blur-3xl" />
//           <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#F5E8C0]/20 rounded-full blur-3xl" />
//         </div>

//         <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <h1 className="text-[28px] font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-[44px] leading-[1.2]">
//               {blog.title}
//             </h1>

//             <div className="mt-6 flex items-center justify-center gap-3">
//               <span className="h-px w-8 bg-[#B8CCF0]" />
//               <span className="size-1.5 rounded-full bg-[#B8952A]" />
//               <span className="h-px w-8 bg-[#B8CCF0]" />
//             </div>

//             <div className="mt-6 flex items-center justify-center gap-2 text-sm">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#EEF3FC] text-slate-500 shadow-sm">
//                 <CalendarDays size={13} className="text-[#1A4DA8]" />
//                 <span className="font-medium">{formatDate(blog.createdAt)}</span>
//               </span>
//               <span className="text-slate-300">•</span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#EEF3FC] text-slate-500 shadow-sm">
//                 <Clock size={13} className="text-[#1A4DA8]" />
//                 <span className="font-medium">{estimateReadTime(blog.content)}</span>
//               </span>
//               <span className="text-slate-300">•</span>
//               <button
//                 onClick={() => setShowShare(true)}
//                 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#EEF3FC] text-[#1A4DA8] hover:bg-[#EEF3FC] hover:border-[#B8CCF0] font-medium transition-all shadow-sm"
//               >
//                 <Share2 size={13} /> Share
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Image */}
//       {blog.imageUrl && (
//         <section className="pb-10">
//           <div className="mx-auto max-w-4xl px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.15, duration: 0.6 }}
//               className="overflow-hidden rounded-3xl shadow-xl shadow-slate-300/30 border border-white/50 ring-1 ring-slate-200/50"
//             >
//               <img
//                 src={blog.imageUrl}
//                 alt={blog.title}
//                 className="w-full h-auto max-h-[520px] object-cover"
//               />
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Content - IMPROVED READABILITY */}
//       <section className="pb-20 sm:pb-24">
//         <div className="mx-auto max-w-3xl px-6 lg:px-8">
//           <motion.article
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.25, duration: 0.6 }}
//             className="bg-white rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/30 p-8 sm:p-12 lg:p-14"
//           >
//             <div
//               className="prose prose-xl max-w-none
//                 prose-headings:text-[#0D2B6B] prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:leading-tight
//                 prose-h2:text-[26px] prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-[#EEF3FC]
//                 prose-h3:text-[20px] prose-h3:mt-12 prose-h3:mb-5
//                 prose-p:text-slate-700 prose-p:leading-[2] prose-p:mb-8 prose-p:text-[17px]
//                 prose-a:text-[#1A4DA8] prose-a:no-underline prose-a:font-semibold hover:prose-a:text-[#2E6FD9] prose-a:border-b prose-a:border-[#B8CCF0] hover:prose-a:border-[#2E6FD9]
//                 prose-strong:text-[#0D2B6B] prose-strong:font-extrabold
//                 prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-12 prose-img:border prose-img:border-slate-200 prose-img:mx-auto prose-img:max-w-full
//                 prose-blockquote:border-l-[5px] prose-blockquote:border-[#B8952A] prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#F5E8C0]/10 prose-blockquote:to-transparent prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:text-slate-600 prose-blockquote:italic prose-blockquote:my-10 prose-blockquote:text-[16px] prose-blockquote:leading-relaxed
//                 prose-li:text-slate-700 prose-li:leading-[1.9] prose-li:my-2 prose-li:text-[16px]
//                 prose-ul:my-6 prose-ul:pl-6
//                 prose-ol:my-6 prose-ol:pl-6
//                 prose-hr:border-[#EEF3FC] prose-hr:my-14
//                 prose-pre:bg-[#0D2B6B] prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:shadow-lg prose-pre:text-sm prose-pre:my-10
//                 prose-code:text-[#B8952A] prose-code:bg-[#F5E8C0]/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-medium
//                 prose-table:border-collapse prose-table:w-full prose-table:my-10
//                 prose-th:bg-[#EEF3FC] prose-th:text-[#0D2B6B] prose-th:font-bold prose-th:p-4 prose-th:text-left prose-th:text-sm
//                 prose-td:border-b prose-td:border-slate-200 prose-td:p-4 prose-td:text-sm prose-td:text-slate-700"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />

//             {/* Share Footer */}
//             <div className="mt-20 pt-12 border-t-2 border-[#EEF3FC]">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//                 <div>
//                   <p className="text-lg font-extrabold text-[#0D2B6B]">Enjoyed this article?</p>
//                   <p className="text-sm text-slate-500 mt-1.5">Share it with your community</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copied!"); }} className="flex size-11 items-center justify-center rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all" title="Copy Link">
//                     <Copy size={17} />
//                   </button>
//                   <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + " " + window.location.href)}`, "_blank")} className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 transition-all" title="WhatsApp">
//                     <FaWhatsapp size={17} />
//                   </button>
//                   <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank")} className="flex size-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 transition-all" title="Twitter">
//                     <FaTwitter size={17} />
//                   </button>
//                   <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")} className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 transition-all" title="Facebook">
//                     <FaFacebook size={17} />
//                   </button>
//                   <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank")} className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 transition-all" title="LinkedIn">
//                     <FaLinkedin size={17} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.article>

//           {/* Back Link */}
//           <div className="mt-12 text-center">
//             <Link to="/blogs" className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:text-[#1A4DA8] hover:border-[#B8CCF0] hover:bg-[#EEF3FC] hover:shadow-md transition-all">
//               <ArrowLeft size={16} /> Back to All Articles
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Recent Articles */}
//       <RecentArticles currentBlogId={blog?.id} />

//       <ShareModal blog={blog} isOpen={showShare} onClose={() => setShowShare(false)} />
//     </main>
//   );
// }


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Copy,
  Share2,
  X,
  BookOpen,
  Tag,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ServerUrl = "https://aimskills.onrender.com";

function formatDate(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function estimateReadTime(content = "") {
  const words = String(content).trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-[#D4C5A0] border-t-[#2C4A8A]" />
        <p className="mt-4 text-sm font-medium text-[#888880]">Loading article…</p>
      </div>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow text-red-400 mb-6">
          <X className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold text-[#1A1A16] mb-2" style={{ fontFamily: "'Georgia', serif" }}>Article Not Found</h2>
        <p className="text-[#888880] text-sm leading-relaxed mb-6">{message || "This article doesn't exist or has been removed."}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/blogs" className="inline-flex items-center gap-2 rounded-full bg-[#2C4A8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1E3666] transition-all">
            <ArrowLeft size={14} /> Back to Blogs
          </Link>
          {onRetry && (
            <button onClick={onRetry} className="inline-flex items-center gap-2 rounded-full border border-[#DDD] bg-white px-5 py-2.5 text-sm font-semibold text-[#444] hover:bg-[#F5F5F0] transition-all">
              Try Again
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ShareModal({ blog, isOpen, onClose }) {
  if (!blog) return null;
  const url = window.location.href;
  const shareText = `${blog.title} - AimSkills`;

  const shareLinks = [
    { name: "Copy Link", icon: Copy, action: () => { navigator.clipboard.writeText(url); toast.success("Link copied!"); onClose(); }, style: "bg-[#F5F5F0] text-[#444] hover:bg-[#EAEAE5]" },
    { name: "WhatsApp", icon: FaWhatsapp, action: () => { window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + url)}`, "_blank"); onClose(); }, style: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" },
    { name: "Twitter", icon: FaTwitter, action: () => { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-sky-50 text-sky-600 hover:bg-sky-100" },
    { name: "Facebook", icon: FaFacebook, action: () => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
    { name: "LinkedIn", icon: FaLinkedin, action: () => { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank"); onClose(); }, style: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.97, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 16 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A16]" style={{ fontFamily: "'Georgia', serif" }}>Share this Article</h3>
                  <p className="text-xs text-[#888880] mt-0.5">Spread the knowledge</p>
                </div>
                <button onClick={onClose} className="flex size-7 items-center justify-center rounded-full bg-[#F5F5F0] text-[#888880] hover:bg-[#EAEAE5] transition-all"><X size={14} /></button>
              </div>
              <p className="text-[13px] text-[#555] leading-relaxed mb-4 p-3 bg-[#FAFAF8] rounded-xl border border-[#EAEAE5] line-clamp-2" style={{ fontFamily: "'Georgia', serif" }}>{blog.title}</p>
              <div className="flex flex-wrap gap-2">
                {shareLinks.map((link) => (
                  <button key={link.name} onClick={link.action} className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all ${link.style}`}>
                    <link.icon size={13} />{link.name}
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

function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-xl shadow-sm border-b border-[#EAEAE5]" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/blogs" className="flex items-center gap-2 text-sm font-semibold text-[#2C4A8A] hover:text-[#1E3666] transition-colors">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#EEF1F8]">
              <ArrowLeft size={13} />
            </span>
            Articles
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Link to="/" className="text-[#AAA] hover:text-[#2C4A8A] transition-colors">Home</Link>
            <ChevronRight size={10} className="text-[#CCC]" />
            <Link to="/blogs" className="text-[#AAA] hover:text-[#2C4A8A] transition-colors">Blogs</Link>
            <ChevronRight size={10} className="text-[#CCC]" />
            <span className="text-[#2C4A8A]">Article</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function RecentArticles({ currentBlogId }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const result = await axios.get(`${ServerUrl}/api/blog/get`, { withCredentials: true });
        const allBlogs = result.data?.blogs || result.data?.data || [];
        const recent = allBlogs
          .filter(b => (b._id || b.id) !== currentBlogId)
          .slice(0, 3)
          .map(b => ({
            id: b._id || b.id,
            title: b.title,
            slug: b.slug || b._id || b.id,
            imageUrl: b.imageUrl || b.thumbnail,
            createdAt: b.createdAt,
          }));
        setArticles(recent);
      } catch (error) { console.log("Could not fetch recent"); }
    };
    if (currentBlogId) fetchRecent();
  }, [currentBlogId]);

  if (articles.length === 0) return null;

  return (
    <section className="py-12 bg-[#F0F0EB] border-t border-[#DDDDD8]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C4A8A] mb-1">Continue Reading</p>
            <h2 className="text-xl font-bold text-[#1A1A16]" style={{ fontFamily: "'Georgia', serif" }}>More Articles</h2>
          </div>
          <div className="w-8 h-0.5 bg-[#C9A84C]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group overflow-hidden rounded-xl bg-white border border-[#EAEAE5] shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Link to={`/blogs/${article.slug}`} className="block">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={article.imageUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <CalendarDays size={11} className="text-[#2C4A8A]" />
                    <p className="text-[10px] font-semibold text-[#AAA] uppercase tracking-wide">{formatDate(article.createdAt)}</p>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#1A1A16] line-clamp-2 leading-snug group-hover:text-[#2C4A8A] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    {article.title}
                  </h3>
                  <div className="mt-3 pt-3 border-t border-[#EAEAE5] flex items-center gap-1 text-[11px] font-bold text-[#2C4A8A] group-hover:text-[#C9A84C] transition-colors">
                    Read Article
                    <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await axios.get(`${ServerUrl}/api/blog/get/${id}`, { withCredentials: true });
      const blogData = result.data?.blog || result.data?.data || result.data;
      if (blogData) {
        setBlog({
          id: blogData._id || blogData.id,
          title: blogData.title,
          content: blogData.content,
          imageUrl: blogData.imageUrl || blogData.thumbnail,
          createdAt: blogData.createdAt,
        });
      } else {
        setError("Article not found");
      }
    } catch (error) {
      setError(error.response?.status === 404 ? "Article not found" : "Failed to load article");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={fetchBlog} />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

        .article-body {
          font-family: 'Lora', Georgia, serif;
          color: #2A2A26;
          font-size: 17px;
          line-height: 1.85;
          letter-spacing: 0.01em;
        }

        .article-body p {
          margin-bottom: 1.4em;
          color: #2A2A26;
        }

        .article-body h1,
        .article-body h2,
        .article-body h3,
        .article-body h4 {
          font-family: 'Lora', Georgia, serif;
          color: #0F1F44;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-top: 2em;
          margin-bottom: 0.6em;
        }

        .article-body h2 {
          font-size: 23px;
          border-bottom: 1.5px solid #EEF0F5;
          padding-bottom: 0.4em;
        }

        .article-body h3 {
          font-size: 19px;
          color: #1A2F5A;
        }

        .article-body h4 {
          font-size: 16px;
          color: #2C4A8A;
        }

        .article-body a {
          color: #2C4A8A;
          text-decoration: underline;
          text-decoration-color: #B8C8E8;
          text-underline-offset: 3px;
          transition: color 0.2s, text-decoration-color 0.2s;
        }

        .article-body a:hover {
          color: #1E3666;
          text-decoration-color: #1E3666;
        }

        .article-body strong, .article-body b {
          font-weight: 700;
          color: #0F1F44;
        }

        .article-body em, .article-body i {
          font-style: italic;
          color: #3A3A36;
        }

        .article-body blockquote {
          margin: 1.8em 0;
          padding: 1em 1.5em;
          border-left: 3px solid #C9A84C;
          background: linear-gradient(to right, #FBF8F0, #FAFAF8);
          border-radius: 0 10px 10px 0;
          font-style: italic;
          font-size: 17px;
          color: #444440;
          line-height: 1.7;
        }

        .article-body blockquote p {
          margin-bottom: 0;
        }

        .article-body ul, .article-body ol {
          margin: 1em 0 1.5em 0;
          padding-left: 1.2em;
        }

        .article-body ul {
          list-style: none;
          padding-left: 0;
        }

        .article-body ul li {
          position: relative;
          padding-left: 1.4em;
          margin-bottom: 0.5em;
          color: #2A2A26;
          font-size: 16px;
          line-height: 1.75;
        }

        .article-body ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
        }

        .article-body ol li {
          margin-bottom: 0.5em;
          color: #2A2A26;
          font-size: 16px;
          line-height: 1.75;
        }

        .article-body ol li::marker {
          color: #2C4A8A;
          font-weight: 700;
        }

        .article-body img {
          width: 100%;
          max-width: 100%;
          border-radius: 10px;
          margin: 1.8em auto;
          display: block;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #EAEAE5;
        }

        .article-body pre {
          background: #0F1F44;
          color: #E8EDF8;
          padding: 1.2em 1.5em;
          border-radius: 10px;
          overflow-x: auto;
          margin: 1.5em 0;
          font-size: 13px;
          line-height: 1.65;
          font-family: 'Fira Code', 'Consolas', monospace;
        }

        .article-body code {
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 13.5px;
          background: #F0EDE6;
          color: #8B6914;
          padding: 0.15em 0.45em;
          border-radius: 4px;
          letter-spacing: 0;
        }

        .article-body pre code {
          background: transparent;
          color: inherit;
          padding: 0;
          font-size: inherit;
        }

        .article-body hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, #DDDDD8, transparent);
          margin: 2em 0;
        }

        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          font-size: 14px;
          font-family: 'Source Sans 3', sans-serif;
        }

        .article-body th {
          background: #EEF1F8;
          color: #0F1F44;
          font-weight: 700;
          padding: 10px 14px;
          text-align: left;
          border-bottom: 2px solid #D4DCEE;
        }

        .article-body td {
          padding: 10px 14px;
          border-bottom: 1px solid #EAEAE5;
          color: #2A2A26;
        }

        .article-body tr:last-child td { border-bottom: none; }
        .article-body tr:hover td { background: #FAFAF8; }

        .ui-font { font-family: 'Source Sans 3', sans-serif; }
      `}</style>

      <main className="min-h-screen bg-[#F7F7F4]">
        <TopNavbar />

        {/* Hero — compact, information-rich */}
        <section className="relative pt-16 pb-0 bg-white border-b border-[#EAEAE5]">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at 15% 60%, #EEF1F8 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, #FBF8F0 0%, transparent 55%)`
          }} />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge + meta row */}
              <div className="ui-font flex flex-wrap items-center gap-3 mb-4 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1F8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2C4A8A]">
                  <BookOpen size={10} /> Article
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-[#888880]">
                  <CalendarDays size={12} className="text-[#2C4A8A]" />
                  {formatDate(blog.createdAt)}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#CCC]" />
                <span className="flex items-center gap-1.5 text-[12px] text-[#888880]">
                  <Clock size={12} className="text-[#2C4A8A]" />
                  {estimateReadTime(blog.content)}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#CCC]" />
                <button
                  onClick={() => setShowShare(true)}
                  className="flex items-center gap-1.5 text-[12px] text-[#2C4A8A] font-semibold hover:text-[#C9A84C] transition-colors"
                >
                  <Share2 size={12} /> Share
                </button>
              </div>

              {/* Title */}
              <h1 className="text-[26px] font-bold tracking-tight text-[#0F1F44] sm:text-[34px] lg:text-[40px] leading-[1.2] max-w-4xl pb-6"
                style={{ fontFamily: "'Lora', Georgia, serif" }}>
                {blog.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Two-column layout: Content + Sidebar */}
        <section className="py-8">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="flex gap-8 items-start">

              {/* Main content column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.55 }}
                className="min-w-0 flex-1"
              >
                {/* Featured Image */}
                {blog.imageUrl && (
                  <div className="overflow-hidden rounded-xl shadow border border-[#EAEAE5] mb-6">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-auto max-h-[400px] object-cover"
                    />
                  </div>
                )}

                {/* Article card */}
                <article className="bg-white rounded-xl border border-[#EAEAE5] shadow-sm overflow-hidden">
                  <div className="px-7 py-8 sm:px-10 sm:py-10">
                    <div
                      className="article-body"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>

                  {/* Share footer */}
                  <div className="px-7 py-5 sm:px-10 bg-[#FAFAF8] border-t border-[#EAEAE5]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-[13px] font-bold text-[#0F1F44]" style={{ fontFamily: "'Lora', Georgia, serif" }}>Found this helpful?</p>
                        <p className="text-[11px] text-[#888880] mt-0.5 ui-font">Share it with your network</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {[
                          { title: "Copy Link", icon: Copy, action: () => { navigator.clipboard.writeText(window.location.href); toast.success("Link copied!"); }, cls: "bg-[#F0F0EB] text-[#555] hover:bg-[#E5E5E0]" },
                          { title: "WhatsApp", icon: FaWhatsapp, action: () => window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + " " + window.location.href)}`, "_blank"), cls: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" },
                          { title: "Twitter", icon: FaTwitter, action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-sky-50 text-sky-600 hover:bg-sky-100" },
                          { title: "Facebook", icon: FaFacebook, action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
                          { title: "LinkedIn", icon: FaLinkedin, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100" },
                        ].map(({ title, icon: Icon, action, cls }) => (
                          <button key={title} onClick={action} title={title}
                            className={`flex size-9 items-center justify-center rounded-full transition-all ${cls}`}>
                            <Icon size={15} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Back link */}
                <div className="mt-5">
                  <Link to="/blogs" className="ui-font inline-flex items-center gap-1.5 rounded-full bg-white border border-[#DDDDD8] px-5 py-2.5 text-sm font-semibold text-[#555] hover:text-[#2C4A8A] hover:border-[#B8C8E8] hover:bg-[#EEF1F8] hover:shadow-sm transition-all">
                    <ArrowLeft size={14} /> Back to All Articles
                  </Link>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="hidden lg:block w-64 flex-shrink-0 space-y-5 sticky top-20"
              >
                {/* Quick info card */}
                <div className="bg-white rounded-xl border border-[#EAEAE5] shadow-sm p-5">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2C4A8A] mb-4 ui-font">Article Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-[#EEF1F8] flex-shrink-0 mt-0.5">
                        <CalendarDays size={13} className="text-[#2C4A8A]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#AAA] uppercase tracking-wide ui-font">Published</p>
                        <p className="text-[13px] font-semibold text-[#1A1A16] ui-font">{formatDate(blog.createdAt)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-[#EEF1F8] flex-shrink-0 mt-0.5">
                        <Clock size={13} className="text-[#2C4A8A]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#AAA] uppercase tracking-wide ui-font">Read Time</p>
                        <p className="text-[13px] font-semibold text-[#1A1A16] ui-font">{estimateReadTime(blog.content)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-[#EEF1F8] flex-shrink-0 mt-0.5">
                        <Tag size={13} className="text-[#2C4A8A]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#AAA] uppercase tracking-wide ui-font">Category</p>
                        <p className="text-[13px] font-semibold text-[#1A1A16] ui-font">Article</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share card */}
                <div className="bg-white rounded-xl border border-[#EAEAE5] shadow-sm p-5">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2C4A8A] mb-3 ui-font">Share</h3>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { title: "Copy", icon: Copy, action: () => { navigator.clipboard.writeText(window.location.href); toast.success("Copied!"); }, cls: "bg-[#F0F0EB] text-[#555] hover:bg-[#E5E5E0]" },
                      { title: "WhatsApp", icon: FaWhatsapp, action: () => window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + " " + window.location.href)}`, "_blank"), cls: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" },
                      { title: "Twitter", icon: FaTwitter, action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-sky-50 text-sky-600 hover:bg-sky-100" },
                      { title: "Facebook", icon: FaFacebook, action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
                      { title: "LinkedIn", icon: FaLinkedin, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank"), cls: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100" },
                    ].map(({ title, icon: Icon, action, cls }) => (
                      <button key={title} onClick={action} title={title}
                        className={`flex items-center justify-center py-2.5 rounded-lg transition-all ${cls}`}>
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tip card */}
                <div className="bg-gradient-to-br from-[#2C4A8A] to-[#1A2F5A] rounded-xl p-5 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center mb-3">
                    <BookOpen size={14} className="text-white" />
                  </div>
                  <p className="text-[13px] font-bold leading-snug mb-2" style={{ fontFamily: "'Georgia', serif" }}>Enjoying this read?</p>
                  <p className="text-[11px] text-white/70 leading-relaxed mb-4 ui-font">Explore more articles on our blog for tips, insights and guides.</p>
                  <Link to="/blogs" className="ui-font inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-white/15 hover:bg-white/25 rounded-full px-4 py-2 transition-all">
                    Browse All <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.aside>

            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <RecentArticles currentBlogId={blog?.id} />

        <ShareModal blog={blog} isOpen={showShare} onClose={() => setShowShare(false)} />
      </main>
    </>
  );
}