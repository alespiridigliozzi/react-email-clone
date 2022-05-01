import React, { useContext } from 'react'
import { EmailsContext } from '../../Context/EmailsContext'
import './EmailBody.scss'
import { HiOutlineTrash } from 'react-icons/hi'
import { RiShareForwardFill } from 'react-icons/ri'
import { HiDotsHorizontal } from 'react-icons/hi'

const EmailBody = () => {

    const {emails, setEmails, emailData, setEmailData, trash, setTrash} = useContext(EmailsContext)

    console.log(`email data:` + emailData)

    const deleteEmail = (id) => {
        const delEm = emails.filter(email => email.id !== id)
        const propsObj = emailData.filter(item => item.id !== id)
        setEmails(delEm)
        setEmailData(propsObj)
        console.log(propsObj)
    }

    return (
        emailData.length &&  <div className='email-body' id={emailData[0].id}>
        <div className="email-body__header">
            <div className="email-body__header--title">
                <h2>{emailData[0].username}</h2>
                <h4>{emailData[0].emailAddress}</h4>
            </div>
            <div className="email-body__icons">
                <span><HiDotsHorizontal className='email-body__icons--icon'/></span>
                <span><RiShareForwardFill className='email-body__icons--icon'/></span>
                <span><HiOutlineTrash onClick={() => deleteEmail(emailData[0].id)} className='email-body__icons--icon'/></span>
            </div>
        </div>
        
        <div className="email-body__message">
            <h1>{emailData[0].emailSubject}</h1><br/>
            <p>{emailData[0].emailBody1}</p><br/>
            <p>{emailData[0].emailBody2}</p><br/>
            <p>{emailData[0].emailBody3}</p><br/>
            <p>{emailData[0].emailSignature}</p>
        </div>
    </div>
    )
}

export default EmailBody