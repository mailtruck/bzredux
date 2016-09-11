import React from 'react'
import { connect } from 'react-redux'
import QuoteBox from './QuoteBox'
import Loading from '../../components/loading/Loading'
import { getQuote, setQuote } from '../../actions/quoteActions'

class QuoteBoxWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount(){
    this.props.getQuote('AAPL').then(()=> {
      this.setState({isLoading: false})
    })
  }

  render(){
    const { quote } = this.props
    const { isLoading } = this.state
    return (
      <QuoteBox
        quote={quote}
        isLoading={isLoading}/>
    )
  }
}

QuoteBoxWrapper.propTypes = {
  quote: React.PropTypes.object.isRequired,
  getQuote: React.PropTypes.func.isRequired,
  setQuote: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    quote: state.quotes
  }
}

export default connect(mapStateToProps, { getQuote, setQuote })(QuoteBoxWrapper);
