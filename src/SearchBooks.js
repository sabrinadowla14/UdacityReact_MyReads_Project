import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
  }
state = {
  query: '',
  updatedBooks: []
};

updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
clearQuery = () => {
    this.updateQuery('')
  }
searchBooks = (event) => {
   //let query = event.target.value;
   let query = event;
   this.setState({query })
   if(query) {
      BooksAPI.search(query, 15).then(books =>{
      (books.length) > 0 
        ? this.setState({updatedBooks: books})
        : this.setState({updatedBooks: []})
    
      } )}
   else {
      this.setState({updatedBooks: [] });
   
 }
  
}

render() {
    const { query, updatedBooks } = this.state;
    const books = this.props.books;
    const onChangeBookShelf = this.props.onChangeBookShelf;

   
return (
       <div className='search-books'>
        <div className='search-books-bar'>
           <Link className="close-search" to="/">
             close
           </Link>
          <div className="seach-books-input-wrapper">
              <input
                 type='text'
                 placeholder='Search by title or author'
                 value={query}
                 onChange={e => this.searchBooks(e.target.value)}
              />
          </div>
       </div>
       <div className='search-books-results'>
            <ol className='books-grid'>
               {updatedBooks.map((book) => (
                   <Book
                     book={book}
                     books={books}
                     key={book.id}
                     onChangeBookShelf={onChangeBookShelf}
            />
         ))}
            </ol>
    </div>
</div>

    );
  }
}

export default SearchBooks;





  
  
  
