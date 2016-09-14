import React from 'react'

import MessagesListItem from './MessagesListItem'
import './MessagesList.css'

class MessagesList extends React.Component {

  render() {
    const { messages, deleteMessage } = this.props
    return(
      <div className="messages-list">
        {this.messages(messages, deleteMessage)}
      </div>
    )
  }

  messages(messages, deleteMessage) {
    return messages.map(m => {
      return (
        <MessagesListItem
          message={m}
          key={m.id}
          deleteMessage={deleteMessage}/>
        )
    })
  }
}

MessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteMessage: React.PropTypes.func.isRequired
}

export default MessagesList
