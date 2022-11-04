import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// ********** STYLES (MOBILE FIRST) ********** //

const Container = styled.div`
    width: 89%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 30px;
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        width: 75%;
    }
    @media screen and (min-width: 1001px) {
        width: 75%;
    }
`

const Title = styled.div`
    background-color: #FF6060;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 13px;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 11.5px;
    padding-right: 8px;
    z-index: 2;
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        font-size: 16px;
        height: 38px;
    }
    @media screen and (min-width: 1001px) {
        font-size: 24px;
        height: 47px;
    }
`
const scrolling = keyframes`
    0% {
        transform: translateY(-50%);
        opacity: 0;
        z-index: 0;
    }
    30% {
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
        z-index: 2;
    }
`

const Content = styled.div`
    background-color: #F6F6F6;
    color: #FF6060;
    font-size: 12px;
    height: auto;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    word-break: break-word;
    animation: ${scrolling} 0.6s ease;
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1001px) {
        font-size: 24px;
    }
`
const ArrowIcon = styled.img`
    width: 15px;
    height: 9px;
    cursor: pointer;
    @media screen and (min-width: 769px) and (max-width: 1000px) {
        width: 18px;
        height: 11px;
        margin-right: 10px;
    }
    @media screen and (min-width: 1001px) {
        width: 23px;
        height: 14px;
        margin-right: 10px;
    }
`

// ********** FUNCTIONAL COMPONENT ********** //

const Collapse = ({ title, content }) => {
    const [text, setText] = useState(false);
    const display = () => {
        setText(!text);
    }

    return (
        <Container>
            <Title>
                <p>{title}</p>
                <ArrowIcon src={text ? `./img/arrow_down.svg` : `./img/arrow_up.svg`} alt='flèche' onClick={display} />
            </Title>
            <div>
                {text && <Content>{content}</Content>}
            </div>
        </Container>
    )
};

export default Collapse;