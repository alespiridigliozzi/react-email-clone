import React, { useContext } from 'react'
import { EmailsContext } from '../../Context/EmailsContext'
import './Sidebar.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'

const Sidebar = () => {

    const {emails, emailData, trash} = useContext(EmailsContext)

    console.log("trash:" + trash)

  return (
    <div className='sidebar'>
        <div className="sidebar__menu">
            <button><span><HiOutlineMail/>Inbox</span><span className='email-count'>{emails.length}</span></button><br/>
            <button><span><HiOutlineTrash/>Trash</span><span className='email-count'>{trash.length}</span></button>
        </div>
    </div>
  )
}

export default Sidebar