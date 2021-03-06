import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>      
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name} width="20" />
      <span>{pokemon.name}</span>
    </Link>
  </li>
);
