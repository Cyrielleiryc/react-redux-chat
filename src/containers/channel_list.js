import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  isActive = (channel) => {
    return this.props.selectedChannel === channel ? 'active' : ''
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => (
            <li key={channel} className={this.isActive(channel)} onClick={() => this.handleClick(channel)}>
              #{channel}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel,
    fetchMessages: fetchMessages },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
