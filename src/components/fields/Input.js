import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'redux-form'

const Input = ({ input, placeholder, type }) => (
  <div className='form-group'>
    <input
      {...input}
      type={type}
      className='form-control input__form'
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
