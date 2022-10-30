import React from 'react'
import '../App.css';
import profileImage from '../img/profile-img.png'
const Profile = () => {
  return (
    <div className='profile-picture'>
      <a href='https://twitter.com/haveekk'>
        {' '}
        <img id='profile__img' src={profileImage} alt='Profile-Picture' />
      </a>
      <div className='profile-name'>
        <h4 id='slack' className='hidden'>
          Astrocub
        </h4>
        <h4 id='twitter'>Haveekk</h4>
      </div>
    </div>
  );
}

export default Profile