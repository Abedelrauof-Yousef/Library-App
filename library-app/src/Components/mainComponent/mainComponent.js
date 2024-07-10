import React, { useState } from "react";
import BookCard from "./cardsComponent";

const initState = {
  books: [
    {
      id: 1,
      title: "The Woman in White",
      author: "Wilkie Collins",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "The Murder of Roger Ackroyd",
      author: "Agatha Christie",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      isbn: "0451524934",
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "0060935464",
    },
  ],
};

const Book = () => {
  const [state, setState] = useState(initState);

  return (
    <div>
      <h1>Book List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Book;
