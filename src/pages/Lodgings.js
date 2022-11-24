import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataFile from '../data.json';
import ImageSlider from '../components/ImageSlider';
import LodgingInfos from '../components/LodgingInfos';
import Collapse from '../components/Collapse';
import LodgingsStyles from '../styles/pages/Lodgings.module.scss';

// Mise en place de la page Lodgings qui affiche l'ensemble des informations relatives à un appartement donné
const Lodgings = () => {
    // Utilisation du hook useParams pour accéder au paramètre passé dans l'URL
    const params = useParams();
    // Utilisation du hook useNavigate pour rediriger l'utilisateur en cas d'erreur dans l'URL
    const navigate = useNavigate();

    // Le hook useEffect gère ici le renvoi vers la page d'erreur en cas d'incohérence entre l'id d'un lodging et l'id contenu dans
    // le paramètre de l'URL de la page courante
    useEffect(() => {
        let lodging = DataFile.find((lodging) => params.id === lodging.id);
        if (!lodging) {
            navigate('*');
        }
    })

    return (
        <>  
            {/* La méthode filter permet de s'assurer que l'id de l'appartement match avec l'id contenu en paramètre de l'URL */}
            {/* La méthode map permet ensuite de générer un nouveau tableau contenant les informations relatives à l'appartement donné */}
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
                                    // Utilisation de la méthode map afin de générer une balise <p> pour chaque équipement
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