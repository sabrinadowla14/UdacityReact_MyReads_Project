import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
//import _ from 'lodash'


class Book extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
   
   }
   
  onChangeShelf = (book, e) => {
    this.props.onChangeBookShelf(book, e.target.value)
   }

  render() {
    const book = this.props.book
    return (
       <li>
          <div className="book">
            <div className="book-top">
               <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        //backgroundImage: `url("${book.imageLinks.thumbnail}")`
                        backgroundImage: `url("${ book.imageLinks.thumbnail }")`
                      }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={e => this.onChangeShelf(book,e)} value={book.shelf} >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                     )
            }
       }


export default Book;