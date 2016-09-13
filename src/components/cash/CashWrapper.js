import React from 'react'
import { connect } from 'react-redux'
import Cash from './Cash'

class CashWrapper extends React.Component {
  render() {
    const { cash } = this.props
    return <Cash cash={cash}/>
  }
}

CashWrapper.propTypes = {
  cash: React.PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    cash: state.portfolio.cash
  }
}

export default connect(mapStateToProps, {})(CashWrapper)
