import React from 'react';
import '../App.css';
import slack from '../img/slack-icon.svg';
import github from '../img/github-icon.svg';

const Socials = () => {
  return (
    <>
      <div className='socials'>
       <a href="http://"><img src={slack} alt='slack icon' /></a> 
      <a href="http://github.com/havickie"> <img src={github} alt='github icon' /></a> 
      </div>
      
    </>
  );
};

export default Socials;
