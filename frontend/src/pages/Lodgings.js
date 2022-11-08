import React, { useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import LodgingInfos from '../components/LodgingInfos';
import DataFile from '../data.json';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/Lodgings.module.scss';
import HostInfos from '../components/HostInfos';

const Lodgings = () => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let lodging = DataFile.find((lodging) => params.id === lodging.id);
        if (!lodging) {
            navigate('*');
        }
    })

    return (
        <>
            {DataFile
                .filter((lodging) => lodging.id === params.id)
                .map((lodging) => (
                    <div key={lodging.title}>
                        <div>
                            <ImageSlider key={lodging.pictures} pictures={lodging.pictures} />
                        </div>
                        <div className={styles.infosContainer}>
                            <LodgingInfos title={lodging.title} location={lodging.location} tags={lodging.tags} />
                            <HostInfos host={lodging.host} rating={lodging.rating} />
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Lodgings;