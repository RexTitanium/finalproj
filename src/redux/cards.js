import * as ActionTypes from './ActionTypes';

export const Cards = (state = { isLoading: true,
    errMess: null,
    cards:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CARDS:
            return {...state, isLoading: false, errMess: null, cards: action.payload};

        case ActionTypes.CARDS_LOADING:
            return {...state, isLoading: true, errMess: null, cards: []}

        case ActionTypes.CARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};