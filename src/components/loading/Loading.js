import React from 'react'
import './Loading.css'

class Loading extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    )
  }
}

export default Loading
