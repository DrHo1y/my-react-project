import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
let MyPosts = () => (
    <div className={s.posts}>
        <p>My posts</p>

        <div className={s.addNews}>
            <textarea placeholder='your news'></textarea>
            <button>submit</button>
        </div>
        <Post message='Hi, how are you?'/>
        <Post message='Hey, bro!'/>
    </div>
)

export default MyPosts;