import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => (
    <nav className={s.nav}>
        <div className={s.item}>
            <a href='/Profile'>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='/Dialogs'>Message</a>
        </div>
        <div className={s.item}>
            <a href='#'>News</a>
        </div>
        <div className={s.item}>
            <a href='#'>Music</a>
        </div>
        <div className={s.item}>
            <a href='#'>Settings</a>
        </div>
    </nav>
)

export default Navbar;
