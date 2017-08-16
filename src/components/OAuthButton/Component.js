import React from 'react'
import classnames from 'classnames'

import { Button } from 'components'

const OAuthButton = ({ className, toProvider, ProviderIcon }) =>
  <Button onClick={toProvider} className={classnames(className, "oauth-button")}>
    <span>{<ProviderIcon />}</span>
  </Button>

export default OAuthButton
