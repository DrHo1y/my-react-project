import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => (
    <nav className={s.nav}>
        <div className={s.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='/dialogs'>Message</a>
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
