import React from 'react'
import './Sidebar.scss'
import { data } from '../../data/data'

const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebar__menu">
            <a href='#'>Inbox {data.length} </a>
            <a href='#'>Trash</a>
        </div>
    </div>
  )
}

export default Sidebar