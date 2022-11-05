import React, { useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import DataFile from '../data.json';
import { useParams, useNavigate } from 'react-router-dom';
import LodgingInfos from '../components/LodgingInfos';
import Collapse from '../components/Collapse';



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
                    <div>
                        <Slideshow key={lodging.pictures} pictures={lodging.pictures} />
                        <LodgingInfos key={lodging.title} infos={lodging} />
                        <div>
                            <Collapse />
                            <Collapse />
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Lodgings;