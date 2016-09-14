import React from 'react'
import { connect } from 'react-redux'
import QuoteBox from './QuoteBox'
import { getQuote, setQuote, setLoading } from '../../actions/quoteActions'

class QuoteBoxWrapper extends React.Component{

  componentDidMount(){
    this.props.getQuote('AAPL')
  }

  render(){
    const { quote } = this.props
    const { isLoading } = this.props
    return (
      <QuoteBox
        quote={quote}
        isLoading={isLoading}/>
    )
  }
}

QuoteBoxWrapper.propTypes = {
  quote: React.PropTypes.object.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  getQuote: React.PropTypes.func.isRequired,
  setQuote: React.PropTypes.func.isRequired,
  setLoading: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    quote: state.quotes.quote,
    isLoading: state.quotes.loading
  }
}

export default connect(mapStateToProps, { getQuote, setQuote, setLoading })(QuoteBoxWrapper);
