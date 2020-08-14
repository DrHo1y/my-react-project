import React from 'react';
import s from './Post.module.css';
let Post = (props) => (
    <div className={s.item}>
        <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' />
        <p className={s.message}>{props.message}</p>
    </div>
)

export default Post;