import React from 'react';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    
    return (
        <div >
            {props.message}
        </div>
    )
}

export default Message;
