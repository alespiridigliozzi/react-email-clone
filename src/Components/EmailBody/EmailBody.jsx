import React from 'react'
import { useParams } from 'react-router-dom'
import './EmailBody.scss'

const EmailBody = () => {

    const { id } = useParams()

    return (
        <div className='email-body'>EmailBody</div>
    )
}

export default EmailBody