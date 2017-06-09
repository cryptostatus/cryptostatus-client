import React from 'react'

export default (f) => (Component) =>
  class extends React.Component {
    componentDidMount() {
      f(this.props)
    }

    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
