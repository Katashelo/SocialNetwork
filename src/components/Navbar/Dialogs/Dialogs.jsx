import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators';




const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />)


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }



    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <div className={s.dialog}>

                    {dialogsElement}

                </div>
            </div>
            <div className={s.messages}>

                {messagesElement}
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {

    // const maxLength50 = maxLengthCreator(50);

    // validate={[required, maxLength50]} --- в Field 

    return (
        <form onSubmit={props.handleSubmit}>
            <div>  <Field placeholder='Enter your message' name='newMessageBody' component='input'
/> </div>

            <div><button>Send Message</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessageDialogsForm' })(AddMessageForm)

export default Dialogs;