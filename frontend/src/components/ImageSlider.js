import React, { useState } from 'react';
import styles from '../styles/ImageSlider.module.scss';
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
        <div className={styles.slider}>
            <img
                className={styles.slideImg}
                src={pictures[currentIndex]}
                alt={pictures.title}
                key={currentIndex} />
            <img
                className={styles.leftArrow}
                src={pictures.length === 1 ? `` : ArrowLeft}
                alt={pictures.length === 1 ? `` : `flèche gauche`}
                onClick={goToPrevious} />
            <div className={styles.slideCounter}>
                {currentIndex + 1}/{pictures.length}
            </div>
            <img
                className={styles.rightArrow}
                src={pictures.length === 1 ? `` : ArrowRight}
                alt={pictures.length === 1 ? `` : `flèche droite`}
                onClick={goToNext} />
        </div>
    )
}

export default ImageSlider;
