import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import News from "./components/Navbar/News/News";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




const App = (props) => {

  return (
    <div className="app-wrapper">

      <HeaderContainer />
      <Navbar/>

      <div className="app-wrapper-content">
        <Routes>

          <Route path="/dialogs/*"
            element={
              <DialogsContainer/>}/>

          <Route path="/profile/:userId" element={
              <ProfileContainer/>}/>
          <Route path="/profile" element={
              <ProfileContainer/>}/>

          <Route path="/news" element={<News />} />
          <Route path="/friends/*" element={<FriendsContainer/>} />
          <Route path="/users/*" element={<UsersContainer/>} />
          <Route path="/login/*" element={<Login/>} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
