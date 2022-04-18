import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data/data'
import './EmailsList.scss'

const EmailsList = () => {

    const emailsList = data.map(email => {
        return (
            <Link to={`/${email.id}`} key={email.id}>
                <div className='emails-wrapper'>
                    <div className='emails-wrapper__date'>
                        <h4>{email.userName}</h4>
                        <h4>{email.date}</h4>
                    </div>
                    <h3 className='bold-h3'>{email.email_subject}</h3>
                    <p>{email.email_body1.substring(0, 75)}...</p>
                </div>
            </Link>
        )
    })

    return (
        <div>{emailsList}</div>
    )
}

export default EmailsList