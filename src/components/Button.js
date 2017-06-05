import React from 'react';
import classnames from 'classnames';

export default ({ className, ...rest }) =>
  <button className={classnames('btn btn-default', className)} {...rest}/>
