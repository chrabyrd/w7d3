import ItemDetail from './item_details';
import {connect} from 'react-redux';
import {selectItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, parseInt(ownProps.params.itemId))
});

export default connect(mapStateToProps)(ItemDetail);
