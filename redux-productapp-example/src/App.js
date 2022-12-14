import Navbar from "./Navbar/Navbar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Product from "./Product/Product"
import Message from "./Message/Message"
import { Provider } from "react-redux"
import { store } from "./redux/store"
let App = () => {
  return <>
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/reduxproductEx" component={Product} />
          <Route path="/reduxmessageEx" component={Message} />
        </Switch>
      </BrowserRouter>
    </Provider>

  </>
}
export default App