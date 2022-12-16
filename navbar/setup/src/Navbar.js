import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle'>
            <FaBars></FaBars>
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((media) => {
            return (
              <li key={media.id}>
                <a href={media.url}>{media.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
