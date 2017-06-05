import { connect } from 'react-redux';
import { signin } from './actions';
import Signin from './components/Signin';
import { formAdapter } from 'utils';

const mapStateToProps = () => ({
  form: 'Auth.Signin',
});

const mapDispatchToProps = {
  onSubmit: formAdapter(signin),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
