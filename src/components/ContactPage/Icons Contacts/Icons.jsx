import React from 'react'
import './icons.css'

const Icons = ({ icon, detail }) => {
    return (
        <div className="icons">

            <div id="icon_Name">
                {icon}
            </div>

            <div id="detail">
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default Icons