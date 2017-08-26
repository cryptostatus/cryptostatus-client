import React from 'react'
import { Mail, Twitter } from 'react-feather'
import classnames from 'classnames'

const Footer = ({ className }) =>
  <footer className={classnames('footer', className)}>
    <div className='footer__icons'>
      <a href="mailto:hello@kirillshevch.com">
        <Mail />
      </a>
      <a href="https://twitter.com/cryptostatus" target='_blank'>
        <Twitter />
      </a>
    </div>
    <p>
      © Cryptostatus 2017
    </p>
  </footer>

export default Footer
