import React from 'react';
import LogoFooter from '../assets/logo_footer.svg';
import FooterStyles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <div className={FooterStyles.footerContainer}>
            <img className={FooterStyles.footerLogo} src={LogoFooter} alt="Logo Kasa" />
            <p className={FooterStyles.footerText}>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;