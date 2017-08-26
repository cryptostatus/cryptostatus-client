import React from 'react'
import { Route as ReactRoute } from 'react-router'
import Helmet from 'react-helmet'

import * as Text from 'constants/Text'
import meta from './meta'

const Route = ({ path, ...rest }) => {
  const metaInfo = meta[path]

  return (
    <div>
      <Helmet {...metaInfo}>
        <meta property='og:title' content={Text.LOGO} />
        <meta property='og:description' content={Text.DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={process.env.REACT_APP_DOMAIN} />
        <meta property='og:image' content={`${process.env.REACT_APP_DOMAIN}/cryptostatus_open_graph_image.png`} />
      </Helmet>

      <ReactRoute path={path} {...rest} />
    </div>
  )
}

export default Route
