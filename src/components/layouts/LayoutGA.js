import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'

ReactGA.initialize('UA-104424913-1')

const trackPage = page => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

class LayoutGA extends Component {
  componentDidMount() {
    const page = this.props.location.pathname
    trackPage(page)
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = this.props.location.pathname
    const nextPage = nextProps.location.pathname

    if (currentPage !== nextPage) { trackPage(nextPage) }
  }

  render () {
    return this.props.children
  }
}

export default withRouter(props => <LayoutGA {...props}/>)
