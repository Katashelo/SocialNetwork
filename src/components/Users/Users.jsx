import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { UserAPI } from '../../api/api';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChange(p); }} >{p}</span>
            })} </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                    </NavLink>
                </div>
                <div>

                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id)
                        UserAPI.unfollow(u.id)
                            .then((response) => {
                                if (response.data.resultsCode == 0) {
                                    props.unfollow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id)
                            });
                    }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            UserAPI.follow(u.id)
                                .then((response) => {
                                    if (response.data.resultsCode == 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });
                        }}>Follow</button>}
                </div>
                <span>
                    <div>{u.name}</div>
                </span>
            </span>
        </div>)}
    </div>;
}


export default Users;