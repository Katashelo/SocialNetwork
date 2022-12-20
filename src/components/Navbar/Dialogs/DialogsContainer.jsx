import { connect } from 'react-redux';
import { addNewMessageCreate, updateNewMessageTextActionCreate } from '../../../redux/dialogsReducer ';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageCreate())
        },
        onMessageChange: (textMessage) => {
            dispatch(updateNewMessageTextActionCreate(textMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;