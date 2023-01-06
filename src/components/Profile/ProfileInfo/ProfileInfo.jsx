import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader/>
};
let age = 20;
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            </div>
            <div>
                <img src={props.profile.photos.large}/>

                 ava + description
                 <div> {props.profile.contacts.facebook} </div>
                 <div> {age > 18 ? 'ищу работу' : 'ne shukaju'} </div>
            </div>
        </div>
    )
}
export default ProfileInfo;