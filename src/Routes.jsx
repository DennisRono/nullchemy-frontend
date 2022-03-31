import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import NotFound from './Routes/NotFound'

const Pathways = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
  )
}

export default Pathways