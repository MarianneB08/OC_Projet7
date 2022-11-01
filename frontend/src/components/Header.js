import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

// ********** STYLES (MOBILE FIRST) ********** //

// Prévoir un menu burger pour min-width: 360px)

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    width: 89%;
    margin: 0 auto;
    margin-top: 20px;
    @media screen and (min-width: 360px) {
    
    @media screen and (min-width: 481px) and (max-width: 767px){
        height: 55px;
    }
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        height: 68px;
        max-width: 1240px;
    }
`
const Navigation = styled.ul`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    width: 42%;
    text-transform: uppercase;
    .homeLink:hover, .aboutLink:hover {
        text-decoration: underline 1px;
        text-underline-offset: 2px;
    }
    @media screen and (min-width: 481px) and (max-width: 767px){
        text-transform: none;
        font-size: 18px;
        max-width: 220px;
    }
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        text-transform: none;
        font-size: 24px;
        max-width: 309px;
    }
`

const LogoKasa = styled.img` 
    height: 100%;
`
// ********** FUNCTIONAL COMPONENT ********** //

const Header = () => {
    return (
        <HeaderContainer>
            <LogoKasa src={Logo} alt='kasa' />
            <Navigation>
                <NavLink to='/' className='homeLink'>
                    Accueil
                </NavLink>
                <NavLink to='/about' className='aboutLink'>
                    A propos
                </NavLink>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;