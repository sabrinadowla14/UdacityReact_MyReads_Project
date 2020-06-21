import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import './App.css';

class ListBooks extends React.Component {
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
    <div className="list-books-content">
      {shelvesforBooks.map((shelf, index) => {
        const booksOnShelf = books.filter(book => book.shelf === shelf.key);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <BookShelf books={booksOnShelf} onChangeBookShelf={onChangeBookShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );

}
}

export default ListBooks;

  
  
  
  
