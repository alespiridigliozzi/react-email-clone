import React from 'react'
import './EmailBody.scss'

const EmailBody = (props) => {

    const { id, userName } = props

    return (
        <div className='email-body'>
            <h2>{userName}</h2>
        </div>
    )
}

export default EmailBody