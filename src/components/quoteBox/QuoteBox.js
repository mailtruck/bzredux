import React from 'react';
import QuotePane from './QuotePane'
import Loading from '../loading/Loading'
import { BUY, SELL } from '../../constants'
import './QuoteBox.css'


class QuoteBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quantity: 100
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (!isNaN(e.target.value)){
      this.setState({[e.target.name]:e.target.value})
    }
  }

  quantity() {
    return this.refs.quantity.value
  }

  render() {
    const { symbol, name, bidPrice, askPrice } = this.props.quote
    const { quantity } = this.state
    const { isLoading } = this.props
    return (
      <div className="quote-box">
          { isLoading ? <Loading/> :
            this.quoteBoxInner(symbol, name, askPrice, bidPrice, quantity)}

      </div>

    )
  }

  quoteBoxInner(symbol, name, askPrice, bidPrice, quantity) {
    const quant = parseInt(quantity, 10)
    return (
      <span>
        <h1>{symbol}</h1>
        <p>{name}</p>
        <QuotePane
          type={BUY}
          price={askPrice}
          quantity={quant}/>
        <QuotePane
          type={SELL}
          price={bidPrice}
          quantity={quant}/>
        <input
          name="quantity"
          placeholder="quantity"
          onChange={(e)=>this.onChange(e)}
          value={quantity}
          type="text"
          />
      </span>
    )
  }


}

QuoteBox.propTypes = {
  quote: React.PropTypes.object.isRequired
}

export default QuoteBox;
