import React from 'react';
import { addNewPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/profileReducer';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {

    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.like} />)

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch( addNewPostActionCreate() );
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreate(text) );
    };


    return (
        <div className={s.postsBlock}>
            <div className={s.contentBlock}>
                <div>
                    ava + description
                </div >
                <div>My Post</div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPost} ></textarea>
                </div>
                <button onClick={addPost} >Send Post</button>
            </div>

            {postsElement}

        </div>
    )
}

export default MyPost;