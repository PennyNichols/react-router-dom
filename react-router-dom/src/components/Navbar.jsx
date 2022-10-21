import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h2>My Website</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Posts">Posts</Link></li>
        </ul>
    </div>
  )
}

export default Navbar