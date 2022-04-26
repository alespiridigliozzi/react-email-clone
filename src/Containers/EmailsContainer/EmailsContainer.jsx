import React, { useEffect, useState } from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'
import EmailFilters from '../../Components/EmailFilters/EmailFilters'
import { data } from '../../data/data'

const EmailsContainer = () => {

    const [emails, setEmails] = useState([])
    const [emailData, setEmailData] = useState([])
    const [highImportance, setHighImportance] = useState(false)
    const [mediumImportance, setMediumImportance] = useState(false)
    const [lowImportance, setLowImportance] = useState(false)
    const [newest, setNewest] = useState(false)
    const [oldest, setOldest] = useState(false)
    const [typePersonal, setTypePersonal] = useState(false)
    const [typeWork, setTypeWork] = useState(false)
    
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
        setHighImportance(!highImportance)
    }

    const filterByMedium = () => {
        setMediumImportance(!mediumImportance)
    }

    const filterByLow = () => {
        setLowImportance(!lowImportance)
    }

    const filterNewest = () => {
        setNewest(!newest)
    }

    const filterOldest = () => {
        setOldest(!oldest)
    }

    const filterByPersonal = () => {
        setTypePersonal(!typePersonal)
    }

    const filterByWork = () => {
        setTypeWork(!typeWork)
    }

    const emailsResults = emailsList.filter(email => {
        let results = true;

        if(highImportance) {
            results = email.props.importance == 'high'
        }
        if(mediumImportance) {
            results = email.props.importance == 'medium'
        }
        if(lowImportance) {
            results = email.props.importance == 'low'
        }
        if(typePersonal) {
            results = email.props.emailType == 'personal'
        }
        if(typeWork) {
            results = email.props.emailType == 'work'
        }
        return results;
    })

    const resetFilters = () => {
        setHighImportance(false)
        setMediumImportance(false)
        setLowImportance(false)
        setNewest(false)
        setOldest(false)
        setTypePersonal(false)
        setTypeWork(false)
    }


    return (
        <div className='emails-container'>
            <div className="emails-container__left">

                <EmailFilters 
                    resetFilters={resetFilters} 
                    filterByHigh={filterByHigh} 
                    filterByMedium={filterByMedium}
                    filterByLow={filterByLow}
                    filterNewest={filterNewest}
                    filterOldest={filterOldest}
                    filterByPersonal={filterByPersonal}
                    filterByWork={filterByWork}
                />

                {emails.length > 0 && emailsResults}
            </div>

            {emailData && <EmailBody emailData={emailData} /> }
        </div>
    )
}

export default EmailsContainer