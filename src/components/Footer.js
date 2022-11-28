import React from 'react';
import LogoFooter from '../components/Images/logo_footer.svg';
import FooterStyles from '../styles/components/Footer.module.scss';

// Mise en place du composant "Footer"
const Footer = () => {
    return (
        <footer className={FooterStyles.footerContainer}>
            <img className={FooterStyles.footerLogo} src={LogoFooter} alt="Logo Kasa" />
            <p className={FooterStyles.footerText}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;