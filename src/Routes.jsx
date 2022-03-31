import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'

const Routes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
            <Route path="services" element={<Services />}>
            </Route>
        </Route>
        </Routes>
    </BrowserRouter>,
  )
}

export default Routes