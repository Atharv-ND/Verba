import React, { useState, useEffect } from 'react';
import './BookCard.css';

const BookCard = ({ book, addToCart }) => {
  const [purchaseOption, setPurchaseOption] = useState('buy'); 
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleAddToCart = () => {
    const bookWithOption = {
      ...book,
      purchaseType: purchaseOption,
      // Calculate price based on option (For rent price = 40% of buy price)
      finalPrice: purchaseOption === 'buy' ? book.price : Math.round(book.price * 0.4)
    };
    
    addToCart(bookWithOption);
    
    if (purchaseOption === 'buy') {
      setAlertMessage(`"${book.title}" added to cart for purchase!`);
    } else {
      setAlertMessage(`"${book.title}" added to cart for rental!`);
    }
    
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  
  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={book.image} alt={book.title} />
        <div className="book-rating">
          <i className="fas fa-star"></i>
          <span>{book.rating || '4.5'}</span>
        </div>
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <p className="book-category">{book.category}</p>
        
        <div className="purchase-options">
          <button 
            className={`normal-button ${purchaseOption === 'buy' ? 'selected' : ''}`}
            onClick={() => setPurchaseOption('buy')}
          >
            Buy: Rs. {book.price}
          </button>
          
          <button 
            className={`normal-button ${purchaseOption === 'rent' ? 'selected' : ''}`}
            onClick={() => setPurchaseOption('rent')}
          >
            Rent: Rs. {Math.round(book.price * 0.4)}
          </button>
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="fas fa-plus"></i> Add to Cart
        </button>
      </div>
      
      {/* Custom Alert */}
      <div className={`custom-alert ${showAlert ? 'show' : ''}`}>
        <div className="alert-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="alert-content">
          <p>{alertMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;