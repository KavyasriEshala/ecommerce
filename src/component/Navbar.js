import React from 'react'
import { Link } from 'react-router-dom'
import {ImLocation } from "react-icons/im";
import {BsBrightnessHigh } from "react-icons/bs";
import {AiOutlineMenu } from "react-icons/ai";



function Navbar() {
  return (
    
    <div>

      <ul className=' d-flex nav'>
              <ImLocation className='icon'/>

      <li ><Link to = '/'>Home</Link></li>
      <li ><Link to = '/fivecolumns'>Fivecolumns</Link></li>
        <li ><Link to = '/listingpage'>Listingpage</Link></li>
        <li ><Link to = './templates'>Templates</Link></li>
        <li ><Link to = '/otherpages'>Othergpage</Link></li>
        <BsBrightnessHigh className='icon1'/>
        <AiOutlineMenu className='icon1'/>
      </ul>
    </div>
  )
}

export default Navbar
