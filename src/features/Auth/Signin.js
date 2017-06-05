import { connect } from 'react-redux';
import { signin } from './actions';
import { push } from 'react-router-redux';
import Signin from './components/Signin';

const mapStateToProps = () => ({
  form: 'Auth.Signin',
});

const mapDispatchToProps = {
  signin,
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
