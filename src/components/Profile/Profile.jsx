import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return <div className={s.content}>

        <ProfileInfo />
        <MyPost postsData={props.postsData} 
                newPost={props.newPost}
                dispatch={props.dispatch}/>

    </div>

}

export default Profile;