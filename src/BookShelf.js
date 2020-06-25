import React, { Component } from 'react'
import Book from './Book';
import PropTypes from 'prop-types'



class BookShelf extends Component {
  
  
  static Proptypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
   };

   onChangeBookShelf = (book, shelf) => {
      this.props.onChangeBookShelf(book, shelf);
   }

   render () {
     const { books, onChangeBookShelf, title } = this.props;
     
     return (
          <ol className="books-grid">
                       {books.map((book) => ( 
                       <Book 
                         book={book}
                         key={book.id}
                         books={books}
                         onChangeBookShelf={onChangeBookShelf}
                         title={title}
/>
                      ))}
                    </ol>
                  
          );
      }
  }

export default BookShelf;
