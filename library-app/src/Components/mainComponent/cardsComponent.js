
import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '200px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const BookCard = ({ book }) => {
  return (
    <div style={cardStyle}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
};

export default BookCard;
