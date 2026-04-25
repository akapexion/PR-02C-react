import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import APIDevelopment from './APIDevelopment'
import Navbar from './Navbar'

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/api" element={<APIDevelopment />}></Route>
            </Routes>
        </>
    )
}

export default Routing
