import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import ComingSoon from './components/coming';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ComingSoon />} />
                <Route path="/destinations" element={<ComingSoon />} />
                
            </Routes>
        </Router>
    );
};

export default App;
