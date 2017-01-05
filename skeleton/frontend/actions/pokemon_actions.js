export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";

import {fetchAllPokemon, fetchAPokemon} from '../util/api_util';


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receiveAPokemon = (pokemon) => ({
  type: RECEIVE_A_POKEMON,
  pokemon
});

export const requestAPokemon = (poke) => dispatch => {
  return fetchAPokemon(poke)
    .then(pokemon => dispatch(receiveAPokemon(pokemon)));
};
