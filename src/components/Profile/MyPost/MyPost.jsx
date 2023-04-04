import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Element } from '../../common/FormsControls/FormsControls';
import s from './MyPost.module.css';
import Post from './Post/Post';

const SendPostForm = (props) => {

// const maxLength = maxLengthCreator(10);
// elementType='input' validate= { [ required, maxLength ] } 

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
            <Field name= 'messagePost'  component= 'textarea' />
            </div>
           <div> <button> Send Post </button> </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(SendPostForm)


const MyPost = (props) => {

    let postsElement = props.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.like} />)


    let addNewPost = (values) => {
       props.addPost(values.messagePost)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.contentBlock}>
                <div>My Post</div>
              <AddPostReduxForm onSubmit={addNewPost} />
              
            </div>

            {postsElement}

        </div>
    )
}



export default MyPost;