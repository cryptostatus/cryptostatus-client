import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { Field } from 'redux-form'

const Input = ({ input, className, placeholder, type, label }) => (
  <div className='form-group'>
    { label ? <label>{ label }</label> : '' }
    <input
      {...input}
      type={type}
      className={classnames('form-control input__form', className)}
      placeholder={placeholder}
    />
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
}

const InputWrapper = (props) => (
  <Field {...props} component={Input} />
)

export default InputWrapper
