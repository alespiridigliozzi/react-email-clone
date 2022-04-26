import React, {useRef, useState} from 'react'
import './EmailFilters.scss'
import { BsSliders } from "react-icons/bs";
import { BiPlusCircle } from 'react-icons/bi'

const EmailFilters = (props) => {

    const {
        resetFilters, 
        filterByHigh, 
        filterByMedium, 
        filterByLow,
        filterNewest,
        filterOldest,
        filterByPersonal,
        filterByWork
    } = props

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const toggleFilters = () => setIsActive(!isActive);

    return (
        <div className='email-filters'>
            <button className='email-filters__compose'>Compose <BiPlusCircle /></button>

            <div className="filters-container">
                <button onClick={toggleFilters} className="filters-container__trigger">
                    <span>Filter By</span> <BsSliders />
                </button>
                <div ref={dropdownRef} className={`filters ${isActive ? 'active' : 'inactive'}`}>
                    <h3 className='bold-h3'>Importance</h3>
                    <input onClick={filterByHigh} type="checkbox" id='high' name='importance' value='high' />
                    <label htmlFor="high">High</label><br />
                    <input onClick={filterByMedium} type="checkbox" id='medium' name='importance' value='medium' />
                    <label htmlFor="medium">Medium</label><br />
                    <input onClick={filterByLow} type="checkbox" id='low' name='importance' value='low' />
                    <label htmlFor="low">Low</label><br/>

                    <h3 className='bold-h3'>Date</h3>
                    <input onClick={filterNewest} type="checkbox" id='newest' name='date' value='newest' />
                    <label htmlFor="newest">Newest</label><br/>
                    <input onClick={filterOldest} type="checkbox" id='oldest' name='date' value='oldest' />
                    <label htmlFor="oldest">Oldest</label><br />

                    <h3 className='bold-h3'>Type</h3>
                    <input onClick={filterByPersonal} type="checkbox" id='personal' name='type' value='personal' />
                    <label htmlFor="personal">Personal</label><br/>
                    <input onClick={filterByWork} type="checkbox" id='work' name='type' value='work' />
                    <label htmlFor="work">Work</label><br />

                    <div className="filters__buttons">
                        <button onClick={resetFilters}>Reset</button>
                        <button onClick={() => setIsActive(false)}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailFilters