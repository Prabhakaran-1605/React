import { Component } from "react"
import { Link } from "react-router-dom"
class Navbar extends Component {

    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg "> <Link to="/" className="navbar-brand"> Redux Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"> <Link to="/reduxEX" className="nav-link">Redux-Message</Link> </li>
                    </ul>
                </div>
            </nav>
        </>

    }
}
export default Navbar

