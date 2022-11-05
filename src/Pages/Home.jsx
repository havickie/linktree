import React from 'react'
import Profile from '../Components/Profile.jsx';
import Menu from '../Components/Menu.jsx';
import Links from '../Components/Links.jsx';
import Footer from '../Components/Footer.jsx';
import Socials from '../Components/Socials.jsx';

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