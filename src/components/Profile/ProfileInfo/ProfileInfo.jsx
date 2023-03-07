import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader/>
};
let age = 20;
    return (
        <div>
            <div>
                <img src={!props.profile.photos.large && userPhoto } className={s.userPhoto} />

                <div className={s.Status}> <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> </div> 
                 <div> {props.profile.contacts.facebook} </div>
                 <div> {age > 18 ? 'ищу работу' : 'ne shukaju'} </div>
            </div>
        </div>
    )
}
export default ProfileInfo;