import React from 'react';
import styles from '../styles/LodgingInfos.module.scss';

const LodgingInfos = ({ title, location, tags }) => {
    return (
        <div>
            <div className={styles.lodgingInfos}>
                <h1 className={styles.lodgingTitle}>{title}</h1>
                <h2 className={styles.lodgingLocation}>{location}</h2>
                <div className={styles.tagsList}>
                    {tags.map((tag) => (
                        <div className={styles.tag}>{tag}</div>
                    ))}</div>
            </div>
        </div>
    );
};

export default LodgingInfos;