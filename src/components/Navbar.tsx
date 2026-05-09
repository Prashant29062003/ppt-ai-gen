import { Link } from '@tanstack/react-router'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className="flex space-x-4 p-4 bg-gray-200">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
