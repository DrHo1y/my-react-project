import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
let Profile = () => (
    <div>
        <div className={s.back}>
            <img className={s.backImage} src='https://cdn.collider.com/wp-content/uploads/2017/11/star-wars-the-last-jedi-millenium-falcon-image.jpg' />
        </div>
        <div className={s.person}>
            <img className={s.avatar} src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' />
            <div className={s.name}>
                <p>Valentin R.</p>      
            </div>
            <div className={s.personData}>
                <p>Date of Birth: 22 may</p>
                <p>City: Norilsk</p>
                <p>Education: BGKLP 2018 - 2021</p>
                <p>Web Site: none</p>
            </div>    
      </div>
        <MyPosts />
    </div>
)

export default Profile;