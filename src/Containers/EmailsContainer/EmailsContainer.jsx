import React, { useEffect, useState, useContext } from 'react'
import { EmailsContext } from '../../Context/EmailsContext'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'
import EmailFilters from '../../Components/EmailFilters/EmailFilters'

const EmailsContainer = () => {

  const {emails, emailData, setEmailData} = useContext(EmailsContext)
  
  const [highImportance, setHighImportance] = useState(false)
  const [mediumImportance, setMediumImportance] = useState(false)
  const [lowImportance, setLowImportance] = useState(false)
  const [newest, setNewest] = useState(false)
  const [oldest, setOldest] = useState(false)
  const [typePersonal, setTypePersonal] = useState(false)
  const [typeWork, setTypeWork] = useState(false)

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

  const emailsResults = emails.map(email => {
    return (
      <EmailsList 
      key={email.id} 
      id={email.id}
      username={email.userName} 
      emailAddress={email.email_address}
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
  }).filter(email => {
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
    if(newest) {
      results = emails.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
    }
    if(oldest) {
      results = emails.sort((a, b) => {return new Date(a.date) - new Date(b.date)})
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
    <>
      <div className='emails-container'>
        <div className='emails-container__left'>
          <div className="emails-container__filters">
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
          </div>
          <div className="emails-container__results">
            {emailsResults}
          </div>
        </div>
      </div>

      <div className={`emails-container${emailData.length > 0 ? "__email-body" : "__empty-body"}`}>
        {emailData.length > 0 ? <EmailBody /> : <h4>Please select an email to read.</h4> }
      </div>
    </>
  )
}

export default EmailsContainer