import {combineReducers} from 'redux'
import quoteReducer from './qoute-reducer'

export const reducer  = combineReducers({
    quotes: quoteReducer
})