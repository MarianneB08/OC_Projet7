import React from 'react';
import LodgingInfosStyles from '../styles/components/LodgingInfos.module.scss';
import Rate from './Rate';

// Le composant LodgingInfos s'appuie sur les props "title", "location", "tags", "host", "rating" passées via la page Lodgings
const LodgingInfos = ({ title, location, tags, host, rating }) => {

    return (
        <div className={LodgingInfosStyles.sections}>
            <section className={LodgingInfosStyles.lodgingInfos}>
                <h1 className={LodgingInfosStyles.lodgingTitle}>{title}</h1>
                <h2 className={LodgingInfosStyles.lodgingLocation}>{location}</h2>
                <div className={LodgingInfosStyles.tagsList}>
                    {tags.map((tag, index) => (
                        <div key={index} className={LodgingInfosStyles.tag}>{tag}</div>
                    ))}
                </div>
            </section>
            <section className={LodgingInfosStyles.hostAndRatingInfos}>
                <div className={LodgingInfosStyles.host}>
                    <p className={LodgingInfosStyles.hostName}>{host.name}</p>
                    <img className={LodgingInfosStyles.hostPicture} src={host.picture} alt={host.name} />
                </div>
                <div className={LodgingInfosStyles.rating}>
                    <Rate rating={parseInt(rating)} />
                </div>
            </section>
        </div>
    );
};

export default LodgingInfos;