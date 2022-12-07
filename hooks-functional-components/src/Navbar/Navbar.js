import {Link} from "react-router-dom"

let Navbar = ()=> 
{

    return <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg "> <Link to ="/" className="navbar-brand"> Hooks Concept Example </Link>
    <div className = "ml-auto">
    <ul className="navbar-nav">
    <li className="nav-list"><Link className="nav-link" to="/message">Without-useState</Link></li>
    <li className="nav-list"><Link className="nav-link" to="/message1">With-useState</Link></li>
    <li className="nav-list"><Link className="nav-link" to="/product">Product</Link></li>
    <li className="nav-list"><Link className="nav-link" to="/clock">DigitalClock</Link></li>
    <li className="nav-list"><Link className="nav-link" to="/useRef">Hooks-useRef</Link></li>
    <li className="nav-list"><Link className="nav-link" to="/useReducer">Hooks-useReducer</Link></li>
    </ul>
    </div>
     </nav>
    </>

}
export default Navbar