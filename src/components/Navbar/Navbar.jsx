import React from 'react';
import s from './Navbar.module.css';

let Nav = () => (
    <nav className={s.nav}>
        <div className={s.item}>
            <a src='#'>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a src='#'>Message</a>
        </div>
        <div className={s.item}>
            <a src='#'>News</a>
        </div>
        <div className={s.item}>
            <a src='#'>Music</a>
        </div>
        <div className={s.item}>
            <a src='#'>Settings</a>
        </div>
    </nav>
)

export default Nav;
