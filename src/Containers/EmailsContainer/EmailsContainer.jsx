import React from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'
import EmailFilters from '../../Components/EmailFilters/EmailFilters'
import { data } from '../../data/data'

const EmailsContainer = () => {

    const emailsList = data.map(email => {
        return (
            <EmailsList 
            key={email.id} 
            id={email.id} 
            userName={email.userName} 
            data={email.date} 
            emailSubject={email.email_subject}  
            emailBody1={email.email_body1}
            />
        )
    })

    return (
            <div className='emails-container'>
                <EmailFilters />
                {emailsList}
                <EmailBody id={data[0].id} userName={data[1].userName}/>
            </div>
    )
}

export default EmailsContainer