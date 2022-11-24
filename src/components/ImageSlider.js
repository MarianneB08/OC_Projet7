import React, { useState } from 'react';
import ImageSliderStyles from '../styles/components/ImageSlider.module.scss';
import ArrowLeft from './Images/arrow_left.svg'
import ArrowRight from './Images/arrow_right.svg';

const ImageSlider = ({ pictures }) => {
    // Le hook useState permet de faire varier l'index de l'array pictures
    const [currentIndex, setCurrentIndex] = useState(0);

    // La fonction goToPrevious actualise l'index de l'array pictures au clic sur la flèche "précédente" du carousel
    const goToPrevious = () => {
        const isFirstPicture = currentIndex === 0;
        const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    // La fonction goToPrevious actualise l'index de l'array pictures au clic sur la flèche "suivante" du carousel
    const goToNext = () => {
        const isLastPicture = currentIndex === pictures.length - 1;
        const newIndex = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className={ImageSliderStyles.slider}>
            <img
                className={ImageSliderStyles.slideImg}
                // L'index de l'array, matérialisé par 'currentIndex', est rendu dynamique grâce au hook useState
                src={pictures[currentIndex]}
                alt={pictures.title}
                key={currentIndex} />
            <img
                // Affichage conditionnel de la flèche "précédent" en fonction du nombre d'images dans l'array pictures
                className={pictures.length === 1 ? ImageSliderStyles.hiddenArrow : ImageSliderStyles.leftArrow}
                src={ArrowLeft}
                alt="flèche gauche"
                // Appel de la fonction goToPrevious au clic sur la flèche
                onClick={goToPrevious} />
            <div className={ImageSliderStyles.slideCounter}>
                {currentIndex + 1}/{pictures.length}
            </div>
            <img
                // Affichage conditionnel de la flèche "suivant" en fonction du nombre d'images dans l'array pictures
                className={pictures.length === 1 ? ImageSliderStyles.hiddenArrow : ImageSliderStyles.rightArrow}
                src={ArrowRight}
                alt="flèche droite"
                // Appel de la fonction goToNext au clic sur la flèche
                onClick={goToNext} />
        </div>
    )
}

export default ImageSlider;
