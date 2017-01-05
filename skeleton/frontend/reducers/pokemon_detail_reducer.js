import {RECEIVE_A_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_A_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
