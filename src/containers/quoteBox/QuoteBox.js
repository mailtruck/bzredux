import React from 'react';
import QuotePane from '../../components/quoteBox/QuotePane'
import Loading from '../../components/loading/Loading'
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

  onChange(e){
    this.setState({ [e.target.name]:e.target.value})
  }

  quantity(){
    return this.refs.quantity.value
  }
  render(){
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

  quoteBoxInner(symbol, name, askPrice, bidPrice, quantity){
    return (
      <span>
        <h1>{symbol}</h1>
        <p>{name}</p>
        <QuotePane
          type={BUY}
          price={askPrice}
          quantity={parseInt(quantity)}/>
        <QuotePane
          type={SELL}
          price={bidPrice}
          quantity={parseInt(quantity)}/>
        <input
          name="quantity"
          onChange={(e)=>this.onChange(e)}
          value={quantity}
          type="number"/>
      </span>
    )
  }


}

QuoteBox.propTypes = {
  quote: React.PropTypes.object.isRequired
}

export default QuoteBox;
