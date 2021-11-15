import {
    START_QUOTE_LOADING,
    END_QUOTE_LOADING,
    SET_QUOTES,
} from '../action-types/index'

const initFromLS = localStorage.getItem('quotes')
const initialState = initFromLS ? JSON.parse(initFromLS) : {
    quotes: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_QUOTE_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_QUOTE_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_QUOTES: {
            return {
                ...state,
                quotes: action.payload,
            }
        }


        default:
            return state
    }
}

export default reducer