import React from 'react'

import { Field } from 'redux-form'

const Toggler = ({ on, off, checked, ...input }) =>
  <div className="form-group toggler-trigger__wrap">
    <span className="toggler-trigger__desc">{off}</span>
    <div className="toggler-trigger__container">
      <Field id={`toggler-${input.name}`} type='checkbox' component='input' {...input} />
      <label htmlFor={`toggler-${input.name}`}></label>
    </div>
    <span className="toggler-trigger__desc">{on}</span>
  </div>

export default Toggler
