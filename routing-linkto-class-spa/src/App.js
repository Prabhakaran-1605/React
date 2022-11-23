import react from "react"
import Navbar from "./navbar/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
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
        </Switch>

      </Router>
    </>
  }
}
export default App