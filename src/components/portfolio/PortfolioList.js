import React from 'react'
import PortfolioListItem from './PortfolioListItem'
import './PortfolioList.css'

class PortfolioList extends React.Component {

  render() {
    const { positions } = this.props
    return (
      <table className="portfolio-list">
        <tbody>
          <tr>
            <th>symbol</th>
            <th>company</th>
            <th>quantity</th>
            <th>purchase price</th>
          </tr>
          {this.positions(positions)}
        </tbody>
      </table>
    )
  }

  positions(positions){
    return positions.map(p => <PortfolioListItem position={p}/>)
  }
}

PortfolioList.propTypes = {
  positions: React.PropTypes.array.isRequired
}

export default PortfolioList
