import {createStore, combineReducers} from 'redux'
import contadorReducer from './contador/reducer'

const reducers = combineReducers({
    contadorReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;