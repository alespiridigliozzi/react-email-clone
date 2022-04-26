import React from 'react'
import './Navbar.scss'
import { SiMinutemailer } from 'react-icons/si'
import { RiAccountCircleFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h3><SiMinutemailer /> Emails.io</h3>
        <h4><RiAccountCircleFill /> Account</h4>
    </nav>
  )
}

export default Navbar