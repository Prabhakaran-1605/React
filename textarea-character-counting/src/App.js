import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Message from './Component/Message'
class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
        <Message/>
      </div>
    )
  }
}

export default App