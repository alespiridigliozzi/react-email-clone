import React, {useState} from 'react'
import EmailsList from '../../Components/EmailsList/EmailsList'
import EmailBody from '../../Components/EmailBody/EmailBody'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './EmailsContainer.scss'

const EmailsContainer = () => {

    return (
        <Router>
            <div className='emails-container'>
                <Routes>
                    <Route path='/' element={<EmailsList />} />
                    <Route path='/:id' element={<EmailBody />} />
                </Routes>
            </div>
        </Router>
    )
}

export default EmailsContainer