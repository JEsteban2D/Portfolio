import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='container__principal--navbar'>
      <div className='container__icon--navbar'>
      <a href="/"><h1 className='tittle__navbar'>JEsteban2D</h1></a>
      </div>
      <div className='container__links--navbar'>
        <ul className='ul__links--navbar'>
          <li><a href="/"><label htmlFor="" className='li__links--navbar'>About</label></a></li>
          <li><a href="/"><label htmlFor="" className='li__links--navbar'>Experience</label></a></li>
          <li><a href="/"><label htmlFor="" className='li__links--navbar'>work</label></a></li>
          <li><a href="/"><label htmlFor="" className='li__links--navbar'>Contact</label></a></li>
          <li className='li__links--navbar'><button>Resume</button></li>
        </ul>
      </div>
    </div>
  )
}
