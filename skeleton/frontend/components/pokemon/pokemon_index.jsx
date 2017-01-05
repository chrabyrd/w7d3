import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    return (<ul>
      {this.props.pokemon.map(poke => (<li key={poke.id}>
        <img src={poke.image_url} />
        <span>{poke.name}</span>
      </li>))}
    </ul>);
  }
}


export default PokemonIndex;
