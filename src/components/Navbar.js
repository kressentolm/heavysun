import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="siteLogo">
            <h1>Chris Blackmon</h1>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          <span>About</span>
        </Link>
        <Link className="navbar-item" to="/work">
          <span>Work</span>
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
