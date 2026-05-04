import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Router>

      <Routes> */}
        <Navbar/>
        {/* <Route path='/'  element={}/> */}
      {/* </Routes>
     </Router> */}
    </>
  )
}

export default App
