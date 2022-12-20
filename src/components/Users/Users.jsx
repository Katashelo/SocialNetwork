import React from 'react';
import styles from './users.module.css';
import  axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Users(props) {
  const [user, setUser] = useState([])
useEffect(() => {
    if (props.users.length === 0) {
        axios.get("https://swapi.dev/api/people").then(response => {
            console.log(response.data)
            setUser(response.data.result);
        })
        .catch(er => {
            console.log(er)
        })
        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl:
        //             "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
        //         followed: true,
        //         status: 'i am a superman',
        //         name: "Yevhenii",
        //         location: { city: "Poznan", country: "Poland" },
        //     },
        //     {
        //         id: 2,
        //         photoUrl:
        //             "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
        //         followed: false,
        //         status: 'i am a batman',
        //         name: "Stas",
        //         location: { city: "Cherkassy", country: "Ukraine" },
        //     },
        //     {
        //         id: 3,
        //         photoUrl:
        //             "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
        //         followed: true,
        //         status: 'i am a good boss',
        //         name: "Vlad",
        //         location: { city: "Tbilisi", country: "Georgia" }
        //     } ])
    };
})
console.log(props)
    return <div> {user.map(u => <div key={u.created}>
        <span>
            <div>
                {/* <img src={u.photoUrl} className={styles.userPhoto}></img> */}
            </div>
            {/* <div>
                {u.followed ? <button onClick={() => { props.unfollow(u.id); } }>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id); } }>Follow</button>}
            </div> */}
            <span>
                <div>{u.name}</div>
                <div>{u.gender}</div>
            </span>
            <span>
                <div>"{u.mass}"</div>
                <div>"{u.height}"</div>
            </span>
        </span>
    </div>)}
    </div>;
}

export default Users;