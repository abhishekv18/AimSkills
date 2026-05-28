
import { use, useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Eye,
  GalleryThumbnails,
  HandHeart,
  ImagePlus,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Newspaper,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  Trash2,
  UploadCloud,
  UserCheck,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const ServerUrl = "http://localhost:8000";

const monthLabels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "csr", label: "CSR Requests", icon: Building2 },
  { id: "volunteers", label: "Volunteers", icon: HandHeart },
  { id: "trainingPartners", label: "Training Partners", icon: UserPlus },
  { id: "hireCandidates", label: "Hire Candidates", icon: BriefcaseBusiness },
  { id: "contacts", label: "Contact Messages", icon: Mail },
  { id: "blogs", label: "Blogs", icon: Newspaper },
  { id: "gallery", label: "Gallery", icon: GalleryThumbnails },
  { id: "admins", label: "Admins", icon: Shield },
];

const endpoints = {
  currentUser: "/api/user/current-user",
  logout: "/api/user/logout",
  admins: "/api/user/get-user",
  addAdmin: "/api/user/admin-register",
  deleteAdmin: "/api/user/delete-user",
  csr: "/api/csr/get-csrs",
  deleteCsr: "/api/csr/delete-csr",
  trainingPartners: "/api/partner/get-partners",
  deleteTrainingPartner: "/api/partner/delete-partner",
  hireCandidates: "/api/hire/get-hire",
  deleteHireCandidate: "/api/hire/delete-hire",
  volunteers: "/api/volunteer/get-volunteers",
  deleteVolunteer: "/api/volunteer/delete-volunteer",
  contacts: "/api/contact/get-contacts",
  deleteContact: "/api/contact/delete-contact",
   blogs: "/api/blog/get",              // GET all blogs
  addBlog: "/api/blog/add",            // POST new blog
  uploadImage: "/api/blog/upload-image", // POST upload image
  deleteBlog: "/api/blog/delete",
  images:"/api/gallery/get",
  gallery: "/api/gallery/add",
  deleteGallery: "/api/gallery/delete",
};

const tableConfig = {
  csr: {
    title: "CSR Partnership Requests",
    description: "Manage corporate and institutional CSR partnership inquiries.",
    columns: ["Name", "Organization", "Email", "Phone", "Message"],
    fieldKeys: ["name", "organization", "email", "phone", "message"],
    endpoint: endpoints.csr,
    deleteEndpoint: endpoints.deleteCsr,
  },
  volunteers: {
    title: "Volunteer Applications",
    description: "Review and manage volunteer applications.",
    columns: ["Full Name", "Email", "Mobile", "Skills", "Motivation"],
    fieldKeys: ["name", "email", "phone", "skills", "message"],
    endpoint: endpoints.volunteers,
    deleteEndpoint: endpoints.deleteVolunteer,
  },
  trainingPartners: {
    title: "Training Partner Requests",
    description: "Manage training center and institutional partnership requests.",
    columns: ["Organization", "Contact Person", "Email", "Mobile", "Location", "Details"],
    fieldKeys: ["organization", "name", "email", "phone", "city", "message"],
    endpoint: endpoints.trainingPartners,
    deleteEndpoint: endpoints.deleteTrainingPartner,
  },
  hireCandidates: {
    title: "Hire Trained Candidate Requests",
    description: "Track hiring inquiries from companies and HR teams.",
    columns: ["Company", "HR Person", "Email", "Mobile", "Job Role", "Requirements"],
    fieldKeys: ["companyName", "name", "email", "phone", "role", "message"],
    endpoint: endpoints.hireCandidates,
    deleteEndpoint: endpoints.deleteHireCandidate,
  },
  contacts: {
    title: "Contact Messages",
    description: "Manage general inquiries and contact form submissions.",
    columns: ["Full Name", "Email", "Mobile", "Message"],
    fieldKeys: ["name", "email", "phone", "message"],
    endpoint: endpoints.contacts,
    deleteEndpoint: endpoints.deleteContact,
  },
};

// Color Palette Constants
const COLORS = {
  primary: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#059669',
    600: '#047857',
    700: '#065F46',
    800: '#064E3B',
    900: '#022C22',
  },
  accent: {
    gold: '#C9A84C',
    goldLight: '#F5E6C8',
    goldDark: '#8B7332',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};
function groupByMonth(data = [], labelKey) {
  const grouped = Array(12).fill(0);

  data.forEach((item) => {
    if (!item?.createdAt) return;

    const monthIndex = new Date(
      item.createdAt
    ).getMonth();

    if (monthIndex >= 0 && monthIndex < 12) {
      grouped[monthIndex]++;
    }
  });

  return monthLabels.map((month, index) => ({
    month,
    [labelKey]: grouped[index],
  }));
}
function countByStatus(data) {
  const counts = { New: 0, Pending: 0, Resolved: 0, Rejected: 0 };
  data.forEach((item) => {
    const status = item.status || "New";
    if (counts[status] !== undefined) counts[status] += 1;
    else counts.New += 1;
  });
  return [
    { name: "New", value: counts.New, color: COLORS.primary[600] },
    { name: "Pending", value: counts.Pending, color: COLORS.accent.gold },
    { name: "Resolved", value: counts.Resolved, color: COLORS.success },
    { name: "Rejected", value: counts.Rejected, color: COLORS.error },
  ];
}

