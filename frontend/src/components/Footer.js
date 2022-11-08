import React from 'react';
import LogoFooter from '../assets/logo_footer.svg';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <img className={styles.footerLogo} src={LogoFooter} alt="Logo Kasa" />
            <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;