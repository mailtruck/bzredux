import React from 'react';
import OrderButton from '../OrderButton'
import { BUY, SELL } from '../../constants'
import decimalRounder from '../../utils/decimalRounder'
import './QuotePane.css'

class QuotePane extends React.Component{

  render(){
    const { type, price, quantity } = this.props
    return(
      <div className="quote-pane">
        <strong>{type === BUY ? 'ask' : 'bid'}</strong>
        <h3>{decimalRounder(price)}</h3>
        <OrderButton
          quantity={quantity}
          type={type}/>
      </div>
    )
  }
}

QuotePane.propTypes = {
  type: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  quantity: React.PropTypes.number.isRequired
}

export default QuotePane;
