const ADD_MESSAGE = "ADD_MESSAGE";


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

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let userMessage = { id: 4, message: action.newMessageBody };
      return {
        ...state, 
        messages: [...state.messages, userMessage]
      }
      // let stateCopy = {...state};
      // stateCopy.messages = [...state.messages];
      // stateCopy.messages.push(userMessage);
      // stateCopy.newMessage = "";
      // return stateCopy;
    }

    default:
      return state;
  }
};

export const addNewMessageCreate = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });


export default dialogsReducer;
