import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';




const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />)

let toto = props.addMessage;
console.log(toto)

    let addMessage = () => { 
        props.addMessage() 
    };

    let onMessageChange = (e) => {
        let textMessage = e.target.value;
        props.onMessageChange(textMessage);
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
                    value={props.dialogsPage.newMessage} /> </div>

                    <div><button onClick={addMessage}>Send Message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;