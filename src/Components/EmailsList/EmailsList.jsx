import React from 'react'
import './EmailsList.scss'

const EmailsList = (props) => {

    const { userName, date, emailSubject, emailBody1, setEmailData } = props

    const passEmailData = () => {
        setEmailData(props)
    }

    return (
        <div className='emails-wrapper' onClick={passEmailData}>
            <div className='emails-wrapper__date'>
                <h4>{userName}</h4>
                <h4>{date}</h4>
            </div>
        <h3 className='bold-h3'>{emailSubject}</h3>
        <p>{emailBody1.substring(0, 75)}...</p>
        </div>
    )
}

export default EmailsList