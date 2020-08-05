import React from 'react';

let Profile = () => (
    <div className='content'>
        <div className='back'>
            <img className='back-image' src='https://cdn.collider.com/wp-content/uploads/2017/11/star-wars-the-last-jedi-millenium-falcon-image.jpg' />
        </div>
        <div className='person'>
            <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
            <div className='name'>
                <p>Valentin R.</p>      
            </div>
            <div className='person-data'>
                <p>Date of Birth: 22 may</p>
                <p>City: Norilsk</p>
                <p>Education: BGKLP 2018 - 2021</p>
                <p>Web Site: none</p>
            </div>    
      </div>
        <div className='posts'>
            <p>My posts</p>

            <div className='add-news'>
                <textarea placeholder='your news'></textarea>
                <button>submit</button>
            </div>

            <div>
                post 1
            </div>

            <div>
                post 2
            </div>
        </div>
    </div>
)

export default Profile;