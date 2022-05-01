import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { data } from "../data/data";

export const EmailsContext = createContext();

export const EmailsProvider = ({ children }) => {

    const [emails, setEmails] = useState([])
    const [emailData, setEmailData] = useState([])
    const [trash, setTrash] = useState([])

    useEffect(() => {
        setEmails(data)
    }, [])

    return (
        <EmailsContext.Provider value={{emails, setEmails, emailData, setEmailData, trash, setTrash}}>
            {children}
        </EmailsContext.Provider>
    )
}