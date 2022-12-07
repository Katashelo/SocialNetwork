import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.DialogsItem}>
            <img src='https://static.posters.cz/image/750/plotno-the-simpsons-ralph-pick-i102900.jpg' />
             <div className={s.razmer}>Online ◉ </div>
             <div className={s.razmerImen}> <NavLink to={path} > {props.name}</NavLink> </div>

        </div>
    )
}

export default DialogItem;