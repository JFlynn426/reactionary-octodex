import React, { Component } from 'react'

import './App.css'
import Header from './header'
import Footer from './Footer'
import Cats from './Cats'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cats />
        <Footer />
      </div>
    )
  }
}

export default App
