import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'

import QuoteBoxWrapper from './quoteBox/QuoteBoxWrapper'
import PortfolioListWrapper from '../components/portfolio/PortfolioListWrapper'
import MiddleBar from '../components/middleBar/MiddleBar'
import MessagesListWrapper from '../components/messages/MessagesListWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Stock Exchange</h2>
        </div>
        <MiddleBar/>
        <MessagesListWrapper/>
        <QuoteBoxWrapper/>
        <PortfolioListWrapper/>




      </div>
    );
  }
}


export default App
