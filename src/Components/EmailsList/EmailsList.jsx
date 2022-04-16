import React from 'react'
import { data } from '../../data/data'
import './EmailsList.scss'

const EmailsList = () => {

    const emailsList = data.map(email => {
        return (
            <div className='emails-wrapper' key={email.id}>
                <div className='emails-wrapper__date'>
                    <h4>{email.userName}</h4>
                    <p>{email.date}</p>
                </div>
                <h2>{email.email_subject}</h2>
                <p>{email.email_body1.substring(0, 75)}...</p>
            </div>
        )
    })

    return (
        <div>{emailsList}</div>
    )
}

export default EmailsList