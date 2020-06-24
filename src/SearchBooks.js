import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
  }
state = {
  query: '',
  updatedBooks: [],
  error: false
};

updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
clearQuery = () => {
    this.updateQuery('')
  }
updatedBooks(books) {
  const checkedBooks = books.map((book) => {
     //initialize the book
    book.shelf = 'none';
    this.props.shelfBooks.forEach(shelfBook => {
       if( book.id === shelfBook.id) {
         book.shelf = shelfBook.shelf;
       }
    
  });
       return book;
    
  });
    this.setState({
       updatedBooks : checkedBooks
    }) 
}


searchBooks = (query) => {
   this.setState({query})
   if(query) {
      BooksAPI.search(query, 20).then(books =>{
      (books.length) > 0 
        ? this.setState({updatedBooks: (this.updatedBooks(books)), error:false})
        : this.setState({updatedBooks: this.updatedBooks ([]), error:true})
        
    
      } )}
   else {
      this.setState({updatedBooks: this.updatedBooks ([]), error: false});
   
 }
  
}

render() {
    const { query, updatedBooks} = this.state;
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





  
  
  
