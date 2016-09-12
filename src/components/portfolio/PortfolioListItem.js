import React from 'react'

class PortfolioListItem extends React.Component {

  render() {
    const { name, symbol, purchasePrice, quantity } = this.props.position
    return(
      <tr>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{purchasePrice}</td>
        <td><button>view stock</button></td>

      </tr>
    )
  }
}

PortfolioListItem.propTypes = {
  position: React.PropTypes.object.isRequired
}

export default PortfolioListItem
