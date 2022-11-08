import React from 'react';
import styles from '../styles/Header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_header.svg';

// Prévoir un menu burger pour min-width: 360px)

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src={Logo} alt='kasa' />
            <ul className={styles.navigation}>
                <NavLink to='/' className={styles.homeLink}>
                    Accueil
                </NavLink>
                <NavLink to='/about' className={styles.aboutLink}>
                    A propos
                </NavLink>
            </ul>
        </div >
    );
};

export default Header;