import { CARDS } from "../shared/cards";
export const initialState = {
  isLoading: true,
  cards: CARDS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};