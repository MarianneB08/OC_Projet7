import React from 'react';
import BannerStyles from '../styles/Banner.module.scss';


const Banner = ({ src, slogan, alt }) => {
    return (
        <section className={BannerStyles.bannerSection}>
            <div className={BannerStyles.bannerContainer}>
                <img className={BannerStyles.bannerImg}
                    src={src}
                    alt={alt}
                />
                <h1 className={BannerStyles.slogan}>{slogan}</h1>
            </div>
        </section>


    );
};

export default Banner;