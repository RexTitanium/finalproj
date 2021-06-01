import * as ActionTypes from './ActionTypes';
//import { baseUrl } from '../shared/baseUrl';    
    export const cardsLoading = () => ({
        type: ActionTypes.CARDS_LOADING
    });
    
    export const cardsFailed = (errmess) => ({
        type: ActionTypes.CARDS_FAILED,
        payload: errmess
    });
    
    export const addCards = (cards) => ({
        type: ActionTypes.ADD_CARDS,
        payload: cards
    });