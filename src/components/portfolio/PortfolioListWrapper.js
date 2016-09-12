import React from 'react'
import { connect } from 'react-redux'

import PortfolioList from './PortfolioList'

class PortfolioListWrapper extends React.Component {

  render() {
    const { positions } = this.props
    return <PortfolioList positions={positions}/>
  }
}

PortfolioListWrapper.propTypes = {
  positions: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    positions: state.portfolio.positions
  }
}

export default connect(mapStateToProps, {})(PortfolioListWrapper)
