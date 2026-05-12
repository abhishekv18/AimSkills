import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
     </Routes>
   <WhatsAppButton/>
    </>
  )
}

export default App
