import React, { Component } from 'react'
import { Link } from "react-router-dom"
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'> <Link to="/" className='navbar-brand'> Contact-Application</Link>
        <div className='ml-auto'>
          <ul className="navbar-nav">
            <li className='nav-list'><Link className="nav-link" to="/contactapp"> Contacts </Link> </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar