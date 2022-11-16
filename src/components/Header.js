import React from 'react';
import HeaderStyles from '../styles/components/Header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Images/logo_header.svg';

const Header = () => {
    return (
        <div className={HeaderStyles.headerContainer}>
            <img className={HeaderStyles.logo} src={Logo} alt='kasa' />
            <ul className={HeaderStyles.navigation}>
                <NavLink to='/' className={HeaderStyles.homeLink}>
                    Accueil
                </NavLink>
                <NavLink to='/about' className={HeaderStyles.aboutLink}>
                    A propos
                </NavLink>
            </ul>
        </div >
    );
};

export default Header;