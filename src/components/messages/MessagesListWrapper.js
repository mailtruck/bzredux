import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from '../../actions/messageActions'

import MessagesList from './MessagesList'

class MessagesListWrapper extends React.Component {
  render() {
    const { messages, deleteMessage } = this.props
    return (
      <MessagesList
        messages={messages}
        deleteMessage={deleteMessage}/> )
  }
}

MessagesListWrapper.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { deleteMessage })(MessagesListWrapper)
