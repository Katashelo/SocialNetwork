import dialogsReducer from "./dialogsReducer ";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, like: 100, message: "Whats up bro?" },
        { id: 2, like: 29, message: "What are you doing??" },
        { id: 3, like: 29, message: "Hey you" },
      ],
      newPost: "katashelooo!!!!!",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Arina" },
        { id: 2, name: "Kolya" },
        { id: 3, name: "Jora" },
      ],

      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Howe are your?" },
        { id: 3, message: "Kun" },
      ],
      newMessage: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Arina" },
        { id: 2, name: "Daria" },
        { id: 3, name: "Stas" },
      ],
    },
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {},

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
    
  },
};





export default store;
