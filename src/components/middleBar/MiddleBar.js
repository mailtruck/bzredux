import React from 'react'
import SearchFormWrapper from '../search/SearchFormWrapper'
import CashWrapper from '../cash/CashWrapper'
import './MiddleBar.css'

class MiddleBar extends React.Component {
  render() {
    return (
      <div className="middle-bar">
      <SearchFormWrapper/>
      <CashWrapper/>
      </div>
    )
  }
}

export default MiddleBar
