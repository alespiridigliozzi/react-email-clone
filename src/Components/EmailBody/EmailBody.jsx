import React from 'react'
import './EmailBody.scss'

const EmailBody = ({emailData}) => {

    return (
        <div className='email-body'>
            <div className="email-body__header">
                <h2>{emailData.username}</h2>
                <h4>{emailData.email}</h4>
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