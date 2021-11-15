import {
    START_QUOTE_LOADING,
    END_QUOTE_LOADING,
    SET_QUOTES,
} from '../action-types'

const startQuotesLoading = () => ({type: START_QUOTE_LOADING})
const endQuotesLoading = () => ({type: END_QUOTE_LOADING})
const setQuotes = (payload) => ({type: SET_QUOTES, payload})
const loadQuotes = () => async (dispatch, getState) => {
    const hasItem = !!getState().quotes.length
    try {
        !hasItem && dispatch(startQuotesLoading())
        const resp = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`);
        const json = await resp.json();
        dispatch(setQuotes(json))

    } catch (e) {
        console.error(e)
    } finally {
        dispatch(endQuotesLoading())
    }
}

export {
    startQuotesLoading,
    endQuotesLoading,
    setQuotes,
    loadQuotes
}