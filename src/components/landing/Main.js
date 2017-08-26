import React from 'react'

import * as Text from 'constants/Text'

const Main = ({component: Component}) =>
  <div className='main__landing'>
    <div className='title__landing col-lg-7 col-md-7 col-sm-12'>
      <h1>{Text.LOGO}</h1>
      <p>{Text.DESCRIPTION}</p>
    </div>

    <div className='form__auth--landing col-lg-5 col-sm-12'>
      <Component />
    </div>
  </div>

export default Main
