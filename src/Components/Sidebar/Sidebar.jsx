import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__menu">
            <a href='#'>Inbox</a>
            <a href='#'>Trash</a>
        </div>
    </div>
  )
}

export default Sidebar