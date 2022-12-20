import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {

    let postsElement = props.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.like} />)

    let newPostElement = React.createRef();

  



    let addPost = () => {
        props.addPost() ;
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };


    return (
        <div className={s.postsBlock}>
            <div className={s.contentBlock}>
                <div>
                    ava + description
                </div >
                <div>My Post</div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPost} ></textarea>
                </div>
                <button onClick={addPost} >Send Post</button>
            </div>

            {postsElement}

        </div>
    )
}

export default MyPost;