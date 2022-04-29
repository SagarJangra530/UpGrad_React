import React   from 'react'
import '../App.css'
import PropTypes from 'prop-types'




export default function Navbar(props) {
  
  
 

  return (
    <>
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">{props.name}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.random}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.google.co.in/">Google</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href='/'>About Us</a>
    </li>
  </ul>
  
  </>
  )
}



Navbar.propTypes = {
   name : PropTypes.string,
   random : PropTypes.string
}



