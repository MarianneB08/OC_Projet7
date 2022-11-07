import React, { useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import DataFile from '../data.json';
import { useParams, useNavigate } from 'react-router-dom';


const containerStyles = {
    maxWidth: '1240px',
    height: '415px',
    margin: '0 auto'
}

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
                        <div style={containerStyles}>
                            <ImageSlider key={lodging.pictures} pictures={lodging.pictures}></ImageSlider>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Lodgings;