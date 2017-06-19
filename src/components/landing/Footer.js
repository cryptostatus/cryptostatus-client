import React from 'react'
import { Mail, Twitter } from 'react-feather'


const Footer = () =>
  <div className='col-xs-12'>
    <footer className='footer__landing'>
      <a href="mailto:hello@cryptostat.us">
        <Mail />
      </a>
      <a href="https://twitter.com/cryptostatus" target='_blank'>
        <Twitter />
      </a>
      <p>
        © Cryptostatus 2017
      </p>
    </footer>
  </div>

export default Footer
