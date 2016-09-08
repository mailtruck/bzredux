import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'

import { getQuote } from '../actions/quoteActions'

class App extends Component {
  constructor(props){
    super(props)
    this.getQuote = this.getQuote.bind(this)
  }
  getQuote(symbol){
    this.props.getQuote(symbol)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <button onClick={()=>this.getQuote('AAPL')}>get quote</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    quote: state.quotes
  }
}

export default connect(mapStateToProps, { getQuote })(App)
