import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../../actions/quoteActions'

import PortfolioList from './PortfolioList'

class PortfolioListWrapper extends React.Component {

  render() {
    const { positions, getQuote } = this.props
    return <PortfolioList positions={positions} getQuote={getQuote}/>
  }
}

PortfolioListWrapper.propTypes = {
  positions: React.PropTypes.array.isRequired,
  getQuote: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    positions: state.portfolio.positions
  }
}

export default connect(mapStateToProps, { getQuote })(PortfolioListWrapper)
