import React from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import './EmailsContainer.scss'

const EmailsContainer = () => {

    return (
        <div className='emails-container'>
            <EmailsList />
            <EmailBody />
        </div>
    )
}

export default EmailsContainer