import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';


let Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogsItems name="Egor" id="1"/>
            <DialogsItems name="Victor" id="2"/>
            <DialogsItems name="Sasha" id="3"/>
            <DialogsItems name="Valentine" id="4"/>
            <DialogsItems name="Maxim" id="5"/>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
        </div>
    </div>
)

export default Dialogs;