import React from 'react'
import Profile from '../Components/Profile';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Footer from '../Components/Footer';
import Socials from '../Components/Socials';

const Home = () => {
  return (
    <div>
      {' '}
      <div className='container'>
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