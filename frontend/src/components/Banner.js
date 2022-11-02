import React from 'react';
import styled from 'styled-components';

// ********** STYLES (MOBILE FIRST) ********** //

const BannerSection = styled.section`
    margin: 0 auto;
    width: 89%;
    margin-top: 16px;
    margin-bottom: 22px;
    @media screen and (min-width: 769px) {
        max-width: 1240px;
        margin-top: 63px;
        margin-bottom: 99px;
    }
`
const BannerContainer = styled.div`
    width: 100%;
    height: 111px;
    position: relative;
    background-color: #000000;
    border-radius: 10px;
    @media screen and (min-width: 769px) {
        height: 223px;
        border-radius: 25px;
    }
`
const BannerImg = styled.img`
    width: 100%;
    height: 111px;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.7;
    @media screen and (min-width: 769px) {
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }
`
const KasaSlogan = styled.h1`
    position: absolute;
    top: 31px;
    margin-left: 16px;
    width: 225px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    @media screen and (min-width: 769px) and (max-width: 1109px){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 515px;
        font-size: 35px;
        margin-left: 0;
    }
    @media screen and (min-width: 1110px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 705px;
        font-size: 48px;
        margin-left: 0;
    }
`


// ********** FUNCTIONAL COMPONENT ********** //

const Banner = ({ src, slogan, alt }) => {
    return (
        <BannerSection>
            <BannerContainer>
                <BannerImg
                    src={src}
                    alt={alt}
                />
                <KasaSlogan>{slogan}</KasaSlogan>
            </BannerContainer>
        </BannerSection>


    );
};

export default Banner;