import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataFile from '../data.json';
import ImageSlider from '../components/ImageSlider';
import LodgingInfos from '../components/LodgingInfos';
import Collapse from '../components/Collapse';
import LodgingsStyles from '../styles/Lodgings.module.scss';

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
                        <ImageSlider pictures={lodging.pictures} />
                        <LodgingInfos
                            title={lodging.title}
                            location={lodging.location}
                            tags={lodging.tags}
                            host={lodging.host}
                            rating={lodging.rating} />
                        <div className={LodgingsStyles.collapsesContainer}>
                            <div className={LodgingsStyles.collapse}>
                                <Collapse
                                    title='Description'
                                    content={lodging.description} />
                            </div>
                            <div className={LodgingsStyles.collapse}>
                                <Collapse
                                    title='Équipements'
                                    content={lodging.equipments.map((equipment, index) => (
                                        <p key={index}>{equipment}</p>
                                    ))} />
                            </div>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Lodgings;