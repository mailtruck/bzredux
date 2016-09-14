import React from 'react'

import './MessagesListItem.css'

class MessagesListItem extends React.Component {

  render() {
    const { deleteMessage } = this.props
    const { text, id } = this.props.message
    return(
      <div className="messages-list-item alert">
        {text}
        <button
          onClick={()=> deleteMessage(id)}>
            {'\u00D7'}
          </button>
      </div>
    )
  }
}

MessagesListItem.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteMessage: React.PropTypes.func.isRequired
}

export default MessagesListItem
