import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignInPopUp from './components/SignInPopUp';
import UserPage from './components/UserPage';
import CartPage from './components/CartPage';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [userEmail, setUserEmail] = useState(null); // Store the user's logged in email

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSignOut = () => {
    alert('Signed Out Successfully');
    setUserEmail(null); // Reset user email on sign out
    navigate('/');
  };

  const handleLogin = (email) => {
    setUserEmail(email); // Save email when user logs in
    navigate(`/user/${email}`);
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };

  const handleBuy = () => {
    alert('Purchase successful!');
    setCart([]);
  };

  const isUserPage = location.pathname.startsWith('/user/');

  return (
    <div>
      <SignInPopUp isOpen={isPopupOpen} onClose={closePopup} onLogin={handleLogin} />
      {!isUserPage && <Navbar onSignInClick={openPopup} cartCount={cart.length} />}
      {!isUserPage && <Hero />}
      {!isUserPage && <About />}
      {!isUserPage && <Footer />}

      <Routes>
        <Route path="/user/:userId" element={<UserPage onSignOut={handleSignOut} addToCart={addToCart} cart={cart}/>} />
        <Route path="/user/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} handleBuy={handleBuy} userEmail={userEmail} />} />
      </Routes>
    </div>
  );
};

export default App;
