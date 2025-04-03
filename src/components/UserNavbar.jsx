import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserNavbar.css'; 

const UserNavbar = ({ signOut, cartCount, email}) => {
  const navigate = useNavigate(); 

  return (
    <nav className="user-navbar">
      <h1 style={{color:"white"}}><img src="../portfolio.svg" alt="" width={40} height={40}/>{email}</h1>
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
