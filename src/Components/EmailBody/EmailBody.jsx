import React from 'react'
import './EmailBody.scss'

const EmailBody = ({emailData}) => {

    return (
        <div className='email-body'>
            <h2>{emailData.username}</h2>
            <p>{emailData.date}</p>
            <h2>{emailData.email}</h2>
            <h3>{emailData.emailSubject}</h3>
            <p>{emailData.emailBody1}</p><br/>
            <p>{emailData.emailBody2}</p><br/>
            <p>{emailData.emailBody3}</p>
            <h1>{emailData.emailSignature}</h1>
        </div>
    )
}

export default EmailBody