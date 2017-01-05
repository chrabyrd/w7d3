import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAPokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestAPokemon(newProps.params.pokemonId);
    }
  }

  render() {
    let moves;
    if(this.props.pokemonDetail.moves) {
      moves = <li>{this.props.pokemonDetail.moves.join(', ')}</li>;
    }


    return <section>
      <h3>{this.props.pokemonDetail.name}</h3>
      <ul>
        <li>{this.props.pokemonDetail.poke_type}</li>
        <li>{this.props.pokemonDetail.attack}</li>
        <li>{this.props.pokemonDetail.defense}</li>
        {moves}
      </ul>
    </section>;
  }
}


export default PokemonDetail;
