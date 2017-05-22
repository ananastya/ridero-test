import ReactDom from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App.jsx'
import bookList from './reducer.js'

const store = createStore(bookList)
store.subscribe(() => {
    localStorage.setItem('bookList', JSON.stringify(store.getState()))
})

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('mount-point')
)