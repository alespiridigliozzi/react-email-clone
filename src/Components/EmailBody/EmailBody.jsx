import React from 'react'
import { useParams } from 'react-router-dom'
import './EmailBody.scss'
import { data } from '../../data/data'

const EmailBody = () => {

    const { id } = useParams()

    const emailDetails = data.filter(email => email.id == id)

    const emailBody = emailDetails[0]

    return (
        <div className='email-body'>
            <h3>{emailBody.date}</h3>
            <h2>{emailBody.userName}</h2>
            <h1>{emailBody.email_subject}</h1>
         </div>
    )
}

export default EmailBody