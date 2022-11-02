import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const CardBackground = styled.div`
    width: 89%;
    height: 5500px;
    margin: 0 auto;
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    @media screen and (min-width: 1299px)  {
       max-width: 1240px;
       height: 2800px;
       background-color: #F6F6F6;
       padding: 56px 50px;
       border-radius: 25px;
       flex-direction: row;
       flex-wrap: wrap;
       .Link {
            height: 340px;
            width: 340px;
       }
    }
`

const CardItem = styled.div`
    width: 100%;
    height: 255px;
    border-radius: 10px;
    position: relative;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    opacity: 1;
    @media screen and (min-width: 1299px) {
        height: 340px;
    }
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.8;
`

const CardTitle = styled.h2`
    position: absolute;
    width: 70%;
    overflow-wrap: break-word;
    bottom: 20px;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px; 
`

const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('data.json')
            .then((res) => setData(res.data));
    }, [])
    return (
        <CardBackground>
            {data.map((lodging) => (
                <Link to={`/lodgings/${lodging.id}`} key={lodging.id} className='Link'>
                    <CardItem key={lodging.id}>
                        <CardImg
                            src={lodging.cover}
                            alt={lodging.title}
                        />
                        <CardTitle>{lodging.title}</CardTitle>
                    </CardItem>
                </Link>
            ))}
        </CardBackground>
    );
};

export default Card;