import React from 'react'
import classnames from 'classnames'

const BaseLayout = ({ children, className }) =>
  <div className={classnames('main-container', className)}>
    {children}
  </div>

export default BaseLayout
