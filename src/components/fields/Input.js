import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'redux-form'

const Input = ({ input, label, placeholder, type }) => (
  <div className='form-group'>
    <label>{label}</label>

    <input
      {...input}
      type={type}
      className='form-control'
      placeholder={placeholder}
    />
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
}

const InputWrapper = (props) => (
  <Field {...props} component={Input} />
)

export default InputWrapper
