import React, { useState } from 'react';
import ImageSliderStyles from '../styles/ImageSlider.module.scss';
import ArrowLeft from './Images/arrow_left.svg'
import ArrowRight from './Images/arrow_right.svg';

const ImageSlider = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstPicture = currentIndex === 0;
        const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastPicture = currentIndex === pictures.length - 1;
        const newIndex = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className={ImageSliderStyles.slider}>
            <img
                className={ImageSliderStyles.slideImg}
                src={pictures[currentIndex]}
                alt={pictures.title}
                key={currentIndex} />
            <img
                className={pictures.length === 1 ? ImageSliderStyles.hiddenArrow : ImageSliderStyles.leftArrow}
                src={ArrowLeft}
                alt="flèche gauche"
                onClick={goToPrevious} />
            <div className={ImageSliderStyles.slideCounter}>
                {currentIndex + 1}/{pictures.length}
            </div>
            <img
                className={pictures.length === 1 ? ImageSliderStyles.hiddenArrow : ImageSliderStyles.rightArrow}
                src={ArrowRight}
                alt="flèche droite"
                onClick={goToNext} />
        </div>
    )
}

export default ImageSlider;
