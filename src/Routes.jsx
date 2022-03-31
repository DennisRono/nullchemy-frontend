import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Contact from './Routes/Contact'

const Pathways = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route paath="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Pathways