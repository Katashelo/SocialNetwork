import React from 'react';
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {
    constructor(props) {
        super(props)

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);

                console.log(response.data.items);
            });

    }

    // [
    // {
    //     id: 1,
    //     photoUrl:
    //         "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
    //     followed: true,
    //     status: 'i am a superman',
    //     name: "Yevhenii",
    //     location: { city: "Poznan", country: "Poland" },
    // },
    // {
    //     id: 2,
    //     photoUrl:
    //         "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
    //     followed: false,
    //     status: 'i am a batman',
    //     name: "Stas",
    //     location: { city: "Cherkassy", country: "Ukraine" },
    // },
    // {
    //     id: 3,
    //     photoUrl:
    //         "https://i1.wp.com/www.pressfoto.ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-1.jpg?resize=600%2C338&ssl=1",
    //     followed: true,
    //     status: 'i am a good boss',
    //     name: "Vlad",
    //     location: { city: "Tbilisi", country: "Georgia" }
    // } ]
    render() {
        return <div> {

            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { this.props.unfollow(u.id); }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id); }}>Follow</button>}
                    </div>
                    <span>
                        <div>{u.name}</div>
                    </span>
                </span>
            </div>)}
        </div>;
    }
}
export default Users;