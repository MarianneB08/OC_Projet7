import React from 'react';
import BannerStyles from '../styles/components/Banner.module.scss';


const Banner = ({ src, slogan, alt }) => {
    return (
            <div className={`${BannerStyles.bannerContainer} ${BannerStyles.bannerAboutContainer}`}>
                <img className={`${BannerStyles.bannerImgMobile} ${BannerStyles.bannerAboutImgMobile}` }
                    src={src[0]}
                    alt={alt}
                />
                <img className={BannerStyles.bannerImgDesktop}
                    src={src[1]}
                    alt={alt}
                />
                <h1 className={BannerStyles.slogan}>{slogan}</h1>
            </div>
    );
};

export default Banner;