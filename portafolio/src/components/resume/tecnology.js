import React from 'react';
import '../../styles/tecnology.css';

function Tecnology({name, icon}){
    return <div className = 'j-tecnology-container'>
        <div className = 'j-icon-container'>
            {icon}
        </div>
        <p className = 'j-tecnology-name'>{name}</p>
    </div>
}

export default Tecnology;