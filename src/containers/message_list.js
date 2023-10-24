import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setMessages } from '../actions'
import Message from '../components/message'

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages()
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">Channel #{this.props.selectedChannel}</div>
        <div className="channel-content">
          { this.props.messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
