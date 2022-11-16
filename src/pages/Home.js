import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import BannerImg from '../components/Images/banner_home.jpg';

const Home = () => {
    return (
        <div>
            <Banner src={BannerImg} slogan={"Chez vous, partout et ailleurs"} alt='paysage marin' />
            <Card />
        </div>
    );
};

export default Home;