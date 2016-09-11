import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'

import QuoteBoxWrapper from './quoteBox/QuoteBoxWrapper'

import Loading from '../components/loading/Loading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Stock Exchange</h2>
        </div>

        <QuoteBoxWrapper/>




      </div>
    );
  }
}


export default App
