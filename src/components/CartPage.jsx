import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const CartPage = ({ cart, removeFromCart, handleBuy, userEmail }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, book) => acc + book.finalPrice, 0);
  
  // Sorting books based on buy or rent
  const buyBooks = cart.filter(book => book.purchaseType === 'buy');
  const rentBooks = cart.filter(book => book.purchaseType === 'rent');

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button 
          className="continue-shopping" 
          onClick={() => navigate(`/user/${userEmail}`)}
        >
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-message">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p>Your cart is empty</p>
            <button 
              className="start-shopping" 
              onClick={() => navigate(`/user/${userEmail}`)}
            >
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {buyBooks.length > 0 && (
              <div className="purchase-section">
                <h3 className="section-title">Books to Purchase</h3>
                <ul className="cart-list">
                  {buyBooks.map((book, index) => (
                    <li key={`buy-${index}`} className="cart-item">
                      <div className="item-image">
                        <img src={book.image} alt={book.title} />
                      </div>
                      <div className="item-details">
                        <h4>{book.title}</h4>
                        <p className="item-author">By {book.author}</p>
                        <p className="item-category">{book.category}</p>
                        <p className="purchase-type">Purchase</p>
                      </div>
                      <div className="item-price">Rs. {book.finalPrice}</div>
                      <button 
                        className="remove-button" 
                        onClick={() => removeFromCart(book.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {rentBooks.length > 0 && (
              <div className="purchase-section">
                <h3 className="section-title">Books to Rent</h3>
                <ul className="cart-list">
                  {rentBooks.map((book, index) => (
                    <li key={`rent-${index}`} className="cart-item">
                      <div className="item-image">
                        <img src={book.image} alt={book.title} />
                      </div>
                      <div className="item-details">
                        <h4>{book.title}</h4>
                        <p className="item-author">By {book.author}</p>
                        <p className="item-category">{book.category}</p>
                        <p className="purchase-type">30-Day Rental</p>
                      </div>
                      <div className="item-price">Rs. {book.finalPrice}</div>
                      <button 
                        className="remove-button" 
                        onClick={() => removeFromCart(book.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Items ({cart.length}):</span>
              <span>Rs. {totalPrice}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-total">
              <span>Order Total:</span>
              <span>Rs. {totalPrice}</span>
            </div>
            <button className="checkout-button" onClick={handleBuy}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;