import React, { useState } from 'react';
import styles from '../styles/Collapse.module.scss';


const Collapse = ({ title, content }) => {
    const [text, setText] = useState(false);
    const display = () => {
        setText(!text);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>{title}</p>
                <img className={styles.arrowIcon} src={text ? `./img/arrow_up.svg` : `./img/arrow_down.svg`} alt='flèche' onClick={display} />
            </div>
            <div>
                {text && <div className={styles.content}>{content}</div>}
            </div>
        </div>
    )
};

export default Collapse;