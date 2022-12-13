import Navbar from "./Navbar/Navbar"
import Message from "./Message/Message"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from "./redux-files/store"
let App = ()=>

{  
return <>
<Provider store = {store}>                    {/* store as a property to my application */}          
<BrowserRouter>
<Navbar/>
<Switch>
<Route path="/reduxEX" component={Message}/>
</Switch>
</BrowserRouter>
</Provider>
  </>
}
export default App