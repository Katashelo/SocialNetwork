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
  console.log(action)
  switch (action.type) {

    case ADD_POST:
let userPost = {
          id: 4,
          like: 5,
          message: state.newPost,
        };
        state.postsData.push(userPost);
        state.newPost = "";
        return state;

  case UPDATE_NEW_POST_TEXT: 
  
  state.newPost = action.text;
 
  return state;

  default:
    return state;
  }  }



export const addNewPostActionCreate = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;