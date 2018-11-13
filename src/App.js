import React, { Component } from 'react'

import './App.css'
import Header from './header'
import Octos from './Octos'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Octos />
        <Footer />
      </div>
    )
  }
}

export default App
