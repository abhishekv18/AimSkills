
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ArrowRight, CalendarDays, Clock, Newspaper } from "lucide-react";
// import { Link } from "react-router-dom";

// const ServerUrl = "http://localhost:8000";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function BlogsPreviewSection() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchLatestBlogs = async () => {
//     try {
//       const result = await axios.get(`${ServerUrl}/api/blog/get`);
//       const blogList = result.data?.blogs || result.data?.data || result.data || [];
//       const normalized = (Array.isArray(blogList) ? blogList : [])
//         .map((blog) => ({
//           id: blog._id || blog.id,
//           title: blog.title || "Untitled",
//           imageUrl: blog.imageUrl || blog.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//           excerpt: (blog.content || "").replace(/<[^>]*>/g, "").substring(0, 120) + "...",
//           createdAt: blog.createdAt || new Date(),
//         }))
//         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//         .slice(0, 3);
//       setBlogs(normalized);
//     } catch (error) {
//       console.error("Failed to fetch blogs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestBlogs();
//   }, []);

//   if (blogs.length === 0 && !loading) return null;

//   return (
//     <motion.section
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.14 }}
//       className="relative bg-white"
//     >
//       <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#B8CCF0]/30 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F5E8C0]/45 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mx-auto max-w-3xl text-center mb-12"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-[#EEF3FC] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1A4DA8] shadow-sm">
//             <Newspaper size={14} />
//             Latest Insights
//           </div>
//           <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
//             From Our <span className="text-[#B8952A]">Blog</span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
//             Discover stories of impact, skill development insights, and updates from our community.
//           </p>
//         </motion.div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
//                 <div className="h-48 animate-pulse bg-gradient-to-r from-[#EEF3FC] via-white to-[#EEF3FC]" />
//                 <div className="p-6 space-y-3">
//                   <div className="h-4 w-20 animate-pulse rounded-full bg-[#EEF3FC]" />
//                   <div className="h-5 w-full animate-pulse rounded-lg bg-[#EEF3FC]" />
//                   <div className="h-5 w-3/4 animate-pulse rounded-lg bg-[#EEF3FC]" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <>
//             {/* Blog Cards */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.1 }}
//               className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//             >
//               {blogs.map((blog, index) => (
//                 <motion.article
//                   key={blog.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                   whileHover={{ y: -6 }}
//                   className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-400 hover:shadow-xl hover:shadow-slate-200/30 hover:border-[#B8CCF0]"
//                 >
//                   <Link to={`/blogs/${blog.id}`} className="block">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={blog.imageUrl}
//                         alt={blog.title}
//                         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//                         <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#1A4DA8] shadow-xl">
//                           Read Article <ArrowRight size={14} />
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-3">
//                         <span className="inline-flex items-center gap-1.5">
//                           <CalendarDays size={13} className="text-[#1A4DA8]" />
//                           {new Date(blog.createdAt).toLocaleDateString("en-IN", {
//                             day: "2-digit",
//                             month: "short",
//                             year: "numeric",
//                           })}
//                         </span>
//                         <span className="text-slate-300">•</span>
//                         <span className="inline-flex items-center gap-1.5">
//                           <Clock size={13} className="text-[#1A4DA8]" />
//                           {Math.max(1, Math.ceil((blog.excerpt?.split(/\s+/)?.length || 100) / 200))} min read
//                         </span>
//                       </div>
//                       <h3 className="text-[15px] font-extrabold text-[#0D2B6B] line-clamp-2 leading-snug transition-colors group-hover:text-[#1A4DA8]">
//                         {blog.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
//                         {blog.excerpt}
//                       </p>
//                       <div className="mt-4 pt-4 border-t border-slate-100">
//                         <span className="text-xs font-bold text-[#1A4DA8] group-hover:text-[#B8952A] transition-colors inline-flex items-center gap-1">
//                           Read More <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.article>
//               ))}
//             </motion.div>

//             {/* View All Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="mt-12 text-center"
//             >
//               <Link
//                 to="/blogs"
//                 className="inline-flex items-center gap-2 rounded-xl bg-[#1A4DA8] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#1A4DA8]/20 transition-all hover:-translate-y-0.5 hover:bg-[#2E6FD9] hover:shadow-xl hover:shadow-[#1A4DA8]/25"
//               >
//                 View All Articles
//                 <ArrowRight size={16} />
//               </Link>
//             </motion.div>
//           </>
//         )}
//       </div>
//     </motion.section>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, Eye, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const ServerUrl = "https://aimskills.onrender.com";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogsPreviewSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestBlogs = async () => {
    try {
      const result = await axios.get(`${ServerUrl}/api/blog/get`);
      const blogList = result.data?.blogs || result.data?.data || result.data || [];
      const normalized = (Array.isArray(blogList) ? blogList : [])
        .map((blog) => ({
          id: blog._id || blog.id,
          title: blog.title || "Untitled",
          imageUrl: blog.imageUrl || blog.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
          excerpt: (blog.content || "").replace(/<[^>]*>/g, "").substring(0, 130) + "...",
          createdAt: blog.createdAt || new Date(),
        }))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);
      setBlogs(normalized);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  if (blogs.length === 0 && !loading) return null;

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      className="relative bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EEF3FC]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5E8C0]/25 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,43,107,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0]/70 bg-[#EEF3FC]/80 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1A4DA8] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8952A] animate-pulse" />
            Latest Insights
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl">
            From Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#B8952A]">Blog</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#F5E8C0]/60 -z-0 rounded-full" />
            </span>
          </h2>
          
          <p className="mt-5 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
            Discover stories of impact, skill development insights, and updates from our community.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="h-52 animate-pulse bg-gradient-to-r from-[#EEF3FC] via-white to-[#EEF3FC]" />
                <div className="p-6 space-y-3">
                  <div className="flex gap-2">
                    <div className="h-5 w-16 animate-pulse rounded-full bg-[#EEF3FC]" />
                    <div className="h-5 w-14 animate-pulse rounded-full bg-[#EEF3FC]" />
                  </div>
                  <div className="h-5 w-full animate-pulse rounded-lg bg-[#EEF3FC]" />
                  <div className="h-5 w-3/4 animate-pulse rounded-lg bg-[#EEF3FC]" />
                  <div className="space-y-2 pt-3">
                    <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                    <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Blog Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/40 hover:border-[#B8CCF0]/80"
                >
                  <Link to={`/blogs/${blog.id}`} className="block h-full">
                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/60 via-[#0D2B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Read Article Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-[#1A4DA8] shadow-2xl shadow-black/20">
                          <Eye size={15} />
                          Read Article
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs font-semibold mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF3FC] px-3 py-1 text-[#1A4DA8]">
                          <CalendarDays size={12} />
                          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                          <Clock size={12} />
                          {Math.max(1, Math.ceil((blog.excerpt?.split(/\s+/)?.length || 100) / 200))} min read
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[16px] font-extrabold text-[#0D2B6B] line-clamp-2 leading-snug mb-3 transition-colors duration-300 group-hover:text-[#1A4DA8]">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A4DA8] group-hover:text-[#B8952A] transition-colors inline-flex items-center gap-1.5">
                          Continue Reading
                          <ArrowRight size={13} className="transition-all duration-300 group-hover:translate-x-1.5" />
                        </span>
                        <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                          Article
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {/* View All CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-14 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4">
                <Link
                  to="/blogs"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#1A4DA8] to-[#0D2B6B]  px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1A4DA8]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A4DA8]/35"
                >
                  View All Articles
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="text-xs text-slate-400">
                  Stay updated with our latest stories and insights
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  );
}