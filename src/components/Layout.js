import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Mise en place du Layout, constitué des composants "Header" et "Footer" et appelé une fois pour toutes dans le composant général App.js
const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;