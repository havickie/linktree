import React from 'react';
import '../App.css';
import menu from '../img/menu-button.svg';
import share from '../img/share-link.svg';

const Menu = () => {
  return (
    <div>
      <a>
        <img className='menu-button' src={menu} alt='menu button' />
        <img className='share-button' src={share} alt='share button' />
      </a>
    </div>
  );
};

export default Menu;
