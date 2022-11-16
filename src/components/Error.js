import React from 'react';
import { Link } from 'react-router-dom';
import ErrorStyles from '../styles/components/Error.module.scss';

const Error = () => {
    return (
        <div className={ErrorStyles.errorContainer}>
            <p className={ErrorStyles.errorType}>404</p>
            <p className={ErrorStyles.errorDescription}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>
                <p className={ErrorStyles.homeLink}>Retourner à la page d'accueil</p>
            </Link>
        </div>
    );
};

export default Error;