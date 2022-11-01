import React from 'react';
import styled from 'styled-components';

// ********** STYLES (MOBILE FIRST) ********** //

const BannerSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 32px;
    background-color: #000000;
    border-radius: 10px;
    opacity: 1;
    width: 89%;
    heigth: 111px;
    .BannerImg {
        width: 100%;
        heigth: 111px;
        margin: 0 auto;
        border-radius: 10px;
    }
    .KasaSlogan {
        position: absolute;
        top: 150px;
        margin-left: 16px;
        color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 24px;
        width: 217px;
    }
`


// ********** FUNCTIONAL COMPONENT ********** //

const Banner = ({ src, slogan, alt }) => {
    return (
        <div>
            <BannerSection>
                <img
                    src={src}
                    alt={alt}
                    className='BannerImg' />
                <h1 className='KasaSlogan'>{slogan}</h1>
            </BannerSection>

        </div>
    );
};

export default Banner;