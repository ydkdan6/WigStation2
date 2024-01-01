// Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar-main">
<nav className="navbar">
<div className="logo">
  <h1>Wig Wonderland</h1>
</div>

    <div className="links">
    <ul>
        <li> Home</li>
        <li> Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

      <div className="cart">
      <li className="cart"><FontAwesomeIcon icon={faShoppingCart} /></li>
      </div>

    </nav>
    </div>
    
  );
}

export default Navbar;
