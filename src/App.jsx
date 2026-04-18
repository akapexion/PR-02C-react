import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./features/Navbar";
import APIDevelopment from "./features/APIDevelopment";

const App = () => {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/api" element={<APIDevelopment/>}></Route>
            </Routes>
        </BrowserRouter>    
    </>
  );
};

export default App;
