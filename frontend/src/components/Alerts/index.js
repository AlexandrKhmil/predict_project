import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { alert, message } = this.props 
    if (message !== prevProps.message) {
      // ERRORS
      if (message.msg.username) alert.error(`Username: ${message.msg.username.join()}`)
      if (message.msg.password) alert.error(`Password: ${message.msg.password.join()}`)
      if (message.msg.email) alert.error(`Email: ${message.msg.email.join()}`)
      if (message.msg.passwordNotMatch) alert.error(message.msg.passwordNotMatch)
      if (message.msg.non_field_errors) alert.error(message.msg.non_field_errors.join())
      
      if (message.msg.message) alert.error(`Message: ${message.msg.message.join()}`)
    }
  }
  
  render() {
    return (<></>)
  }
}

const mapStateToProps = state => ({
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))