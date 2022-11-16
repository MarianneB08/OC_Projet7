import React from 'react';
import LodgingInfosStyles from '../styles/components/LodgingInfos.module.scss';
import Rate from './Rate';


const LodgingInfos = ({ title, location, tags, host, rating }) => {

    return (
        <div className={LodgingInfosStyles.sections}>
            <div className={LodgingInfosStyles.lodgingInfos}>
                <h1 className={LodgingInfosStyles.lodgingTitle}>{title}</h1>
                <h2 className={LodgingInfosStyles.lodgingLocation}>{location}</h2>
                <div className={LodgingInfosStyles.tagsList}>
                    {tags.map((tag, index) => (
                        <div key={index} className={LodgingInfosStyles.tag}>{tag}</div>
                    ))}
                </div>
            </div>
            <div className={LodgingInfosStyles.hostAndRatingInfos}>
                <div className={LodgingInfosStyles.host}>
                    <p className={LodgingInfosStyles.hostName}>{host.name}</p>
                    <img className={LodgingInfosStyles.hostPicture} src={host.picture} alt={host.name} />
                </div>
                <div className={LodgingInfosStyles.rating}>
                    <Rate rating={parseInt(rating)} />
                </div>
            </div>
        </div>
    );
};

export default LodgingInfos;