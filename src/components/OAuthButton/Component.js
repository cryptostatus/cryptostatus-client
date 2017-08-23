import React from 'react'
import classnames from 'classnames'

import { Button } from 'components'

const OAuthButton = ({ className, toProvider, ProviderIcon, size = 30 }) =>
  <Button onClick={toProvider} className={classnames(className, "oauth-button")}>
    <span>{<ProviderIcon size={size} />}</span>
  </Button>

export default OAuthButton
