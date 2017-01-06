import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAPokemon(this.props.params.pokemonId);
  }

  render() {
    return <section>
      <h3>{this.props.item.name}</h3>
      <ul>
        <li>{this.props.item.happiness}</li>
        <li>{this.props.item.price}</li>
      </ul>
    </section>;
  }
}


export default ItemDetail;
