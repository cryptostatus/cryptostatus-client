import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

const Button = ({ className, as: Component, ...rest }) =>
  <Component className={classnames('btn btn-default', className)} {...rest}/>

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
}

Button.defaultProps = {
  as: 'button',
}

export default Button
