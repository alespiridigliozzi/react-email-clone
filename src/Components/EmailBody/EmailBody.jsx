import React from 'react'
import './EmailBody.scss'

const EmailBody = ({emailData}) => {

    return (
        <div className='email-body'>
            <h2>{emailData.userName}</h2>
            <p>{emailData.date}</p>
            <h3>{emailData.emailSubject}</h3>
            <p>{emailData.emailBody1}</p>
        </div>
    )
}

export default EmailBody