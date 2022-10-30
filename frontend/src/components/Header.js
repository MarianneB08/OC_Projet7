import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='kasa' className='logo' />
            </div>
            <ul className='navigation'>
                <NavLink to='/'>
                    <li className='home'>Accueil</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='about'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;