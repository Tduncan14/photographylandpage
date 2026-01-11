import React from 'react'
import './iconsgallery.css';

const Iconsgallery = ({ icon, title, para }) => {
    return (
        <div className="iconsG">
            <img src={icon} />

            <h1>{title}</h1>


            <p>{para}</p>

        </div>
    )
}

export default Iconsgallery
