import React from 'react'

export default ({ input, label, placeholder, type }) =>
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type} className="form-control" placeholder="Email"/>
  </div>
