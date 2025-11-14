import { useState } from 'react'
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './nesting-routing/pages/home';
import About from './nesting-routing/pages/About';
import Services from './nesting-routing/pages/Services';
import Contact from './nesting-routing/pages/Contact';
import Navbar from './nesting-routing/Navbar';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {


  return (
    <>

{/* react-router-dom  */}
 {/* <Home/> */}


{/* ----nesting-routing------  */}
<BrowserRouter>
 <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      </BrowserRouter>




   </>
  )
}

export default App
