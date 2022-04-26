import React, { useEffect, useState } from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'
import EmailFilters from '../../Components/EmailFilters/EmailFilters'
import { data } from '../../data/data'

const EmailsContainer = () => {

    const [emails, setEmails] = useState([])
    const [emailData, setEmailData] = useState([])
    
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

    useEffect(() => {
        setEmails(emailsList)
        setEmailData(emailsList[0].props)
    }, [])


    const filterByHigh = () => {
        const filteredEmails = emailsList.filter(email => {
            let checkedEmail = true;
            checkedEmail = email.props.emailType == 'personal'
            return checkedEmail;
        }) 
        setEmails(filteredEmails)
    }

    const filterByPersonal = () => {
        const persEm = emailsList.filter(email => {
            let personalEm = true;
            personalEm = email.props.importance == 'low'
            return personalEm
        })
        setEmails(persEm)
    }


    return (
        <div className='emails-container'>
            <div className="emails-container__left">
                <EmailFilters filterByHigh={filterByHigh} filterByPersonal={filterByPersonal}/>
                {emails.length > 0 && emails}
            </div>

            {emailData && <EmailBody emailData={emailData} /> }
        </div>
    )
}

export default EmailsContainer