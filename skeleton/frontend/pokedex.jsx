import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllPokemon, fetchAPokemon} from './util/api_util.js';
import {receiveAllPokemon, requestAllPokemon, receiveAPokemon, requestAPokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.store = store;
  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchAPokemon = fetchAPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAPokemon = receiveAPokemon;
  window.requestAPokemon = requestAPokemon;
  window.selectAllPokemon = selectAllPokemon;
});
