import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../assets/logo_footer.svg';

// ********** STYLES (MOBILE FIRST) ********** //

const FooterContainer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 209px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 66px;
    margin-top: 100px;
`

const FooterLogo = styled.img`
    width: 122px;
`

const FooterText = styled.p`
    color: #FFFFFF;
    font-size: 12px;
    height: 46px;
    margin-top: 28.5px;
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 16px;
    }
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        font-size: 24px;
    }
`

// ********** FUNCTIONAL COMPONENT ********** //

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo src={LogoFooter} alt="Logo Kasa" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    );
};

export default Footer;