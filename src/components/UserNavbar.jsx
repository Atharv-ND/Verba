import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserNavbar.css'; 

const UserNavbar = ({ signOut, cartCount }) => {
  const navigate = useNavigate(); 

  return (
    <nav className="user-navbar">
      <h1>User</h1>
      <ul>
        <li>
          <button className="cart-button" onClick={() => navigate('/user/cart')}>
            <h1>Cart</h1>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </li>
        <li><br /></li>
        <li>
          <button onClick={signOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
