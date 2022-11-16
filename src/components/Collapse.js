import React, { useState } from 'react';
import CollapseStyles from '../styles/components/Collapse.module.scss';
import ArrowUp from './Images/arrow_up.svg'
import ArrowDown from './Images/arrow_down.svg';


const Collapse = ({ title, content }) => {
    const [text, setText] = useState(false);
    const display = () => {
        setText(!text);
    }

    return (
        <div className={CollapseStyles.container}>
            <div className={CollapseStyles.title}>
                <p>{title}</p>
                <img className={CollapseStyles.arrowIcon} src={text ? ArrowUp : ArrowDown} alt='flèche' onClick={display} />
            </div>
            <div>
                {text && <div className={CollapseStyles.content}>{content}</div>}
            </div>
        </div>
    )
};

export default Collapse;