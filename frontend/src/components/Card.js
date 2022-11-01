import React from 'react';

const Card = ({ lodging }) => {
    return (
        <li>
            <h2>{lodging.title}</h2>
            <img src={lodging.cover} alt={lodging.title} />
        </li>
    );
};

export default Card;