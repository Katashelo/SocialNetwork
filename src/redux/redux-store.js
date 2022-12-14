import {combineReducers, legacy_createStore as createStore} from "redux"
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer ";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers);

window.store = store;

export default store;