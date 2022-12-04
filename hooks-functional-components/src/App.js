import react from "react"
import Navbar from "./Navbar/Navbar"
import Message from "./Components/Message"
import Message1 from "./Components/Message-1"
import Products from "./Products/Products"
import DigitalClock from "./Digitalclock/Digitalclock"
import {BrowserRouter,Route,Switch} from "react-router-dom" 
class App extends react.Component {


  render() {
    return <>

      <BrowserRouter>
      
      <Navbar/>
      <Switch>
<Route path="/product" component={Products}/>
<Route path="/clock" component={DigitalClock}/>

      </Switch>



      </BrowserRouter>

      <Message/>
<hr/>
      <Message1/>

    </>
  }
}
export default App