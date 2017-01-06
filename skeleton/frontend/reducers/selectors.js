import {values} from 'lodash';

export const selectAllPokemon = ({pokemon}) => {
  return values(pokemon);
};

export const selectItem = ({pokemonDetail}, itemId) => {
  return pokemonDetail.items.find((item) => item.id === itemId) || {};
};
