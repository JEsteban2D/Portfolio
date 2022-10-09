import React from 'react'
import './Me.css'

export const Me = () => {
  return (
    <div>
      <img src="" alt="michi" />
      <div className='container-section-me'>
        <div><label className='text-me'>Hi, my name is</label></div>
        <div><label className='tittle-me'>Juan Esteban</label></div>
        <div><label className='tittle-me'>I build things for the web.</label></div>
        <div><label className='text-me'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</label></div>
        <div><button>check my course</button></div>
      </div>
    </div>
  )
}
