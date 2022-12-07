import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.items}>
            <div><img src='https://static.posters.cz/image/750/plotno-the-simpsons-ralph-pick-i102900.jpg' /> 
            {props.message}
            </div>
           
        </div>
        <div>
            Like
            {props.likesCount}
        </div>
    </div>


}

export default Post;