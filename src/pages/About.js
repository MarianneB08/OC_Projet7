import React from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import BannerImgDesktop from "../components/Images/banner_about_desktop.jpg";
import BannerImgMobile from "../components/Images/banner_about_mobile.jpg";
import AboutStyles from "../styles/pages/About.module.scss";

const About = () => {
  return (
    <main>
      <div className={AboutStyles.bannerContainer}> 
        <Banner
          // On passe en props un tableau contenant deux fichiers différents pour adapter la bannière à la résolution d'écran
          src={[BannerImgMobile, BannerImgDesktop]}
          alt="paysage de montagnes"
        />
      </div>
      <section className={AboutStyles.collapsesContainer}>
        <Collapse
          key="Fiabilité"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          key="Respect"
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          key="Service"
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          key="Sécurité"
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
};

export default About;
