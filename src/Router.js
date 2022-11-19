import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lodgings from './pages/Lodgings';
import Error404 from './pages/Error404';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodgings/:id" element={<Lodgings />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
};

export default Router;



