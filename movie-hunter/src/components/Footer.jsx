import React from 'react';
import './styles/Footer.css'; // You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>
          &copy; {new Date().getFullYear()} MovieHunter- Alamin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
