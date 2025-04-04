import React, { useState } from 'react';
import './UserPage.css';
import UserNavbar from './UserNavbar';
import BookCard from './BookCard';

const UserPage = ({ onSignOut, addToCart, cart}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const allBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', price: 830, image: '../1.jpeg' },
    { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', price: 1245, image: '../2.jpeg' },
    { id: 3, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', category: 'History', price: 1660, image: '../3.jpeg' },
    { id: 4, title: 'Becoming', author: 'Michelle Obama', category: 'Biography', price: 2075, image: '../4.jpeg' },
    { id: 5, title: '1984', author: 'George Orwell', category: 'Fiction', price: 996, image: '../5.jpeg' },
    { id: 6, title: 'The Selfish Gene', author: 'Richard Dawkins', category: 'Science', price: 1494, image: '../6.jpeg' },
    { id: 7, title: 'Guns, Germs, and Steel', author: 'Jared Diamond', category: 'History', price: 1826, image: '../7.jpeg' },
    { id: 8, title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography', price: 2241, image: '../8.jpeg' },
    { id: 9, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', price: 1162, image: '../9.jpeg' },
    { id: 10, title: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson', category: 'Science', price: 1328, image: '../10.jpeg' },
    { id: 11, title: 'The Silk Roads', author: 'Peter Frankopan', category: 'History', price: 1992, image: '../11.jpeg' },
    { id: 12, title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', category: 'Biography', price: 2324, image: '../12.jpeg' },
    { id: 13, title: 'Brave New World', author: 'Aldous Huxley', category: 'Fiction', price: 913, image: '../13.jpeg' },
    { id: 14, title: 'The Elegant Universe', author: 'Brian Greene', category: 'Science', price: 1577, image: '../14.jpeg' },
    { id: 15, title: 'A Peoples History of the United States', author: 'Howard Zinn', category: 'History', price: 1743, image: '../15.png' },
    /*{ id: 16, title: 'Long Walk to Freedom', author: 'Nelson Mandela', category: 'Biography', price: 2490, image: 'https://m.media-amazon.com/images/I/81GqtNbs+PL.jpg' },
    { id: 17, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', price: 1079, image: 'https://m.media-amazon.com/images/I/81OthjkJBuL.jpg' },
    { id: 18, title: 'Cosmos', author: 'Carl Sagan', category: 'Science', price: 1411, image: 'https://m.media-amazon.com/images/I/81BzeNG+xlL.jpg' },
    { id: 19, title: 'The Wright Brothers', author: 'David McCullough', category: 'History', price: 1909, image: 'https://m.media-amazon.com/images/I/81u1jljykLL.jpg' },
    { id: 20, title: 'The Diary of a Young Girl', author: 'Anne Frank', category: 'Biography', price: 2158, image: 'https://m.media-amazon.com/images/I/81iA31jEShL.jpg' },
    { id: 21, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', price: 1162, image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg' },
    { id: 22, title: 'The Demon-Haunted World', author: 'Carl Sagan', category: 'Science', price: 1494, image: 'https://m.media-amazon.com/images/I/81lZ3mMklfL.jpg' },
    { id: 23, title: 'The History of the Ancient World', author: 'Susan Wise Bauer', category: 'History', price: 1826, image: 'https://m.media-amazon.com/images/I/81m5m5p2R+L.jpg' },
    { id: 24, title: 'Leonardo da Vinci', author: 'Walter Isaacson', category: 'Biography', price: 2407, image: 'https://m.media-amazon.com/images/I/81iA31jEShL.jpg' },
    { id: 25, title: 'Moby-Dick', author: 'Herman Melville', category: 'Fiction', price: 996, image: 'https://m.media-amazon.com/images/I/81F5Nw2+4BL.jpg' }*/
];

  const categories = ['All', ...new Set(allBooks.map(book => book.category))];

  // Filter books as per filter
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <UserNavbar cartCount={cart.length} signOut={onSignOut}/>
      <div className="user-page">
        <div className="search-and-filter">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search by title or author..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-buttons">
            {categories.map(category => (
              <button 
                key={category} 
                className={`category-button ${selectedCategory === category ? 'active' : ''}`} 
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        <div className="book-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} addToCart={addToCart} />
            ))
          ) : (
            <p className="no-results">No books found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;