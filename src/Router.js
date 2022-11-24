import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lodgings from './pages/Lodgings';
import Error404 from './pages/Error404';

// Mise en place de la logique de routing de l'application
const Router = () => {
    return (
        <div>
            <Routes>
                {/* Route vers la page d'accueil */}
                <Route path="/" element={<Home />} />
                {/* Route vers chacune des pages appartement */}
                <Route path="/lodgings/:id" element={<Lodgings />} />
                {/* Route vers la page "À propos" */}
                <Route path="/about" element={<About />} />
                {/* Redirection vers la page d'erreur en cas d'URL incorrecte */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
};

export default Router;



