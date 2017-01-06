import {GET_ITEM} from '../actions/item_actions.js';


const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_ITEM:
      return action.item;
    default:
      return state;
  }
};


export default itemReducer;
