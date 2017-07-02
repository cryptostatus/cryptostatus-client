import React from 'react'
import { Mail, Twitter } from 'react-feather'


const Footer = () =>
  <footer className='footer__landing'>
    <div className='footer__icons'>
      <a href="mailto:hello@cryptostat.us">
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
