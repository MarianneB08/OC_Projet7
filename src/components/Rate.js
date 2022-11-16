import React from 'react';
import PinkStar from '../components/Images/pink_star.svg';
import GreyStar from '../components/Images/grey_star.svg';
import RateStyles from '../styles/components/Rate.module.scss';

const Rate = ({ rating }) => {
    const range = [1, 2, 3, 4, 5];

    return (
        range.map((rangeElem, index) => (
            rangeElem <= rating ? (
                <img src={PinkStar} alt='étoile pleine' key={index} className={RateStyles.starIcon} />
            ) : (
                <img src={GreyStar} alt='étoile vide' key={index} className={RateStyles.starIcon} />
            )
        ))
    );
};

export default Rate;