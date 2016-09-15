import React from 'react'
import './SearchForm.css'

class SearchForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      symbol: 'AAPL'
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onSubmit(e, symbol) {
    const filtered = this.filterSearch(symbol)
    e.preventDefault()
    this.props.onSubmit(filtered)
    this.setState({symbol: filtered})


  }

  onChange(e){
    this.setState({ [e.target.name]:e.target.value})
  }

  filterSearch(searchTerm){
    return ( searchTerm.toUpperCase()
      .split('')
      .filter(char=> char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
      .join(''))
  }

  render() {
    const { symbol } = this.state
    return (
      <div className="search-form">
        <form onSubmit={(e)=>this.onSubmit(e, symbol)}>
          <input
            placeholder="symbol"
            value={symbol}
            type="text"
            name="symbol"
            min={1}
            onChange={(e)=>this.onChange(e)}/>
          <button
            type="submit"
            disabled={!symbol}>get quote</button>
        </form>

      </div>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default SearchForm
