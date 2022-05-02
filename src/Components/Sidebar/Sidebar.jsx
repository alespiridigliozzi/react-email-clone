import React, { useContext } from 'react'
import { EmailsContext } from '../../Context/EmailsContext'
import './Sidebar.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'

const Sidebar = () => {

    const {emails, trash} = useContext(EmailsContext)

  return (
    <div className='sidebar'>
        <div className="sidebar__menu">
            <button className='sidebar__menu__btn'><span><HiOutlineMail/>Inbox</span><span className='email-count'>{emails.length}</span></button><br/>
            <button className='sidebar__menu__btn--trash'><span><HiOutlineTrash/>Trash</span><span className='email-count--trash'>{trash.length}</span></button>
        </div>
    </div>
  )
}

export default Sidebar