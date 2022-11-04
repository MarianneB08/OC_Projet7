import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ********** STYLES (MOBILE FIRST) ********** //

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`

const ErrorType = styled.p`
    font-weight: 700;
    font-size: 96px;
    color: #FF6060;
    @media screen and (min-width: 1001px) {
        font-size: 200px;
    }
`

const ErrorDescription = styled.p`
    margin-top: 11px;
    width: 260px;
    font-size: 18px;
    color: #FF6060;
    text-align: center;
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        width: 100%;
        font-size: 25px;
    }
    @media screen and (min-width: 1001px) {
        width: 100%;
        font-size: 36px;
    }
`

const HomeLink = styled.p`
    margin-top: 133px;
    margin-bottom: 100px;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1001px) {
        width: 100%;
        font-size: 18px;
    }
`

// ********** FUNCTIONAL COMPONENT ********** //

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorType>404</ErrorType>
            <ErrorDescription>Oups! La page que vous demandez n'existe pas.</ErrorDescription>
            <Link to='/'>
                <HomeLink>Retourner à la page d'accueil</HomeLink>
            </Link>
        </ErrorContainer>
    );
};

export default Error;