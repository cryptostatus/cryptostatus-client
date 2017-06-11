import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'

const Layout = ({ children, signout }) =>
  <div>
    <Button type='button' onClick={signout}>
      Signout
    </Button>
    {children}
  </div>

Layout.propTypes = {
  signout: PropTypes.func.isRequired,
}

export default Layout
