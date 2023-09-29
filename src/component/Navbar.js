import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
      <li ><Link to = '/home'>Home</Link></li>
      <li ><Link to = '/fivecolumns'>Fivecolumns</Link></li>

        <li ><Link to = '/listingpage'>Listingpage</Link></li>
        <li ><Link to = '/templates'>Templates</Link></li>
        <li ><Link to = '/otherpages'>Othergpage</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
