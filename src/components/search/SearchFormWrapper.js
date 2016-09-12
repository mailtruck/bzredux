import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../../actions/quoteActions'
import SearchForm from './SearchForm'

class SearchFormWrapper extends React.Component {
  render() {
    const { getQuote } = this.props
    return <SearchForm onSubmit={getQuote}/>
  }
}

SearchFormWrapper.propTypes = {
  getQuote: React.PropTypes.func.isRequired
}

export default connect(null, { getQuote })(SearchFormWrapper)
