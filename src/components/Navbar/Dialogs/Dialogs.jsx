import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { addNewMessageCreate, updateNewMessageTextActionCreate } from '../../../redux/dialogsReducer ';




const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.messages.map(m => <Message message={m.message} />)

    let newMessage = props.newMessage;

    let addMessage = () => { props.dispatch(addNewMessageCreate())   }
    let onMessageChange = (e) => {
        let textMessage = e.target.value;
        props.dispatch(updateNewMessageTextActionCreate(textMessage))
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
                <div>
                    <div>  <textarea onChange={onMessageChange} 
                    placeholder={'Enter your message'}
                    value={newMessage} /> </div>

                    <div><button onClick={addMessage}>Send Message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;