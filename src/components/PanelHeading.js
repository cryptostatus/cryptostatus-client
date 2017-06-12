import React from 'react'
import classnames from 'classnames'

const PanelHeading = ({ className, children }) =>
  <div className={classnames('panel-heading', className)}>
    {children}
  </div>

export default PanelHeading
