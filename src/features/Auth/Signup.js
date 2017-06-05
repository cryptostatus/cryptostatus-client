import { connect } from 'react-redux';
import { signup } from './actions';
import Signup from './components/Signup';

const mapStateToProps = () => ({
  form: 'Auth.Signup',
});

const mapDispatchToProps = {
  signup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
