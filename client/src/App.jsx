import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramPage'
import ImpactPage from './pages/ImpactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes> 
     
        
       
         <Route path='/'  element={<HomePage/>}/>
           <Route path='/about'  element={<AboutPage/>}/>
            <Route path='/programs'  element={<ProgramsPage/>}/>
             <Route path='/impact'  element={<ImpactPage/>}/>
     </Routes>
   
    </>
  )
}

export default App
