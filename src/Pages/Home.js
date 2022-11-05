import React from 'react'
import Profile from '../Components/Profile';
import Menu from '../Components/Menu.js';
import Links from '../Components/Links.js';
import Footer from '../Components/Footer.js';
import Socials from '../Components/Socials.js';

const Home = () => {
  return (
    <div>
      {' '}
      <div className='container con'>
        <div className='menu-div'>
          <Menu />
        </div>
        <Profile />
        <div className='link-buttons'>
          <Links />
        </div>
        <div className='socials-div'>
          <Socials />
        </div>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
}

export default Home