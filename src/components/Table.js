import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Table = ({ striped, className, bordered, ...rest }) =>
  <table className={classnames('table', { 'table-striped': striped, 'table-bordered': bordered })} {...rest}/>

Table.propTypes = {
  striped: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
}

Table.defaultProps = {
  striped: false,
  bordered: false,
}

export default Table
