import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return <div className={s.content}>

        <ProfileInfo />
        <MyPostContainer store={props.store}/>

    </div>

}

export default Profile;