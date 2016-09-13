import React from 'react'
import PortfolioListItem from './PortfolioListItem'
import './PortfolioList.css'

class PortfolioList extends React.Component {

  render() {
    const { positions, getQuote } = this.props
    return (
      <table className="portfolio-list">
        <tbody>
          <tr>
            <th>symbol</th>
            <th>company</th>
            <th>quantity</th>
            <th>purchase price</th>
          </tr>
          {this.positions(positions, getQuote)}
        </tbody>
      </table>
    )
  }

  positions(positions, getQuote){
    return positions.map(p => <PortfolioListItem position={p} getQuote={getQuote}/>)
  }
}

PortfolioList.propTypes = {
  positions: React.PropTypes.array.isRequired,
  getQuote: React.PropTypes.func.isRequired
}

export default PortfolioList
