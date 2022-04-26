import React from 'react'
import './Sidebar.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'

const Sidebar = ({emailCount}) => {

  return (
    <div className='sidebar'>
        <div className="sidebar__menu">
            <button><span><HiOutlineMail/>Inbox</span> <span className='email-count'>{emailCount}</span></button><br/>
            <button><span><HiOutlineTrash/>Trash</span> <span className='email-count'>0</span></button>
        </div>
    </div>
  )
}

export default Sidebar