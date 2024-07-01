
import React from 'react';
import ImageAuthor from '../../assets/Image Author.png';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <img className='img-author' src={ImageAuthor} alt="Author" />
      <p className='p-header'>There is nothing more important than you taking back control of your life.</p>
    </div>
  );
}

export default Header;
