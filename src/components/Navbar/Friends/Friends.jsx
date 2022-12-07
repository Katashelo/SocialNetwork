import React from 'react';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';

export const Friend = (props) => {
    let path = "/friends/" + props.id;
    
    return (
        <div >
            <NavLink to={path} >{props.name} {props.ava}</NavLink>
        </div>
    )
};

const Friends = (props) => {

    
let friendsElement = props.friends.map(f=> <Friend name={f.name} id={f.id}/>)

    return (
        <div>
{friendsElement}

        </div>
    )

}

export default Friends;







