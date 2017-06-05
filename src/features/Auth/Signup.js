import { connect } from 'react-redux';
import { signup } from './actions';
import Signup from './components/Signup';
import { formAdapter } from 'utils';

const mapStateToProps = () => ({
  form: 'Auth.Signup',
});

const mapDispatchToProps = {
  onSubmit: formAdapter(signup),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
