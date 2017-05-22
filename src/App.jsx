import React from 'react'
import {connect} from 'react-redux'
import Book from "./components/Book.jsx";
import './style.styl'
import loadFile from "./file-load.js"
const App = React.createClass({
    addBook(){
        loadFile(this.bookImageInput.files[0])
            .then(
                response => {
                    this.props.onAddBook(this.bookTitleInput.value, this.bookAuthorInput.value, response ? response : null)
                    this.bookTitleInput.value = ''
                    this.bookAuthorInput.value = ''
                    this.bookImageInput.value = ''
                }
            )
        
    },
    render() {
        return (
            <div>
                <div className="book-list">
                    {
                        this.props.testStore.map((book, index) =>
                            <Book key={index} id={index} title={book.title} author={book.author}
                                  image={book.image}></Book>
                        )
                    }

                </div>
                <div className="add-book">
                    <h3>Добавьте новую книгу в список</h3>

                    <div className="add-book__title">
                        <label>Название</label>
                        <input type="text" placeholder="Название книги"
                               ref={input => this.bookTitleInput = input}/>
                    </div>
                    <div className="add-book__author">
                        <label>Автор</label>
                        <input type="text" placeholder="Автор книги"
                               ref={input => this.bookAuthorInput = input}/>
                    </div>
                    <div className="add-book__image">
                        <label>Обложка</label>
                        <input type="file"
                               ref={input => this.bookImageInput = input}/>
                    </div>

                    <button className="add-book__button" onClick={this.addBook}>Добавить</button>
                </div>


            </div>
        )
    }
})
export default connect(
    state => ({testStore: state}),
    dispatch => ({
        onAddBook: (bookTitle, bookAuthor, bookImage) => {
            dispatch({type: 'ADD_BOOK', title: bookTitle, author: bookAuthor, image: bookImage})
        }
    })
)(App)