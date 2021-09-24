import React from 'react'
import { Link } from 'react-router-dom'
import favicon from '../assets/favicon.ico'

const Navbar = () => {
  return (
    <div className='navbar navbar-nav'>
      <div className="container">
        <div className='navbar-brand'>

          <Link className="logo" to='/'><img src={favicon} alt='globe' width='40px'></img></Link>
        </div>
        <div className='navbar-nav'>
          <div className=' m-2'>
            <Link className="navLink" to='/'>Home</Link>
          </div>
          <div className='m-2'>
            <Link className="navLink" to='/destinations'>Search Destinations</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar