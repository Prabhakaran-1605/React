import Navbar from "./Navbar/Navbar"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Product from "./Product/Product"
let App = ()=>

{  
return <>

<BrowserRouter>
<Navbar/>
<Switch>
<Route path="/reduxproductEx" component={Product}/>
</Switch>
</BrowserRouter> 
  </>
}
export default App