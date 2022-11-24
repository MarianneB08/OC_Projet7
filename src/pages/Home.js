import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import HomeStyles from '../styles/pages/Home.module.scss';
import BannerImgDesktop from "../components/Images/banner_home_desktop.jpg";
import BannerImgMobile from "../components/Images/banner_home_mobile.jpg";

// Mise en place de la page Home de l'application, qui contient les composants "Banner" et "Card"
const Home = () => {
  return (
    <div>
      <div className={HomeStyles.bannerContainer}>
        <Banner
          // On passe en props un tableau contenant deux fichiers différents pour adapter la bannière à la résolution d'écran
          src={[BannerImgMobile, BannerImgDesktop]}
          slogan={"Chez vous, partout et ailleurs"}
          alt="paysage marin"
        />
      </div>
      <Card />
    </div>
  );
};

export default Home;
