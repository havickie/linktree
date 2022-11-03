import React from 'react';
import '../App.css';
import profileImage from '../img/profile-img.png';
import cam from '../img/camera.svg';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-picture'>
        <a href='https://twitter.com/haveekk'>
          {' '}
          <img id='profile__img' src={profileImage} alt='' />
        </a>{' '}
        <div class='middle'>
          <img src={cam} alt='' />
        </div>
      </div>

      <div className='profile-name'>
        <h4 id='slack' className='hidden'>
          Astrocub
        </h4>
        <h4 id='twitter'>Haveekk</h4>
      </div>
    </div>
  );
};

export default Profile;
