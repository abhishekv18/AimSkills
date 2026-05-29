
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Eye,
  Grid3X3,
  ImageIcon,
  Images,
  MapPin,
  Search,
  X,
  ZoomIn,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ServerUrl = "https://aimskills.onrender.com";
const IMAGES_PER_PAGE = 12;
function normalizeGallery(item) {
  return {
    id: item._id || item.id,
    title: item.title || "Gallery Image",
    imageUrl: item.imageUrl || item.url || "",
    description: item.description || "",
    createdAt: item.createdAt || new Date(),
  };
}


function GalleryHeroSection({ totalImages }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D2B6B]">
      <div className="absolute inset-0">
        <img
          src="/Gemini_Generated_Image_uomf93uomf93uomf.png"
          alt="AimSkills gallery"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/90 via-[#0D2B6B]/60 to-[#0D2B6B]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/50 via-transparent to-[#0D2B6B]/10" />

      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2E6FD9]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[#B8952A]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-28 h-40 w-40 rounded-2xl border border-white/10 bg-white/5" />
      <div className="pointer-events-none absolute bottom-32 right-12 h-24 w-24 rounded-2xl border border-[#D4AF55]/20 bg-[#F5E8C0]/8" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid gap-12 w-full lg:grid-cols-[1fr_auto] lg:gap-20 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5E8C0] shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#D4AF55] animate-pulse" />
              Visual Journey
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Moments of{" "}
              <span className="text-[#D4AF55]">Impact</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-slate-200/90 sm:text-xl">
              A glimpse into our training sessions, community programs, and the lives we touch every day.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <a href="#gallery-grid" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B8952A] to-[#D4AF55] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#B8952A]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                View Gallery
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <span className="hidden sm:inline text-white/40 text-sm font-medium">
                {totalImages}+ photographs captured
              </span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="hidden lg:flex flex-col gap-4 w-56 shrink-0">
            {[
              { value: `${totalImages}+`, label: "Images Captured", icon: Images },
              { value: "50+", label: "Training Sessions", icon: Grid3X3 },
              { value: "20+", label: "Locations Covered", icon: MapPin },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/15 bg-[#1A4DA8]/40 px-5 py-4 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon size={18} className="text-[#D4AF55]" />
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                </div>
                <div className="text-xs font-medium text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#B8DFFF]/12 backdrop-blur-lg p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-800 shadow-lg transition-all"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col lg:flex-row max-h-[90vh]">
            {/* Image Section */}
            <div className="lg:w-3/5 bg-slate-100 flex items-center justify-center p-4 min-h-[300px] lg:min-h-[500px]">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full max-h-[500px] object-contain rounded-2xl"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-2/5 flex flex-col justify-center p-8 sm:p-10 overflow-y-auto">
              <h2 className="text-2xl font-extrabold text-[#0D2B6B] leading-tight">
                {image.title}
              </h2>

              {image.description && (
                <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
                  {image.description}
                </p>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A4DA8]">
                    <Camera size={17} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">AimSkills Gallery</p>
                    <p className="text-xs">Captured with purpose</p>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-xl bg-[#EEF3FC] px-5 py-3 text-sm font-bold text-[#1A4DA8] hover:bg-[#B8CCF0] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingState() {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="animate-pulse bg-gradient-to-r from-[#EEF3FC] via-white to-[#EEF3FC]" style={{ height: `${Math.floor(Math.random() * 150) + 200}px` }} />
              <div className="p-5 space-y-3">
                <div className="h-4 w-3/4 animate-pulse rounded-lg bg-[#EEF3FC]" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
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
            <Camera className="h-8 w-8" />
          </div>
          <h3 className="mt-6 text-2xl font-extrabold text-[#0D2B6B]">
            {hasError ? "Unable To Load Gallery" : "No Images Yet"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            {hasError ? "Please try again later." : "Gallery images will appear here soon."}
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
    <nav className="flex items-center justify-center gap-2 mt-14" aria-label="Pagination">
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
export default function Gallery() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/admin/dashboard");
    }
  }, [userData, navigate]);
  const fetchGallery = async () => {
    try {
      setLoading(true);
      setHasError(false);
      const result = await axios.get(`${ServerUrl}/api/gallery/get`, { withCredentials: true });
      const galleryList = result.data?.images || result.data?.gallery || result.data?.data || result.data || [];
      setImages(Array.isArray(galleryList) ? galleryList.map(normalizeGallery) : []);
    } catch (error) {
      console.error("Failed to fetch gallery:", error);
      setHasError(true);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchGallery(); }, []);

  const filteredImages = useMemo(() => {
    if (!search.trim()) return images;
    const searchValue = search.toLowerCase().trim();
    return images.filter(
      (img) =>
        img.title.toLowerCase().includes(searchValue) ||
        img.description.toLowerCase().includes(searchValue)
    );
  }, [images, search]);
 const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(start, start + IMAGES_PER_PAGE);
  }, [filteredImages, currentPage]);

  useEffect(() => { setCurrentPage(1); }, [search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("gallery-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] text-[#111827]">
      <Navbar />

      <GalleryHeroSection totalImages={images.length} />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingState key="loading" />
        ) : hasError ? (
          <EmptyState key="error" hasError onRetry={fetchGallery} />
        ) : images.length === 0 ? (
          <EmptyState key="empty" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            
            {/* Introduction Section */}
            <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#EEF3FC]/40 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#F5E8C0]/15 rounded-full blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8CCF0] bg-[#EEF3FC] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1A4DA8] shadow-sm"
                  >
                    <ImageIcon size={14} />
                    Our Gallery
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-extrabold tracking-tight text-[#0D2B6B] sm:text-4xl lg:text-5xl"
                  >
                    Capturing <span className="text-[#B8952A]">Real Impact</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-5 text-base leading-8 text-slate-600 sm:text-lg"
                  >
                    Every photograph tells a story of transformation, learning, and community empowerment.
                    Click on any image to view it in detail.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 grid gap-5 sm:grid-cols-3"
                >
                  {[
                    { icon: Images, label: "Total Images", gradient: "from-[#EEF3FC] to-[#B8CCF0]/30", value: `${images.length}+` },
                    { icon: Grid3X3, label: "Categories",gradient: "from-[#F5E8C0]/40 to-[#B8952A]/10", value: "Multiple" },
                    { icon: MapPin, label: "Locations", gradient: "from-[#EEF3FC] to-[#1A4DA8]/10",value: "Pan India" },
                  ].map((stat) => (
                    <div key={stat.label} className={`flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br ${stat.gradient} p-6 shadow-sm hover:shadow-md transition-all`}>
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-[#1A4DA8] shadow-sm">
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-[#0D2B6B]">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Search Bar */}
            <section id="gallery-grid" className="border-y border-slate-200 bg-white/90 backdrop-blur-xl py-5 sticky top-20 z-20 shadow-sm">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative mx-auto w-full max-w-lg">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1A4DA8]/50" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title or description..."
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FB] py-3.5 pl-12 pr-12 text-sm font-medium text-[#111827] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#B8952A] focus:bg-white focus:ring-4 focus:ring-[#F5E8C0]/40 focus:shadow-md"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 flex size-7 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 transition-colors">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Masonry Grid */}
            <section className="py-14 sm:py-18">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {filteredImages.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
                    <Search className="mx-auto h-14 w-14 text-slate-300" />
                    <h3 className="mt-5 text-xl font-bold text-slate-600">No images found</h3>
                    <p className="mt-2 text-sm text-slate-500">Try different keywords</p>
                    <button onClick={() => setSearch("")} className="mt-5 text-sm font-bold text-[#1A4DA8] hover:text-[#2E6FD9] transition-colors">Clear search</button>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.03 }}
                      className="columns-1 gap-6 sm:columns-1 lg:columns-2 xl:columns-3"
                    >
                      {/* {filteredImages.map((image, index) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                          className="mb-6 break-inside-avoid group cursor-pointer"
                          onClick={() => openModal(image)}
                        > */}
                      {paginatedImages.map((image, index) => (
  <motion.div
    key={image.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1] }}
    className="mb-6 break-inside-avoid group cursor-pointer"
    onClick={() => openModal(image)}
  >
    <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] min-h-[280px]"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/50 via-[#0D2B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-5 py-2.5 text-sm font-bold text-[#1A4DA8] shadow-xl">
            <Eye size={16} /> View Image
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold text-[#0D2B6B] line-clamp-1 leading-snug group-hover:text-[#1A4DA8] transition-colors duration-300">
          {image.title}
        </h3>
        {image.description && (
          <p className="mt-2.5 text-sm text-slate-500 leading-relaxed line-clamp-2">
            {image.description}
          </p>
        )}
      </div>
    </div>
  </motion.div>
))}
                    </motion.div>
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    {/* {filteredImages.length > 0 && (
                      <div className="mt-16 text-center">
                        <p className="text-xs font-medium text-slate-400">
                          Showing {filteredImages.length} of {images.length} images
                        </p>
                      </div>
                    )} */}
                      {totalPages > 1 && (
                      <p className="text-center text-xs text-slate-400 mt-5">
                        Page {currentPage} of {totalPages} • {filteredImages.length} images
                      </p>
                    )}
                  </>
                )}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <ImageModal image={selectedImage} onClose={closeModal} />

      <CTASection />
      <PartnersSection />
      <Footer />
    </main>
  );
}