import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h2> My webpage</h2>
      <ul>
        <li> <NavLink to="/home" >Home</NavLink> </li>
        <li> <NavLink to="/about"> About</NavLink></li>
        <li> <NavLink to="/contact">Contact</NavLink> </li>
        <li> <NavLink to="/posts">Posts</NavLink> </li>
      </ul>

    </div>
  )
}

export default Navbar