const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let userMessage = { id: 4, message: state.newMessage };
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(userMessage);
      stateCopy.newMessage = "";
      return stateCopy;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.newMessage = action.textMessage;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addNewMessageCreate = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreate = (textMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  textMessage: textMessage,
});

export default dialogsReducer;
