import React from 'react';
//import axios from 'axios';
//import Card from '../components/Card';
import Banner from '../components/Banner';
import BannerImg from '../assets/banner.jpg';

const Home = () => {
    return (
        <div>
            <Banner src={BannerImg} slogan={"Chez vous, partout et ailleurs"} alt='paysage marin' />
            {/* <ul>
                {
                    data.map((lodging) => (
                        <Card key={lodging.id} title={lodging.title} />
                    ))}
            </ul> */}
        </div>
    );
};

export default Home;