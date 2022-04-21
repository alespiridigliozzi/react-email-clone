import React from 'react'
import './EmailsList.scss'

const EmailsList = (props) => {

    const { id, 
        username, 
        date, 
        email, 
        emailSubject, 
        emailType, 
        importance, 
        emailBody1, 
        emailBody2, 
        emailBody3, 
        emailSignature, 
        setEmailData 
    } = props

    const passEmailData = () => {
        setEmailData(props)
    }

    return (
        <div className='emails-wrapper' onClick={passEmailData}>
            <div className='emails-wrapper__date'>
                <h4>{username}</h4>
                <h4>{date}</h4>
            </div>
        <h3 className='bold-h3'>{emailSubject}</h3>
        <p>{emailBody1.substring(0, 75)}...</p>
        </div>
    )
}

export default EmailsList