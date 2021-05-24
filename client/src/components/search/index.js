import React, { useState } from "react";
import API from "../../utils/API";

function Search(props) {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  function searchApi(event) {
    event.preventDefault();
    API.searchBooks(bookSearch)
      .then((apiData) => {
        setBooks(apiData.data.items);
        console.log(apiData.data.items);
      })
      .catch((err) => console.log(err));
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const saveBook = (id) => {
    const book = books.find((book) => book.id === id);
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.previewLink,
    });
  };

  return (
    <div>
      <h3>Book Search</h3>
      <form>
        <input value={bookSearch} onChange={handleInputChange}></input>
        <button onClick={searchApi}>Submit</button>
      </form>
      {!books.length ? (
        <h3>No Books Return</h3>
      ) : (
        <div>
          <h3>Results</h3>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <h4>{book.volumeInfo.title}</h4>
                <h5>{book.volumeInfo.authors}</h5>
                <p>{book.volumeInfo.description}</p>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                <a href={book.volumeInfo.previewLink} target="_blank">
                  Link
                </a>
                <button onClick={() => saveBook(book.id)}>Save</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
