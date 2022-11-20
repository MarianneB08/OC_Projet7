import React from 'react';
import { Link } from 'react-router-dom';
import CardStyles from '../styles/components/Card.module.scss';
import PropTypes from 'prop-types';
import DataFile from '../data.json';

// Affichage de chaque appartement avec la méthode map appliquée au fichier .json contenant la liste des appartements
// Création d'un lien sur chaque card renvoyant vers l'appartement associé à la card avec Link
const Card = () => {
    return (
        <div className={CardStyles.cardBackground}>
            {DataFile.map((lodging) => (
                <Link to={`/lodgings/${lodging.id}`} key={lodging.id} className={CardStyles.link}>
                    <div key={lodging.id} className={CardStyles.cardItem}>
                        <img
                            className={CardStyles.cardImg}
                            src={lodging.cover}
                            alt={lodging.title}
                        />
                        <h2 className={CardStyles.cardTitle}>{lodging.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};


// Utilisation de propTypes pour valider les informations reçues par le composant
Card.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card;