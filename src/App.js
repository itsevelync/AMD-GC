import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/navbar';
import Problem from './Pages/problem';
import Solution from "./Pages/solution";
import About from "./Pages/about";
import Home from "./Pages/home";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        setTimeout(() => {
          AOS.init();
        }, 120);
        AOS.refresh();
      }, []); // a library for transitions

    return (
        <div>
            <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/problem" element={<Problem />} />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
}

export default App;
