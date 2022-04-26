import React from 'react'
import './EmailBody.scss'
import { HiOutlineTrash } from 'react-icons/hi'
import { RiShareForwardFill } from 'react-icons/ri'
import { HiDotsHorizontal } from 'react-icons/hi'

const EmailBody = ({emailData}) => {

    return (
        <div className='email-body'>
            <div className="email-body__header">
                <div className="email-body__header--title">
                    <h2>{emailData.username}</h2>
                    <h4>{emailData.email}</h4>
                </div>
                <div className="email-body__icons">
                    <span><HiDotsHorizontal className='email-body__icons--icon'/></span>
                    <span><RiShareForwardFill className='email-body__icons--icon'/></span>
                    <span><HiOutlineTrash className='email-body__icons--icon'/></span>
                </div>
            </div>
            
            <div className="email-body__message">
                <h1>{emailData.emailSubject}</h1><br/>
                <p>{emailData.emailBody1}</p><br/>
                <p>{emailData.emailBody2}</p><br/>
                <p>{emailData.emailBody3}</p><br/>
                <p>{emailData.emailSignature}</p>
            </div>
        </div>
    )
}

export default EmailBody