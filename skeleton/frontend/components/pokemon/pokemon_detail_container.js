import { connect } from 'react-redux';
import { requestAPokemon } from '../../actions/pokemon_actions';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return {pokemonDetail: state.pokemonDetail};
};

const mapDispatchToProps = dispatch => ({
  requestAPokemon: (id) => dispatch(requestAPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
