import react from "react"
import Navbar from "./navbar/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import User from "./Components/User"
import User_1 from "./Components/User_1"
import DigitalClock from "./Components/DigitalClock"
import Salary from "./Event Binding/Salary"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends react.Component {

  render() {
    return <>
      <h1>App Comp</h1>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Service" component={Service}/>
          <Route path="/User" component={User}/>
          <Route path="/User_1" component={User_1}/>
          <Route path="/DigitalClock" component={DigitalClock}/>
          <Route path="/Salary" component={Salary}/>
        </Switch>

      </Router>
    </>
  }
}
export default App