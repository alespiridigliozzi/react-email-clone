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
            userName={email.userName} 
            date={email.date} 
            emailSubject={email.email_subject}  
            emailBody1={email.email_body1}
            setEmailData={setEmailData}
            />
        )
    })

    return (
        <div className='emails-container'>
            <EmailFilters />
            {emailsList}
            <EmailBody emailData={emailData}/> 
        </div>
    )
}

export default EmailsContainer