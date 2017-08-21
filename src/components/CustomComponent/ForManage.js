import React, { Component } from 'react'

import { tryCall } from 'utils'

class ForManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveTools: false,
      editTools: false,
      removeTools: false,
    }
    this.toggleTools = this.toggleTools.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleRemove = this.toggleRemove.bind(this)
    this.confirmRemove = this.confirmRemove.bind(this)
    this.confirmEdit = this.confirmEdit.bind(this)
  }

  toggleTools(values) {
    this.setState({ isActiveTools: !this.state.isActiveTools })
    tryCall(this.props.onToggleTools, values)
  }

  toggleEdit(values) {
    this.setState({ editTools: !this.state.editTools })
    tryCall(this.props.onToggleEdit, values)
  }

  toggleRemove(values) {
    this.setState({ removeTools: !this.state.removeTools })
    tryCall(this.props.onToggleRemove, values)
  }

  confirmRemove(values) {
    this.setState({ removeTools: false })
    tryCall(this.props.onRemove, values)
  }

  confirmEdit(values) {
    this.setState({ editTools: false })
    tryCall(this.props.onEdit, values)
  }
}


export default ForManage
