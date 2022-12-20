import React from "react";
import { NavLink } from "react-router-dom";
// import { Friend } from "./Friends/Friends";
import s from "./Navbar.module.css";



const Navbar = (props) => {

    // let state = props.store.getState().sidebar
    
    // let friendAll = state.friends.map(f => <Friend id={f.id} name={f.name}/> );

    return <div className={s.navbar}>
        <div className={s.items} >
            <NavLink to='profile' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined}> Profile</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='dialogs' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined}> Messages</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='news' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined} >  News</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='music' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined}> Music</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='setting' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined}> Setting</NavLink>

        </div>
        <div className={s.itemsFriends}>
            <div className={s.items}>
                <div className={s.centro}>
                <NavLink to='friends' isActive style={({ isActive }) => isActive ? { color: `#000` } : undefined}> <h1>Friends</h1></NavLink>
          
            </div>
            </div>
        </div>
        {/* <div className={s.items}>
        <div className={s.friendsItems}> {friendAll} </div>
        </div> */}
        </div>
}

export default Navbar;