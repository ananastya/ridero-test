const initialState = localStorage.getItem('bookList') ? JSON.parse(localStorage.getItem('bookList')) : []
export default function bookList(state = initialState, action) {
    console.log(action)
    switch (action.type){

        case 'ADD_BOOK': {
            return [...state, action]
            break;
        }

        case 'EDIT_BOOK':{
            let newState = [...state]
            newState[action.index] = {title: action.title, author: action.author, image: action.image}
            return newState
            break;
        }

        case 'REMOVE_BOOK':{
            let newState = [...state]
            newState.splice(action.index,1)
            return newState
            break;
        }

        default:{
            return state
            break;
        }
    }
}