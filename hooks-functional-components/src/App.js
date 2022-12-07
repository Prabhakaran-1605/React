import react from "react"
import Navbar from "./Navbar/Navbar"
import Message from "./Components/Message"
import Message1 from "./Components/Message-1"
import Products from "./Products/Products"
import DigitalClock from "./Digitalclock/Digitalclock"
import ImageEx from "./Components/ImageEx"
import MessageEx from "./Components/MessageEx"
import { BrowserRouter, Route, Switch } from "react-router-dom"
class App extends react.Component {


  render() {
    return <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/message" component={Message} />
        <Route path="/message1" component={Message1} />
          <Route path="/product" component={Products} />
          <Route path="/clock" component={DigitalClock} />
          <Route path="/useRef" component={ImageEx} />
          <Route path="/useReducer" component={MessageEx} />
        </Switch>
      </BrowserRouter>
    </>
  }
}
export default App