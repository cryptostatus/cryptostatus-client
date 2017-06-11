import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Table = ({ striped, className, ...rest }) =>
  <table className={classnames('table', { 'table-striped': striped })} {...rest}/>

Table.propTypes = {
  striped: PropTypes.bool.isRequired,
}

Table.defaultProps = {
  striped: false,
}

export default Table
