import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import './App.css';

class ListBooks extends Component {
  
  static propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
  
}


render() {
    const shelvesforBooks = [
    { key:'currentlyReading', title: "Currently Reading" },
    { key:'wantToRead', title: "Want to Read" },
    { key:'read', title: "Read" }
]
    
    const books = this.props.books;
	const onChangeBookShelf = this.props.onChangeBookShelf;
   
    
   return (
    <div className="list-books">
       <div className="list-books-title">
           <h1>MyReads</h1>
       </div>
    <div className="list-books-content">
      {shelvesforBooks.map((shelf) => {
        const booksOnShelf = books.filter(book => book.shelf === shelf.key);
        return (
          <div className="bookshelf" key={shelf.key}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <BookShelf books={booksOnShelf} onChangeBookShelf={onChangeBookShelf} />
            </div>
          </div>
              );
          })}
       </div>
</div>
      );
   }
}

export default ListBooks;

  
  
  
  
