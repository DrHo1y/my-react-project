import React from 'react';
import s from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';
let DialogsItems = (props) => (
    
    <div className={s.dialogsItems}>
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    </div>
)

export default DialogsItems;