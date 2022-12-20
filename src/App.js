import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import News from "./components/Navbar/News/News";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/usersContainer";




const App = (props) => {

  return (
    <div className="app-wrapper">

      <Header />
      <Navbar/>

      <div className="app-wrapper-content">
        <Routes>

          <Route path="/dialogs/*"
            element={
              <DialogsContainer/>}/>

          <Route path="/profile" element={
              <Profile/>}/>

          <Route path="/news" element={<News />} />
          <Route path="/friends/*" element={<FriendsContainer/>} />
          <Route path="/users/*" element={<UsersContainer/>} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
