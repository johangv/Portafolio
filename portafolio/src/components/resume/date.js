import React from 'react';
import {MdDateRange} from 'react-icons/md';
import '../../styles/date.css';

function Date({range, name, title}){
    return <div className = "j-date-container">
        <div className = "j-icon-range-container">
            <MdDateRange className = "j-date-icon"/>
            <p className = "j-range-text">{range}</p>
        </div>
        <h4 className = "j-name-text">{name}</h4>
        <p className = "j-title-text">{title}</p>
    </div>
}

export default Date;