import User from "./User/User"
import { Link, BrowserRouter, Route, Switch } from "react-router-dom"
import {store} from "./Redux/store"
import {Provider} from "react-redux"
let App = () => {

  return <>
  <Provider store={store}>        {/*  we are passing store as a props to all the components */}
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark"> <Link to="/" className="navbar-brand"> Redux-Thunk Example</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list"><Link className="nav-link" to="/thunkandlogger">Thunk & Logger</Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/thunkandlogger" component={User}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  </>
}
export default App