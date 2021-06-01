import {  createStore} from 'redux';
//import { Cards} from './cards';
//import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import { initialState, Reducer } from './reducer';

export const configureStore = () =>{
    /*const Store = createStore(
        combineReducers({
            cards: Cards
        }),
        applyMiddleware(thunk, logger)
    );*/
    const Store= createStore(
        Reducer,
        initialState
    );

    return Store;
}