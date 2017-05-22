import React from 'react'
import {connect} from 'react-redux'
import loadFile from "./../file-load.js"

const Book = React.createClass({
    editBook(){
        loadFile(this.bookImageInput.files[0])
            .then(
                resolve => {
                    this.props.onEditBook(this.bookTitleInput.value, this.bookAuthorInput.value, resolve ? resolve : this.props.image, this.props.id)
                }
            )

    },

    removeBook(){
        this.props.onRemoveBook(this.props.id)
    },

    render(){
        const defaultImg = 'data:image/jpg;base64,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O0jTZGmstNTmYqV858ckA8+v5mtHU7iw+Jvh/Ty2o2mn6tp8flSLdv5ccq8chsde+B6n61wlFL2at53vc2/tSbnN1IpxkknHVJJWtbqrW0/G52q39j8PPC9/aQX1vqWqamnlu1ud0MCcjhu5IJ/HtxzH4PubPwLo82rSXlrcahdQGK1tom3PET1Z/wC7j+Wa46ij2d07vff/ACCOaOM4yhBLkVorXRv7Xm+uum2llY6j4RajDp3jmGa6nigj2SZklcKuSp7mneDPGMPhbxzdTzfvLK6aSKUr82FLZDD1/DtmuVoolTUnd9rGdDMalGEIw3jJyT82krfgddL8O9NN8ZU8RaQNNP7wEy/6QExnHl/3u2M59s8UvizXbTx74wsbSGZLXS7UCBJZW2AKPvNz04GBn0FchRQqeqbd7FSzCPI6dOmoqTTlZvWzvbXZfj5nXfELxRDqnii1tbSRP7L00pFCEb92cYy3p7Z9BVn4neKVtfiLb6hpt1FMYIkIeGQMpILZUkHuOCPQ1xFFEaaVvK/zuVUzarP2nRzcXp05b2S9L/gdf8RDp934ksdUsbi3aPUAks0aSAtC/Gdw7Z9+4NS/ErxOLb4jx6hpt1HIYY4yskMgZTjORkcexHvXF0URp2t5X/EKuaTn7TlVnNxk7dHG+q9W7nWfE0afea3a6pYXFuyagqyTRJIC0L8Z3DtnPfuDW98WviBaqklnpc0Ust6ii6uInDDYM4QMPqc/X3rzWip9irRT2X9fgaf2zUXtXBJOpa7XS17tet3f10Owi1O2HwYktftEH2o3u4Q+YPMxxzt64rj6KK0jGzb7nDicU6ygmvhio/c2/wBQoooqjlCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z'
        return (
            <div className="book-list__item">
                <img src={this.props.image ? this.props.image : defaultImg } className="book-list__item__img"/>
                <input type="text" defaultValue={this.props.title} ref={input => this.bookTitleInput = input}
                       onBlur={this.editBook} className="book-list__item__title" placeholder="Название"/>
                <input type="text" defaultValue={this.props.author} ref={input => this.bookAuthorInput = input}
                       onBlur={this.editBook} className="book-list__item__author" placeholder="Автор"/>
                <button onClick={this.removeBook} className="book-list__item__remove">Удалить</button>
                <input className="book-list__item__file" type="file"
                       onChange={this.editBook}
                       ref={input => this.bookImageInput = input}/>
            </div>
        )

    }
})
export default connect(
    state => ({testStore: state}),
    dispatch => ({
        onEditBook: (bookTitle, bookAuthor, bookImage, bookIndex) => {
            dispatch({type: 'EDIT_BOOK', title: bookTitle, author: bookAuthor, image:bookImage, index: bookIndex})
        },
        onRemoveBook: (bookIndex) => {
            dispatch({type: 'REMOVE_BOOK', index: bookIndex})
        }
    })
)(Book)