import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return <div className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png"/> Yevheniigramm
   
  
    <div className={s.loginBlock}>
        { props.isAuth ? props.login:
    <NavLink to={'/login/'}>  login  </NavLink>}
    </div>


        </div>
    

}

export default Header;