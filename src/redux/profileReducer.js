const ADD_POST = 'ADD_POST' ;
const UPDATE_NEW_POST_TEXT ='UPDATE_NEW_POST_TEXT';

let initialState = 
{
  postsData: [
    { id: 1, like: 100, message: "Whats up bro?" },
    { id: 2, like: 29, message: "What are you doing??" },
    { id: 3, like: 29, message: "Hey you" },
  ],
  newPost: "katashelooo!!!!!",
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case ADD_POST:{
let userPost = {
          id: 4,
          like: 5,
          message: state.newPost,
        };
        let stateCopy = {...state}
        stateCopy.postsData = [...state.postsData]
        stateCopy.postsData.push(userPost)
        stateCopy.newPost = "";
        return stateCopy;
      }
  case UPDATE_NEW_POST_TEXT: {
  let stateCopy = {...state}
 
  stateCopy.newPost = action.text;
 
  return stateCopy;
  }
  default:
    return state;
  }  }



export const addNewPostActionCreate = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;