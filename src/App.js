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
        <Cat
          address="https://octodex.github.com/images/dinotocat.png"
          image-number="#132"
          name="Dinotocat"
          author="https://github.com/kimestoesta.png"
        />
        <Footer />
      </div>
    )
  }
}

export default App
