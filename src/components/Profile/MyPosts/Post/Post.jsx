import React from 'react';
import s from './Post.module.css';
let Post = (props) => (
    <div className={s.item}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
        <p className={s.message}>{props.message}</p>
    </div>
)

export default Post;