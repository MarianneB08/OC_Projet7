import React, { useState } from 'react';
import CollapseStyles from '../styles/components/Collapse.module.scss';
import ArrowUp from './Images/arrow_up.svg'
import ArrowDown from './Images/arrow_down.svg';

// Le composant Collapse s'appuie sur les props "title" et "content" pour afficher son contenu
const Collapse = ({ title, content }) => {

    // Le hook useState permet de gérer l'affichage du contenu des collapses
    const [text, setText] = useState(false);
    const display = () => {
        setText(!text);
    }

    return (
        <div className={CollapseStyles.container}>
            <div className={CollapseStyles.title}>
                <p>{title}</p>
                {/* Utilisation d'une ternaire dans src pour afficher l'icône qui correspond à la situation */}
                {/* L'événement onClick appelle la fonction display qui actualise la valeur de text à true ou false */}
                <img className={CollapseStyles.arrowIcon} src={text ? ArrowUp : ArrowDown} alt='flèche' onClick={display} />
            </div>
            <div>
                {text && <div className={CollapseStyles.content}>{content}</div>}
            </div>
        </div>
    )
};

export default Collapse;