import React, { useState } from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'
import EmailFilters from '../../Components/EmailFilters/EmailFilters'
import { data } from '../../data/data'

const EmailsContainer = () => {

    const [emailData, setEmailData] = useState("")

    const emailsList = data.map(email => {
        return (
            <EmailsList 
            key={email.id} 
            id={email.id} 
            username={email.userName} 
            email={email.email}
            date={email.date} 
            emailType={email.email_type}
            emailSubject={email.email_subject}  
            emailBody1={email.email_body1}
            emailBody2={email.email_body2}
            emailBody3={email.email_body3}
            emailSignature={email.email_signature}
            importance={email.importance}
            setEmailData={setEmailData}
            />
        )
    })

    return (
        <div className='emails-container'>
            <div className="emails-container__left">
                <EmailFilters />
                {emailsList}
            </div>
            <EmailBody emailData={emailData}/> 
        </div>
    )
}

export default EmailsContainer