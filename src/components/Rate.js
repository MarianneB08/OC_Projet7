import React from 'react';
import PinkStar from '../components/Images/pink_star.svg';
import GreyStar from '../components/Images/grey_star.svg';
import RateStyles from '../styles/components/Rate.module.scss';

// Le composant Rate s'appuie sur la prop "rating" passée via la page Lodgings
const Rate = ({ rating }) => {
    const range = [1, 2, 3, 4, 5];

    return (
        // Méthode map appliquée à l'array range 
        range.map((rangeElem, index) => (
            // Si le nombre correspondant à rangeElem est plus petit ou égal au chiffre contenu dans la prop rating,
            // on affiche le nombre d'étoiles roses équivalent
            rangeElem <= rating ? (
                <img src={PinkStar} alt='étoile pleine' key={index} className={RateStyles.starIcon} />
            ) : (
                // La différence entre range et rating est affichée par des étoiles grises
                <img src={GreyStar} alt='étoile vide' key={index} className={RateStyles.starIcon} />
            )
        ))
    );
};

export default Rate;