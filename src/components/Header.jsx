import React from 'react';
import './Header.css';
import logo from '../assets/img/blue1.1 1.png'; // Replace with the actual path of your logo

const Header = () => {
  return (
    <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Place Order</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </header>
  );
}

export default Header;
