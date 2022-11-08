import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Card.module.scss';
import PropTypes from 'prop-types';
import DataFile from '../data.json';

const Card = () => {
    return (
        <div className={styles.cardBackground}>
            {DataFile.map((lodging) => (
                <Link to={`/lodgings/${lodging.id}`} key={lodging.id} className={styles.link}>
                    <div key={lodging.id} className={styles.cardItem}>
                        <img
                            className={styles.cardImg}
                            src={lodging.cover}
                            alt={lodging.title}
                        />
                        <h2 className={styles.cardTitle}>{lodging.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

Card.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card;