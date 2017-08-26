import React from 'react'
import classnames from 'classnames'

const Preloader = ({ loading, transparent }) =>
  <div>
    { loading &&
      <div className={ classnames('spinner-overlay', { 'spinner-overlay--transparent': transparent }) }>
        <div className="spinner-wrap">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      </div>
    }
  </div>

export default Preloader
