import React from 'react'
import './NavBar.scss'
export default function NavBar() {
  return (
    <>
    <nav>
      <div className="navbar">
        <img src="logo.png" alt="" />
        <ul className='navlinks'>
          <li>
            <a href="/" className='navlink'>Home</a>
          </li>
          <li>
            <a href="/" className='navlink'>About</a>
          </li>
          <li>
            <a href="/" className='navlink'>Tours</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}
