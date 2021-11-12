import {createStore, applyMiddleware} from 'redux'
import {reducer} from "./reducers";
import thunk from 'redux-thunk'
const persister = (store) => (next) => (action) => {
    next(action)
    const {quotes} = store.getState()
    localStorage.setItem('quotes', JSON.stringify(quotes))
}

const middlewares = [thunk, persister]

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)