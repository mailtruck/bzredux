import React from 'react'
import { connect } from 'react-redux'

import { sendOrder } from '../actions/orderActions'
import Button from './Button'

class OrderButton extends React.Component{

  clickHandler(type, quote, quantity, handler){
        return () =>
        handler({
          type,
          ...quote,
          quantity
        })

  }
  render(){
    const { type, quote, quantity, sendOrder} = this.props;
    return (
      <Button
        text={type}
        clickHandler={this.clickHandler(type, quote, quantity, sendOrder)}
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
    quote: state.quotes
  }
}

export default connect(mapStateToProps, { sendOrder })(OrderButton);
