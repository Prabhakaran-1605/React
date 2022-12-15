import React, { Component } from 'react'
import Contacts from './Components/Contacts'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Route,Switch} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/contactapp" component={Contacts}/>
        </Switch>
        <Navbar/>
      </BrowserRouter>
      </div>
    )
  }
}

export default App