import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createMessage } from '../actions'

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newMessage: ''}
  }

  render() {
    // permet de mettre à jour le state du composant avec ce que l'user écrit
    const handleChange = (event) => {
      this.setState({newMessage: event.target.value})
    }

    // permet de déclencer un action creator
    const handleSubmit = (event) => {
      event.preventDefault()
      this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.newMessage)
      this.setState({newMessage: ''})
    }

    return (
      <form onSubmit={handleSubmit} className="channel-editor">
        <input type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.newMessage}
          onChange={handleChange}></input>
        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    // messages: state.messages,
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
