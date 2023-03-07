import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewMessageCreate } from '../../../redux/dialogsReducer ';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addNewMessageCreate(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
