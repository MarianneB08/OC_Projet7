import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeft from './Images/arrow_left.svg'
import ArrowRight from './Images/arrow_right.svg';

const Slider = styled.div`
    width: 90%;
    height: 415px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    position: relative;
`

const SlideImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 10px;
`
const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 80px;
    z-index: 1;
    cursor: pointer;
`
const RightArrow = styled.img`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 80px;
    z-index: 1;
    cursor: pointer;
`

const ImgCounter = styled.div`
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        color: #ffffff;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translate (0, -50%);
        font-size: 18px;
    }
`

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
        <Slider>
            <SlideImg src={pictures[currentIndex]} alt={pictures.title} key={currentIndex} />
            <LeftArrow src={pictures.length === 1 ? `` : ArrowLeft} alt={pictures.length === 1 ? `` : `flèche gauche`} onClick={goToPrevious} />
            <ImgCounter>{currentIndex + 1}/{pictures.length}</ImgCounter>
            <RightArrow src={pictures.length === 1 ? `` : ArrowRight} alt={pictures.length === 1 ? `` : `flèche droite`} onClick={goToNext} />
        </Slider>
    )
}

export default ImageSlider;
