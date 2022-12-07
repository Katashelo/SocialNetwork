import React from "react";
import "./App.css";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Friends from "./components/Navbar/Friends/Friends";




const App = (props) => {
 
  return (
    <div className="app-wrapper">

      <Header />
      <Navbar friends={props.state.sidebar.friends}/>

      <div className="app-wrapper-content">
        <Routes>

          <Route path="/dialogs/*"
            element={
              <Dialogs dialogs={props.state.dialogsPage.dialogs}
                       messages={props.state.dialogsPage.messages} 
                       newMessage={props.state.dialogsPage.newMessage}
                       dispatch={props.dispatch}/>}/>

          <Route path="/profile" element={
              <Profile 
                        postsData={props.state.profilePage.postsData}
                        newPost={props.state.profilePage.newPost}
                        dispatch={props.dispatch} />}/>

          <Route path="/news" element={<News />} />
          <Route path="/friends/*" element={<Friends friends={props.state.sidebar.friends} />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
