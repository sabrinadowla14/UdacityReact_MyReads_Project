import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css'

class BooksApp extends React.Component {
  state = {
   books: []
  };
/* Going to call BooksAPI.getAll() method will return a promise
   it will call this.setState() which will return an object with
   new books. When our app reloads we are fetching those books from the
   remote server, once we get the response we will update our local state.
   which will updae the UI */
 
  componentDidMount() {
    this.get_book_details()
  }
  get_book_details = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books}) 
      })
  }

  newBookShelf = (updatedBook, newShelf) => {
    BooksAPI.update(updatedBook, newShelf).then(() => {
      this.get_book_details()
    
     });
  }

render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => 
      ( <ListBooks
            books={this.state.books}
            onChangeBookShelf={this.newBookShelf}
          />
        )} />
    
     <Route path='/search' render={() => (
        <SearchBooks books={this.state.books} onChangeBookShelf={this.newBookShelf}
         />
        )} />
     <div className="open-search">
      <Link to="/search">Search Books</Link>
     </div>
</div>
    )}
}

export default BooksApp
