import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMessages } from '../actions';
import Message from '../components/message'
import MessageForm from './message_form'

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          { this.props.messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <MessageForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
