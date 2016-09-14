import React, { Component } from 'react'
import QuoteBoxWrapper from '../quoteBox/QuoteBoxWrapper'
import PortfolioListWrapper from '../portfolio/PortfolioListWrapper'
import MiddleBar from '../middleBar/MiddleBar'
import MessagesListWrapper from '../messages/MessagesListWrapper'
import './App.css'

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
