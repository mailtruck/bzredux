import React from 'react'
import { connect } from 'react-redux'

import { requestOrder } from '../actions/orderActions'
import Button from './Button'

class OrderButton extends React.Component{

  clickHandler(type, quote, quantity, portfolio, requestOrder){
        return () =>
        requestOrder(portfolio, {
          type,
          ...quote,
          quantity
        })
  }

  render(){
    const { type, quote, quantity, portfolio,  requestOrder} = this.props;
    return (
      <Button
        text={type}
        clickHandler={this.clickHandler(type, quote, quantity, portfolio, requestOrder)}
        disabled={!quantity }
      />
    )
  }
}

OrderButton.propTypes = {
  type: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.number.isRequired
}

function mapStateToProps(state){
  return {
    quote: state.quotes.quote,
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, { requestOrder })(OrderButton);