function getResponseArray(result, keys = []) {
  for (const key of keys) {
    if (Array.isArray(result.data?.[key])) return result.data[key];
  }
  if (Array.isArray(result.data?.data)) return result.data.data;
  if (Array.isArray(result.data)) return result.data;
  return [];
}

export default function AdminPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const [authLoading, setAuthLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allAdmins, setAllAdmins] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [allCsrRequests, setAllCsrRequests] = useState([]);
  const [allTrainingPartners, setAllTrainingPartners] = useState([]);
  const [allHireCandidates, setAllHireCandidates] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [allGallery, setAllGallery] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [deleteState, setDeleteState] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminForm, setAdminForm] = useState({ email: "", password: "" });

 // Add these states with your other useState declarations
const [blogImageFile, setBlogImageFile] = useState(null);
const [blogImagePreview, setBlogImagePreview] = useState("");
const [uploadedBlogImageUrl, setUploadedBlogImageUrl] = useState(null);
const [isUploadingImage, setIsUploadingImage] = useState(false);


  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",imageUrl: null,
  });
 const [galleryForm, setGalleryForm] = useState({
      title: "",
      description: "",
      imageUrl: null,
    });
    const [galleryImageFile, setGalleryImageFile] = useState(null);
    const [galleryImagePreview, setGalleryImagePreview] = useState("");
    const [uploadedGalleryImageUrl, setUploadedGalleryImageUrl] = useState(null);
    const [isUploadingGalleryImage, setIsUploadingGalleryImage] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const result = await axios.get(ServerUrl + endpoints.currentUser, {
        withCredentials: true,
      });
      setAdminUser(result.data.user);
    } catch (error) {
      if (error.response?.status !== 401) console.log(error);
      setAdminUser(null);
      navigate("/");
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchAllAdmins = async () => {
    try {
      const result = await axios.get(ServerUrl + endpoints.admins, {
        withCredentials: true,
      });
      setAllAdmins(getResponseArray(result, ["users"]));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchResource = async (endpoint, setter, keys = []) => {
    try {
      const result = await axios.get(ServerUrl + endpoint, {
        withCredentials: true,
      });
      setter(getResponseArray(result, keys));
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch data");
    }
  };

const fetchAllData = async () => {
    fetchAllAdmins();
    fetchResource(endpoints.contacts, setAllContacts, ["contacts"]);
    fetchResource(endpoints.volunteers, setAllVolunteers, ["volunteers"]);
    fetchResource(endpoints.csr, setAllCsrRequests, ["csrs"]);
    fetchResource(endpoints.trainingPartners, setAllTrainingPartners, ["partners"]);
    fetchResource(endpoints.hireCandidates, setAllHireCandidates, ["hires"]);
    fetchResource(endpoints.blogs, setAllBlogs, ["blogs"]);  // GET /api/blog/get
    fetchResource(endpoints.images, setAllGallery, ["images"]);
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (adminUser) fetchAllData();
  }, [adminUser]);

  const handleLogout = async () => {
    try {
      await axios.post(ServerUrl + endpoints.logout, {}, { withCredentials: true });
      toast.success("Logout successfully", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#0D2B6B",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px",
          fontWeight: "600",
        },
        iconTheme: {
          primary: "#F5E8C0",
          secondary: "#0D2B6B",
        },
      });
      dispatch(setUserData(null));
      setAdminUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  const removeResource = async (endpoint, id, onSuccess) => {
    try {
      await axios.delete(ServerUrl + endpoint + "/" + id, {
        withCredentials: true,
      });
      onSuccess();
      toast.success("Deleted successfully");
      setDeleteState(null);
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  const addAdmin = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(ServerUrl + endpoints.addAdmin, adminForm, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (result.data.success) {
        setAllAdmins((current) => [...current, result.data.newUser]);
        setAdminForm({ email: "", password: "" });
        setShowAdminModal(false);
        toast.success("New admin created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to add admin");
    }
  };

  // const submitBlog = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const payload = new FormData();
  //     Object.entries(blogForm).forEach(([key, value]) => {
  //       if (value) payload.append(key, value);
  //     });
  //     const result = await axios.post(ServerUrl + endpoints.blogs, payload, {
  //       withCredentials: true,
  //     });
  //     setAllBlogs((current) => [result.data.blog || result.data.data, ...current]);
  //     setBlogForm({
  //       title: "", slug: "", category: "", shortDescription: "",
  //       content: "", tags: "", thumbnail: null,
  //     });
  //     setBlogPreview("");
  //     toast.success("Blog uploaded successfully");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Blog upload failed");
  //   }
  // };

  // const uploadGallery = async () => {
  //   if (!galleryFiles.length) return;
  //   try {
  //     const payload = new FormData();
  //     galleryFiles.forEach((file) => payload.append("photos", file));
  //     payload.append("category", galleryCategory);
  //     const result = await axios.post(ServerUrl + endpoints.gallery, payload, {
  //       withCredentials: true,
  //     });
  //     const uploaded = getResponseArray(result, ["images", "gallery", "data"]);
  //     setAllGallery((current) => [...uploaded, ...current]);
  //     setGalleryFiles([]);
  //     toast.success("Gallery uploaded successfully");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Gallery upload failed");
  //   }
  // };

  const contactsData = groupByMonth(allContacts, "contacts");
  const volunteersData = countByStatus(allVolunteers);
  const csrData = groupByMonth(allCsrRequests, "csr");
  const blogData = groupByMonth(allBlogs, "blogs");

  const sectionData = {
    csr: allCsrRequests,
    volunteers: allVolunteers,
    trainingPartners: allTrainingPartners,
    hireCandidates: allHireCandidates,
    contacts: allContacts,
  };

  const sectionTitles = {
    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Welcome back. Here is what's happening with AimSkills.",
    },
    csr: {
      title: "CSR Partnership Requests",
      subtitle: "Manage corporate CSR partnership inquiries.",
    },
    volunteers: {
      title: "Volunteer Applications",
      subtitle: "Track and manage volunteer information.",
    },
    trainingPartners: {
      title: "Training Partner Requests",
      subtitle: "Review institutional and training partner inquiries.",
    },
    hireCandidates: {
      title: "Hire Candidate Requests",
      subtitle: "Manage company hiring requests for trained candidates.",
    },
    contacts: {
      title: "Contact Messages",
      subtitle: "Manage general contact inquiries.",
    },
    blogs: {
      title: "Blog Management",
      subtitle: "Upload and manage website blog content.",
    },
    gallery: {
      title: "Gallery Management",
      subtitle: "Upload and manage gallery images.",
    },
    admins: {
      title: "Admin Management",
      subtitle: "Manage admin users and secure access.",
    },
  };

  const Sidebar = () => (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-hidden bg-gradient-to-b from-[#064E3B] via-[#065F46] to-[#047857] text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute -left-16 top-24 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-24 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 lg:hidden"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 border-b border-white/10 p-6">
          <div className="flex items-center gap-3">
    <div className="flex size-12 items-center justify-center">
  <img
    src="/src/assets/WhatsApp Image 2026-05-01 at 8.07.03 PM.jpeg"
    alt="AimSkills Logo"
    className="h-10 w-10 object-contain"
  />
</div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Aim Skills</h1>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-4 mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">
                {adminUser?.name || "Admin User"}
              </p>
              <p className="truncate text-xs font-medium text-emerald-200/60">
                {adminUser?.email || "Secure access"}
              </p>
            </div>
          </div>
        </div>

        <nav className="relative z-10 mt-6 flex-1 space-y-1 overflow-y-auto px-3">
          <p className="px-4 pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200/40">
            Main Menu
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveSection(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white/15 backdrop-blur-sm text-white shadow-lg shadow-black/10"
                    : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={2} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="relative z-10 border-t border-white/10 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="group flex w-full items-center gap-3 rounded-xl border border-transparent px-4 py-2.5 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-red-400/20 hover:bg-red-500/10 hover:text-red-300"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 group-hover:bg-red-500/10">
              <LogOut size={17} className="transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="tracking-wide">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );

  const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
      const recentNotifications = [];
      
      allCsrRequests.slice(0, 3).forEach(item => {
        recentNotifications.push({
          id: item._id,
          type: 'CSR',
          message: `New CSR request from ${item.organization || item.name || 'Unknown'}`,
          time: item.createdAt,
          section: 'csr',
        });
      });
      
      allVolunteers.slice(0, 2).forEach(item => {
        recentNotifications.push({
          id: item._id,
          type: 'Volunteer',
          message: `New volunteer: ${item.name || 'Unknown'}`,
          time: item.createdAt,
          section: 'volunteers',
        });
      });
      
      allContacts.slice(0, 2).forEach(item => {
        recentNotifications.push({
          id: item._id,
          type: 'Contact',
          message: `New message from ${item.name || 'Unknown'}`,
          time: item.createdAt,
          section: 'contacts',
        });
      });
      
      recentNotifications.sort((a, b) => new Date(b.time) - new Date(a.time));
      setNotifications(recentNotifications.slice(0, 8));
    }, [allCsrRequests, allVolunteers, allContacts]);

    return (
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/90 px-4 py-3.5 shadow-sm backdrop-blur-xl lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-bold tracking-tight text-slate-900 lg:text-2xl">
              {sectionTitles[activeSection]?.title}
            </h2>
            <p className="mt-0.5 hidden text-sm font-medium text-slate-500 sm:block">
              {sectionTitles[activeSection]?.subtitle}
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50"
            >
              <Bell size={19} />
              {notifications.length > 0 && (
                <span className="absolute right-2 top-2 flex size-2.5 items-center justify-center rounded-full bg-amber-500 ring-2 ring-white"></span>
              )}
            </button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                      <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        {notifications.length} new
                      </span>
                    </div>

                    <div className="max-h-[340px] overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notif) => (
                          <button
                            key={notif.id}
                            onClick={() => {
                              setActiveSection(notif.section);
                              setShowNotifications(false);
                            }}
                            className="flex w-full items-start gap-3 border-b border-slate-50 px-5 py-3 text-left transition-colors hover:bg-slate-50"
                          >
                            <div className={`mt-1.5 size-2 rounded-full ${
                              notif.type === 'CSR' ? 'bg-emerald-600' :
                              notif.type === 'Volunteer' ? 'bg-blue-600' : 'bg-amber-600'
                            }`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-900 truncate">
                                {notif.message}
                              </p>
                              <p className="mt-1 text-xs text-slate-400">
                                {notif.type} • {new Date(notif.time).toLocaleDateString()}
                              </p>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-5 py-8 text-center">
                          <Bell size={28} className="mx-auto text-slate-300" />
                          <p className="mt-3 text-sm font-medium text-slate-500">No notifications yet</p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  />
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:flex">
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-700">
              AD
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {adminUser?.name || "Admin"}
              </p>
              <p className="text-xs font-medium text-slate-500">Administrator</p>
            </div>
            <ChevronDown size={15} className="text-slate-400" />
          </div>
        </div>
      </header>
    );
  };

  const StatsCard = ({ title, value, icon: Icon, accent = "green" }) => (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md lg:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
            accent === "gold"
              ? "bg-amber-50 text-amber-600"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          <Icon size={22} />
        </div>
      </div>
    </motion.div>
  );

  const ChartCard = ({ title, children, className = "" }) => (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6 ${className}`}
    >
      <h3 className="mb-5 text-lg font-bold text-slate-900">{title}</h3>
      {children}
    </section>
  );

  const DeleteModal = () => (
    <AnimatePresence>
      {deleteState && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteState(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50"
          >
            <h3 className="text-xl font-bold text-slate-900">
              Confirm Deletion
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Are you sure you want to delete this record? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteState(null)}
                className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() =>
                  removeResource(deleteState.endpoint, deleteState.id, deleteState.onSuccess)
                }
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const DetailsModal = () => (
    <AnimatePresence>
      {selectedRecord && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRecord(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            className="relative max-h-[84vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Submission Details
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">
                  Complete information submitted by user.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRecord(null)}
                className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(selectedRecord)
                  .filter(([key]) => key !== '__v' && key !== '_id')
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="mt-1.5 break-words text-sm font-medium text-slate-700">
                        {String(value || "—")}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const Table = ({ data, columns, fieldKeys, endpoint, deleteEndpoint, onSuccess }) => {
    const [query, setQuery] = useState("");

    const filtered = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );

    return (
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
            <Search size={17} className="text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search records..."
              className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b border-slate-100">
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    {column}
                  </th>
                ))}
                <th className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr
                  key={item._id || item.id}
                  className="border-b border-slate-50 transition-colors hover:bg-emerald-50/30"
                >
                  {fieldKeys.map((key) => (
                    <td
                      key={key}
                      className="max-w-[200px] truncate px-5 py-3.5 text-sm font-medium text-slate-700"
                    >
                      {item[key] || "—"}
                    </td>
                  ))}

                  <td className="px-5 py-3.5">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRecord(item)}
                        className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors hover:bg-emerald-100"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setDeleteState({
                            id: item._id || item.id,
                            endpoint: deleteEndpoint || endpoint,
                            onSuccess,
                          })
                        }
                        className="flex size-8 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {!filtered.length && (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-6 py-12 text-center text-sm font-medium text-slate-400"
                  >
                    No records available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-600 p-6 text-white shadow-lg shadow-emerald-900/10 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-amber-300">
              Admin Overview
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Aim Skills Management
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-100/80">
              Monitor form submissions, manage blogs, upload gallery photos,
              and keep operations organized.
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {[
              ["Upload Blog", "blogs"],
              ["Upload Gallery", "gallery"],
              ["View CSR", "csr"],
            ].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveSection(id)}
                className="rounded-xl bg-white/15 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/25 hover:-translate-y-0.5"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatsCard
          title="Total Requests"
          value={
            allContacts.length +
            allVolunteers.length +
            allCsrRequests.length +
            allTrainingPartners.length +
            allHireCandidates.length
          }
          icon={Users}
        />
        <StatsCard title="Volunteers" value={allVolunteers.length} icon={HandHeart} />
        <StatsCard title="CSR Requests" value={allCsrRequests.length} icon={Building2} />
        <StatsCard title="Blogs Published" value={allBlogs.length} icon={Newspaper} />
        <StatsCard title="Gallery Images" value={allGallery.length} icon={GalleryThumbnails} />
        <StatsCard title="Contact Messages" value={allContacts.length} icon={Mail} accent="gold" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Contact Messages Trend">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={contactsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
              <YAxis stroke="#94A3B8" fontSize={12} />
              <Tooltip />
              <Bar dataKey="contacts" fill={COLORS.primary[600]} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Volunteer Status">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={volunteersData}
                cx="50%"
                cy="50%"
                outerRadius={78}
                paddingAngle={4}
                dataKey="value"
              >
                {volunteersData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {volunteersData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-xs font-semibold text-slate-600">
                  {entry.name}: {entry.value}
                </span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <ChartCard title="Blog Growth Over Time">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={blogData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
            <YAxis stroke="#94A3B8" fontSize={12} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="blogs"
              stroke={COLORS.primary[600]}
              strokeWidth={2.5}
              dot={{ fill: COLORS.primary[600], strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );

  const renderFormSection = (type) => {
    const config = tableConfig[type];

    const setterMap = {
      csr: { setter: setAllCsrRequests, keys: ["csrs"] },
      volunteers: { setter: setAllVolunteers, keys: ["volunteers"] },
      trainingPartners: { setter: setAllTrainingPartners, keys: ["partners"] },
      hireCandidates: { setter: setAllHireCandidates, keys: ["hires"] },
      contacts: { setter: setAllContacts, keys: ["contacts"] },
    };

    const { setter, keys } = setterMap[type];

    const refreshData = () => {
      fetchResource(config.endpoint, setter, keys);
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {config.title} ({sectionData[type]?.length || 0})
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {config.description}
          </p>
        </div>

        <Table
          data={sectionData[type] || []}
          columns={config.columns}
          fieldKeys={config.fieldKeys}
          endpoint={config.endpoint}
          deleteEndpoint={config.deleteEndpoint}
          onSuccess={refreshData}
        />
      </div>
    );
  };

  const renderAdmins = () => (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Admin Management ({allAdmins.length})
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Manage administrative users and permissions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAdminModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md"
        >
          <Plus size={17} />
          Add New Admin
        </button>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Email
                </th>
                <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Role
                </th>
                <th className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {allAdmins.map((admin) => (
                <tr
                  key={admin._id || admin.id}
                  className="border-b border-slate-50 transition-colors hover:bg-emerald-50/30"
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-slate-700">
                    {admin.email}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {admin.role || "admin"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    {admin.role === "super-admin" ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-400">
                        Protected
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setDeleteState({
                            id: admin._id || admin.id,
                            endpoint: endpoints.deleteAdmin,
                            onSuccess: fetchAllAdmins,
                          })
                        }
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AnimatePresence>
        {showAdminModal && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdminModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.form
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              onSubmit={addAdmin}
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50"
            >
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
              >
                <X size={18} />
              </button>

              <h3 className="text-lg font-bold text-slate-900">
                Add New Admin
              </h3>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email</span>
                  <input
                    type="email"
                    required
                    value={adminForm.email}
                    onChange={(event) =>
                      setAdminForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="admin@aimskills.org"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    required
                    value={adminForm.password}
                    onChange={(event) =>
                      setAdminForm((current) => ({
                        ...current,
                        password: event.target.value,
                      }))
                    }
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter secure password"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md"
              >
                Add Admin
              </button>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  // const renderBlogs = () => (
  //   <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
  //     <form
  //       onSubmit={submitBlog}
  //       className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  //     >
  //       <h3 className="text-lg font-bold text-slate-900">Upload Blog</h3>

  //       <div className="mt-5 grid gap-4 sm:grid-cols-2">
  //         {[
  //           ["title", "Blog Title"],
  //           ["slug", "Slug"],
  //           ["category", "Category"],
  //           ["tags", "Tags"],
  //         ].map(([key, label]) => (
  //           <label key={key} className="block">
  //             <span className="text-sm font-semibold text-slate-700">{label}</span>
  //             <input
  //               value={blogForm[key]}
  //               onChange={(event) =>
  //                 setBlogForm((current) => ({
  //                   ...current,
  //                   [key]: event.target.value,
  //                 }))
  //               }
  //               className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
  //             />
  //           </label>
  //         ))}
  //       </div>

  //       <label className="mt-4 block">
  //         <span className="text-sm font-semibold text-slate-700">
  //           Thumbnail Upload
  //         </span>
  //         <div className="mt-1.5 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-4 text-center transition-colors hover:bg-emerald-50">
  //           <input
  //             type="file"
  //             accept="image/*"
  //             className="hidden"
  //             id="blog-thumbnail"
  //             onChange={(event) => {
  //               const file = event.target.files?.[0];
  //               setBlogForm((current) => ({ ...current, thumbnail: file }));
  //               setBlogPreview(file ? URL.createObjectURL(file) : "");
  //             }}
  //           />
  //           <label htmlFor="blog-thumbnail" className="cursor-pointer">
  //             {blogPreview ? (
  //               <img
  //                 src={blogPreview}
  //                 alt="Blog thumbnail preview"
  //                 className="mx-auto h-32 rounded-xl object-cover"
  //               />
  //             ) : (
  //               <div className="flex flex-col items-center">
  //                 <UploadCloud size={28} className="text-emerald-600" />
  //                 <span className="mt-2 text-sm font-semibold text-emerald-700">
  //                   Upload thumbnail
  //                 </span>
  //               </div>
  //             )}
  //           </label>
  //         </div>
  //       </label>

  //       <label className="mt-4 block">
  //         <span className="text-sm font-semibold text-slate-700">
  //           Short Description
  //         </span>
  //         <textarea
  //           value={blogForm.shortDescription}
  //           onChange={(event) =>
  //             setBlogForm((current) => ({
  //               ...current,
  //               shortDescription: event.target.value,
  //             }))
  //           }
  //           rows={3}
  //           className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium leading-6 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
  //         />
  //       </label>

  //       <label className="mt-4 block">
  //         <span className="text-sm font-semibold text-slate-700">Full Content</span>
  //         <textarea
  //           value={blogForm.content}
  //           onChange={(event) =>
  //             setBlogForm((current) => ({
  //               ...current,
  //               content: event.target.value,
  //             }))
  //           }
  //           rows={8}
  //           className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium leading-6 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
  //         />
  //       </label>

  //       <button
  //         type="submit"
  //         className="mt-5 rounded-xl bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md"
  //       >
  //         Publish Blog
  //       </button>
  //     </form>

  //     <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  //       <h3 className="text-lg font-bold text-slate-900">Blog Preview</h3>

  //       <div className="mt-5 grid gap-4">
  //         {allBlogs.map((blog) => (
  //           <article
  //             key={blog._id || blog.id}
  //             className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[110px_1fr_auto]"
  //           >
  //             <img
  //               src={blog.thumbnail || "/assets/placeholder-blog.jpg"}
  //               alt={blog.title}
  //               className="h-24 w-full rounded-xl object-cover sm:w-28"
  //             />
  //             <div>
  //               <h4 className="text-base font-bold text-slate-900">
  //                 {blog.title}
  //               </h4>
  //               <p className="mt-0.5 text-xs font-semibold text-emerald-600">
  //                 {blog.category || "Article"}
  //               </p>
  //               <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-slate-500">
  //                 {blog.shortDescription}
  //               </p>
  //             </div>
  //             <button
  //               type="button"
  //               onClick={() =>
  //                 setDeleteState({
  //                   id: blog._id || blog.id,
  //                   endpoint: endpoints.blogs,
  //                   onSuccess: () =>
  //                     setAllBlogs((current) =>
  //                       current.filter((item) => (item._id || item.id) !== (blog._id || blog.id))
  //                     ),
  //                 })
  //               }
  //               className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
  //             >
  //               <Trash2 size={16} />
  //             </button>
  //           </article>
  //         ))}
  //       </div>
  //     </section>
  //   </div>
  // );
const renderBlogs = () => (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      {/* <form
        onSubmit={async (e) => {
          e.preventDefault();
          
          // Blog data with already uploaded Cloudinary URL
          const blogData = {
            title: blogForm.title,
          
            imageUrl: uploadedBlogImageUrl || blogForm.imageUrl,
              content: blogForm.content,
          };
          console.log("Submitting blog with data:", blogData);
          try {
           const result = await axios.post(ServerUrl + endpoints.addBlog, blogData, {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
            setAllBlogs((current) => [result.data.blog || result.data.data, ...current]);
            setBlogForm({ title: "", content: "", imageUrl: null });
            setBlogImageFile(null);
            setBlogImagePreview("");
            setUploadedBlogImageUrl(null);
            toast.success("Blog published successfully");
          } catch (error) {
            console.log(error);
            toast.error("Blog upload failed");
          }
        }}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      > */}
      <form
  onSubmit={async (e) => {
    e.preventDefault();
    
    const blogData = {
      title: blogForm.title,
      imageUrl: uploadedBlogImageUrl || blogForm.imageUrl,
      content: blogForm.content,
    };
    
    try {
      await axios.post(ServerUrl + endpoints.addBlog, blogData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      
      // Re-fetch blogs from API to get fresh data
      const refreshed = await axios.get(ServerUrl + endpoints.blogs, {
        withCredentials: true,
      });
      const blogList = refreshed.data?.blogs || refreshed.data?.data || [];
      setAllBlogs(Array.isArray(blogList) ? blogList : []);
      
      setBlogForm({ title: "", content: "", imageUrl: null });
      setBlogImageFile(null);
      setBlogImagePreview("");
      setUploadedBlogImageUrl(null);
      toast.success("Blog published successfully");
    } catch (error) {
      console.log(error);
      toast.error("Blog upload failed");
    }
  }}
  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
>
        <h3 className="text-lg font-bold text-slate-900">Upload Blog</h3>

        {/* Title */}
        <div className="mt-5">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Blog Title *</span>
            <input
              type="text"
              required
              value={blogForm.title}
              onChange={(event) =>
                setBlogForm((current) => ({
                  ...current,
                  title: event.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Enter blog title..."
            />
          </label>
        </div>

        {/* Image Upload - Uploads IMMEDIATELY on selection */}
        <div className="mt-4">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">
              Featured Image {isUploadingImage && <span className="text-amber-500">(Uploading...)</span>}
            </span>
            <div className="mt-1.5 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-4 text-center transition-colors hover:bg-emerald-50">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="blog-thumbnail"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    // Show preview immediately
                    setBlogImageFile(file);
                    setBlogImagePreview(URL.createObjectURL(file));
                    
                    // Upload to Cloudinary IMMEDIATELY
                    setIsUploadingImage(true);
                    try {
                      const data = new FormData();
                      data.append('my_file', file);
                      
                  const uploadResponse = await axios.post(
  `${ServerUrl}${endpoints.uploadImage}`,
  data,
  {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  }
);
                      
                      if (uploadResponse.data.success) {
                        const cloudUrl = uploadResponse.data.result.url;
                        setUploadedBlogImageUrl(cloudUrl);
                        setBlogForm((current) => ({ ...current, imageUrl: cloudUrl }));
                        toast.success("Image uploaded successfully");
                      } else {
                        toast.error("Image upload failed");
                        // Clear the failed image
                        setBlogImageFile(null);
                        setBlogImagePreview("");
                      }
                    } catch (error) {
                      console.error("Image upload failed:", error);
                      toast.error("Failed to upload image");
                      // Clear the failed image
                      setBlogImageFile(null);
                      setBlogImagePreview("");
                    } finally {
                      setIsUploadingImage(false);
                    }
                  }
                }}
              />
              <label htmlFor="blog-thumbnail" className="cursor-pointer">
                {isUploadingImage ? (
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
                    <span className="mt-3 text-sm font-semibold text-emerald-700">
                      Uploading to cloud...
                    </span>
                  </div>
                ) : blogImagePreview ? (
                  <div className="relative">
                    <img
                      src={blogImagePreview}
                      alt="Blog thumbnail preview"
                      className="mx-auto h-32 rounded-xl object-cover"
                    />
                    {uploadedBlogImageUrl && (
                      <div className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full p-1">
                        <ShieldCheck size={16} />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <UploadCloud size={28} className="text-emerald-600" />
                    <span className="mt-2 text-sm font-semibold text-emerald-700">
                      Click to upload image
                    </span>
                    <span className="mt-1 text-xs text-slate-400">
                      Image uploads automatically on selection
                    </span>
                  </div>
                )}
              </label>
            </div>
          </label>
          {uploadedBlogImageUrl && (
            <p className="mt-1 text-xs text-emerald-600 flex items-center gap-1">
              <ShieldCheck size={12} /> Image uploaded to cloud ✓ — Ready to publish
            </p>
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Blog Content *</span>
            <textarea
              value={blogForm.content}
              required
              onChange={(event) =>
                setBlogForm((current) => ({
                  ...current,
                  content: event.target.value,
                }))
              }
              rows={10}
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium leading-6 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Write your blog content here..."
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 rounded-xl bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md flex items-center gap-2"
        >
          Publish Blog
        </button>
      </form>

      {/* Blog Preview Section */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">Blog Preview ({allBlogs.length})</h3>

        <div className="mt-5 grid gap-4">
          {allBlogs.length === 0 && (
            <div className="py-12 text-center">
              <Newspaper size={32} className="mx-auto text-slate-300" />
              <p className="mt-3 text-sm font-medium text-slate-500">No blogs published yet</p>
            </div>
          )}
          
      {allBlogs
  ?.filter(Boolean)
  .map((blog) => (
    <article
      key={blog._id || blog.id}
      className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[110px_1fr_auto]"
    >
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="h-24 w-full rounded-xl object-cover sm:w-28"
      />

      <div>
        <h4 className="text-base font-bold text-slate-900 line-clamp-2">
          {blog.title}
        </h4>

        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-slate-500">
          {blog.content?.substring(0,100)}...
        </p>
      </div>
      <button
      onClick={() =>
  setDeleteState({
    id: blog._id || blog.id,
    endpoint: endpoints.deleteBlog,  // /api/blog/delete
    onSuccess: () =>
      setAllBlogs((current) =>
        current.filter((item) => (item._id || item.id) !== (blog._id || blog.id))
      ),
  })
}
       className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100" 
      >
 <Trash2 size={16} />
      </button>
    </article>
))}
        </div>
      </section>
    </div>
  );
 
const renderGallery = () => {
   
    return (
      <div className="space-y-6">
        {/* Upload Form */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* <form
            onSubmit={async (e) => {
              e.preventDefault();
              
              const galleryData = {
                title: galleryForm.title,
                description: galleryForm.description,
                imageUrl: uploadedGalleryImageUrl || '',
              };
              
              try {
                const result = await axios.post(ServerUrl + endpoints.gallery, galleryData, {
                  headers: { "Content-Type": "application/json" },
                  withCredentials: true,
                });
                
                const uploaded = getResponseArray(result, ["images", "gallery", "data"]);
                setAllGallery((current) => [...uploaded, ...current]);
                setGalleryForm({ title: "", description: "" });
                setGalleryImageFile(null);
                setGalleryImagePreview("");
                setUploadedGalleryImageUrl(null);
                toast.success("Gallery image added successfully");
              } catch (error) {
                console.log(error);
                toast.error("Gallery upload failed");
              }
            }}
            className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start"
          > */}
          <form
  onSubmit={async (e) => {
    e.preventDefault();
    
    const galleryData = {
      title: galleryForm.title,
      description: galleryForm.description,
      imageUrl: uploadedGalleryImageUrl || '',
    };
    
    try {
      await axios.post(ServerUrl + endpoints.gallery, galleryData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      
      // Re-fetch gallery from API to get fresh data
      const refreshed = await axios.get(ServerUrl + endpoints.images, {
        withCredentials: true,
      });
      const galleryList = refreshed.data?.images || refreshed.data?.gallery || refreshed.data?.data || [];
      setAllGallery(Array.isArray(galleryList) ? galleryList : []);
      
      setGalleryForm({ title: "", description: "" });
      setGalleryImageFile(null);
      setGalleryImagePreview("");
      setUploadedGalleryImageUrl(null);
      toast.success("Gallery image added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Gallery upload failed");
    }
  }}
  className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start"
>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Add Gallery Image</h3>
              
              {/* Title */}
              <div>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Image Title *</span>
                  <input
                    type="text"
                    required
                    value={galleryForm.title}
                    onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter image title..."
                  />
                </label>
              </div>

              {/* Image Upload - Immediate Cloudinary Upload */}
              <div>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Image {isUploadingGalleryImage && <span className="text-amber-500">(Uploading...)</span>}
                  </span>
                  <div className="mt-1.5 flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-4 text-center transition-colors hover:bg-emerald-50">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="gallery-image"
                      onChange={async (event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setGalleryImageFile(file);
                          setGalleryImagePreview(URL.createObjectURL(file));
                          
                          setIsUploadingGalleryImage(true);
                          try {
                            const data = new FormData();
                            data.append('my_file', file);
                            
                            const uploadResponse = await axios.post(
                              `${ServerUrl}${endpoints.uploadImage}`,
                              data,
                              {
                                headers: { "Content-Type": "multipart/form-data" },
                                withCredentials: true,
                              }
                            );
                            
                            if (uploadResponse.data.success) {
                              const cloudUrl = uploadResponse.data.result.url;
                              setUploadedGalleryImageUrl(cloudUrl);
                              toast.success("Image uploaded successfully");
                            } else {
                              toast.error("Image upload failed");
                              setGalleryImageFile(null);
                              setGalleryImagePreview("");
                            }
                          } catch (error) {
                            console.error("Image upload failed:", error);
                            toast.error("Failed to upload image");
                            setGalleryImageFile(null);
                            setGalleryImagePreview("");
                          } finally {
                            setIsUploadingGalleryImage(false);
                          }
                        }
                      }}
                    />
                    <label htmlFor="gallery-image" className="cursor-pointer">
                      {isUploadingGalleryImage ? (
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
                          <span className="mt-3 text-sm font-semibold text-emerald-700">
                            Uploading to cloud...
                          </span>
                        </div>
                      ) : galleryImagePreview ? (
                        <div className="relative">
                          <img
                            src={galleryImagePreview}
                            alt="Preview"
                            className="mx-auto h-28 rounded-xl object-cover"
                          />
                          {uploadedGalleryImageUrl && (
                            <div className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full p-1">
                              <ShieldCheck size={14} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <ImagePlus size={28} className="text-emerald-600" />
                          <span className="mt-2 text-sm font-semibold text-emerald-700">
                            Click to upload image
                          </span>
                          <span className="mt-1 text-xs text-slate-400">
                            Uploads automatically on selection
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                </label>
                {uploadedGalleryImageUrl && (
                  <p className="mt-1 text-xs text-emerald-600 flex items-center gap-1">
                    <ShieldCheck size={12} /> Image uploaded ✓ — Ready to add
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Short Description</span>
                  <textarea
                    value={galleryForm.description}
                    onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium leading-6 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Brief description of the image..."
                  />
                </label>
              </div>
            </div>

            <div className="grid gap-3">
      

              <button
                type="submit"
                className="rounded-xl bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md"
              >
                Add to Gallery
              </button>
            </div>
          </form>
        </section>

        {/* Gallery Grid */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Gallery Images ({allGallery.length})</h3>

          <div className="mt-5 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {allGallery.length === 0 && (
              <div className="py-12 text-center col-span-full">
                <GalleryThumbnails size={32} className="mx-auto text-slate-300" />
                <p className="mt-3 text-sm font-medium text-slate-500">No images in gallery</p>
              </div>
            )}
          {allGallery.length === 0 && (
  <div className="py-12 text-center col-span-full">
    <GalleryThumbnails size={32} className="mx-auto text-slate-300" />
    <p className="mt-3 text-sm font-medium text-slate-500">No images in gallery</p>
  </div>
)}
{allGallery.map((image) => (
  <figure
    key={image._id || image.id}
    className="group relative mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md break-inside-avoid"
  >
    {/* Image */}
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image.imageUrl || image.url}
        alt={image.title || image.caption || "Gallery image"}
        onClick={() => setPreviewImage(image)}
        className="w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Category Badge - Always visible */}
     
    </div>

    {/* Info Section - Always visible below image */}
    <div className="mt-2 px-1 pb-1">
      {image.title && (
        <h4 className="text-sm font-semibold text-slate-800 truncate">
          {image.title}
        </h4>
      )}
      {image.description && (
        <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
          {image.description}
        </p>
      )}
    </div>

    {/* Hover Overlay with Actions */}
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-300 group-hover:bg-slate-900/40 rounded-xl">
      {/* View Button */}
 

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDeleteState({
            id: image._id || image.id,
            endpoint: endpoints.deleteGallery,
            onSuccess: () =>
              setAllGallery((current) =>
                current.filter(
                  (item) => (item._id || item.id) !== (image._id || image.id)
                )
              ),
          });
        }}
        className="flex size-9 items-center justify-center rounded-lg bg-white/90 text-red-500 shadow-lg opacity-0 transition-all duration-300 hover:bg-red-50 hover:text-red-600 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        title="Delete image"
      >
        <Trash2 size={16} />
      </button>
    </div>
  </figure>
))}
          </div>
        </section>

      
      </div>
    );
  };
  const renderContent = () => {
    if (activeSection === "dashboard") return renderDashboard();
    if (
      ["csr", "volunteers", "trainingPartners", "hireCandidates", "contacts"].includes(
        activeSection
      )
    ) {
      return renderFormSection(activeSection);
    }
    if (activeSection === "admins") return renderAdmins();
    if (activeSection === "blogs") return renderBlogs();
    if (activeSection === "gallery") return renderGallery();

    return <div>Section not found</div>;
  };

  if (authLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50">
        <div className="rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-lg shadow-emerald-900/5">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600" />
          <p className="mt-4 text-sm font-semibold text-emerald-700">
            Verifying secure admin access...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="lg:ml-72">
        <Header />

        <main className="p-4 lg:p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderContent()}
          </motion.div>
        </main>

        {/* Professional Footer */}
        {/* <footer className="border-t border-slate-200 bg-white px-6 py-4 lg:ml-0">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-700 text-xs font-bold text-white">
                A
              </div>
              <span className="text-sm font-semibold text-slate-700">AimSkills</span>
              <span className="text-xs text-slate-400">© {new Date().getFullYear()}</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span className="flex items-center gap-1.5">
                Made with <span className="text-red-400">♥</span> by <span className="font-semibold text-slate-500">Abhishek</span>
              </span>
            </div>
          </div>
        </footer> */}
      </div>

      <DetailsModal />
      <DeleteModal />
    </div>
  );
}