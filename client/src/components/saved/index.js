import React, { useState } from "react";
import API from "../../utils/API";

function Saved(props) {

  const [books, setBooks] = useState([]);

  // getSavedBooks = () => {
  //   API.getSavedBooks()
  //     .then((res) => {
  //       setBooks(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      {!books.length ? (
        <h3>No Saved Books</h3>
      ) : (
        <div>
          <h3>Saved Books</h3>
          {books.map((book) => {
            return (
              <div key={book.title}>
                <h4>{book.title}</h4>
                <h5>{book.authors}</h5>
                <p>{book.description}</p>
                <img src={book.image} />
                <a href={book.link} target="_blank">
                  Link
                </a>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Saved;
