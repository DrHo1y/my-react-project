import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
let Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={`${s.dialog} + ${s.active}`}>
                <NavLink to="/dialogs/1">Egor</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/2">Victor</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Sasha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/4">Valentine</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/5">Maxim</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
        </div>
    </div>
)

export default Dialogs;