import React from 'react';
import styles from '../styles/Banner.module.scss';


const Banner = ({ src, slogan, alt }) => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerContainer}>
                <img className={styles.bannerImg}
                    src={src}
                    alt={alt}
                />
                <h1 className={styles.slogan}>{slogan}</h1>
            </div>
        </section>


    );
};

export default Banner;