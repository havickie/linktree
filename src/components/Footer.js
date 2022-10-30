import React from 'react'
import '../App.css';
import zuri from '../img/Zuri.Internship_Logo.svg'
import i4good from '../img/I4G.svg'

const Footer = () => {
  return (
    <>
      <div className='footer'>
      <div className="zuri">
        <img src={zuri} alt='Zuri logo' />
      </div> 
        <div className='copy'>HNG Internship 9 Frontend Task</div>
        <div className="i4g"><img src={i4good} alt="ingressive for good logo" /></div>
      </div>
    </>
  );
}

export default Footer