import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Error.module.scss';

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <p className={styles.errorType}>404</p>
            <p className={styles.errorDescription}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>
                <p className={styles.homeLink}>Retourner à la page d'accueil</p>
            </Link>
        </div>
    );
};

export default Error;