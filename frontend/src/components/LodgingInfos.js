import React from 'react';
import styles from '../styles/LodgingInfos.module.scss';
import Rate from './Rate';


const LodgingInfos = ({ title, location, tags, host, rating }) => {

    return (
        <div className={styles.sections}>
            <div className={styles.lodgingInfos}>
                <h1 className={styles.lodgingTitle}>{title}</h1>
                <h2 className={styles.lodgingLocation}>{location}</h2>
                <div className={styles.tagsList}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>{tag}</div>
                    ))}
                </div>
            </div>
            <div className={styles.hostAndRatingInfos}>
                <div className={styles.host}>
                    <p className={styles.hostName}>{host.name}</p>
                    <img className={styles.hostPicture} src={host.picture} alt={host.name} />
                </div>
                <div className={styles.rating}>
                    <Rate rating={parseInt(rating)} />
                </div>
            </div>
        </div>
    );
};

export default LodgingInfos;