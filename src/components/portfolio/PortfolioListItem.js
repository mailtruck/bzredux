import React from 'react'
import decimalRounder from '../../utils/decimalRounder'

class PortfolioListItem extends React.Component {

  render() {
    const { name, symbol, purchasePrice, quantity } = this.props.position
    const { getQuote } = this.props
    return(
      <tr
        className="portfolio-list-item"
        onClick={()=> getQuote(symbol)}>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{decimalRounder(purchasePrice)}</td>

      </tr>
    )
  }
}

PortfolioListItem.propTypes = {
  position: React.PropTypes.object.isRequired,
  getQuote: React.PropTypes.func.isRequired
}

export default PortfolioListItem
