import React, { Component } from 'react'
import {Link} from "react-router-dom" 
class Navbar extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="/" className="navbar-brand">Routing Concept</Link>
      <div className = "ml-auto">
      <ul className="navbar-nav">
       <li className="Nav-list"> <Link to="/Home" className="navbar-brand nav-link"> HOME</Link></li>
       <li className="Nav-list"><Link to="/About" className="navbar-brand nav-link"> About</Link></li>
       <li className="Nav-list"><Link to="/Service" className="navbar-brand nav-link"> Service</Link></li>
       </ul>
       </div>
    </nav>
      
    
  }
}

export default Navbar