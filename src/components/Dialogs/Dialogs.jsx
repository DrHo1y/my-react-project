import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';


let Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogsItems name="Egor" id="1"/>
            <DialogsItems name="Victor" id="2"/>
            <DialogsItems name="Sasha" id="3"/>
            <DialogsItems name="Valentine" id="4"/>
            <DialogsItems name="Maxim" id="5"/>
        </div>
        <div className="messages">
            <Message message="Hi"/>
        </div>     
    </div>
)

export default Dialogs;