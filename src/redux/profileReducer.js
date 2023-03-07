import { ProfileAPI, UserAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, like: 100, message: "Whats up bro?" },
    { id: 2, like: 29, message: "What are you doing??" },
    { id: 3, like: 29, message: "Hey you" },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let userPost = {
        id: 4,
        like: 5,
        message: action.messagePost,
      };
      return {
        ...state, 
        postsData: [...state.postsData, userPost]
      }
      // let stateCopy = { ...state };
      // stateCopy.postsData = [...state.postsData];
      // stateCopy.postsData.push(userPost);
      // stateCopy.newPost = "";
      // return stateCopy;
    }

    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const setUsersProfileAC = (profile) => ({ type: SET_USERS_PROFILE, profile, });
export const addNewPostActionCreate = (messagePost) => ({ type: ADD_POST, messagePost });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUsersProfile = (userId) => {
  return (dispatch) => {
    UserAPI.getProfile(userId).then((response) => {
      dispatch(setUsersProfileAC(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId)
    .then((responce) => {
        dispatch(setStatus(responce.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    ProfileAPI.updateStatus(status)
    .then((responce) => {
      if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
