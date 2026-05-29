import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramPage'
import ImpactPage from './pages/ImpactPage'
import CSRPage from './pages/CSRPage'
import DonatePage from './pages/DonationPage'
import VolunteerPage from './pages/VolunteerPage'
import BecomeTrainingPartnerPage from './pages/BecomeTrainingPartnerPage'
import HireTrainedCandidatesPage from './pages/HireTrainedCandidatesPage'
import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/AdminLogin'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './redux/userSlice'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
import Gallery from './pages/Gallery'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetails'
import DonationPopup from './components/DonationPopup'

//export const ServerUrl="http://localhost:8000";
export const ServerUrl="https://aimskills.onrender.com";
function App() {
const dispatch=useDispatch();
const [authLoading, setAuthLoading] = useState(true);
const {userData} = useSelector((state) => state.user);
    useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {
          withCredentials: true,
        });

        dispatch(setUserData(result.data.user));
      } catch (error) {
        if (error.response?.status !== 401) {
          console.log(error);
        }

        dispatch(setUserData(null));
      } finally {
        setAuthLoading(false);
      }
    };

    getUser();
  }, [dispatch]);
const navigate = useNavigate();

useEffect(() => {
   if(userData){
      navigate("/admin/dashboard");
   }
}, [userData]);
  return (
    <>
     <Toaster position="top-right" />
<ScrollToTop/>
      <Routes> 

         <Route path='/'  element={<HomePage/>}/>
           <Route path='/about'  element={<AboutPage/>}/>
            <Route path='/programs'  element={<ProgramsPage/>}/>
             <Route path='/impact'  element={<ImpactPage/>}/>
               <Route path='/csr'  element={<CSRPage/>}/>
                    <Route path='/donate'  element={<DonatePage/>}/>
                      <Route path='/volunteer'  element={<VolunteerPage/>}/>
                         <Route path='/partner'  element={<BecomeTrainingPartnerPage/>}/>
                           <Route path='/hire'  element={<HireTrainedCandidatesPage/>}/>
                           <Route path='/contact'  element={<ContactPage/>}/>
                            <Route path='/admin/login'  element={<AdminLoginPage/>}/>


                             
                               <Route path='/admin/dashboard'  
                               element={
                                <ProtectedRoute authLoading={authLoading}>
                                  <AdminDashboard/>
                                </ProtectedRoute>
                               }
                               />
                               <Route path='/gallery'  element={<Gallery/>}/>
                               <Route path='/blogs'  element={<Blogs/>}/>
                               <Route path='/blogs/:id'  element={<BlogDetail/>}/>
     </Routes>
   <WhatsAppButton/>
   <DonationPopup/>
    </>
  )
}

export default App
