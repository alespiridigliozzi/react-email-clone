import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { EmailsContext } from '../../Context/EmailsContext'
import './EmailsList.scss'

const EmailsList = (props) => {

    const {emailData, setEmailData} = useContext(EmailsContext)
    const [isRead, setIsRead] = useState(false)

    const { 
        id, 
        username, 
        date, 
        emailAddress, 
        emailSubject, 
        emailType, 
        importance, 
        emailBody1, 
        emailBody2, 
        emailBody3, 
        emailSignature, 
    } = props

    const passEmailData = () => {
        setEmailData([props])
        setIsRead(!isRead)
    }

    return (
        <div className={`emails-wrapper ${isRead ? "read" : ""}`} onClick={passEmailData}>
            <div className='emails-wrapper__date'>
                <h4>{username}</h4>
                <h4>{date}</h4>
            </div>
        <h3 className={isRead ? "read-text" : "bold-h3"}>{emailSubject}</h3>
        <p>{emailBody1.substring(0, 75)}...</p>
        </div>
    )
}

export default EmailsList