import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ img, serviceName }) => {

    return (
        <div className="serviceCard">

            <div
                className="serviceImg img"
                style={{ backgroundImage: `url(${img})` }}
            >
            </div>


            <p className="serviceName">{serviceName}</p>

        </div>
    )
}

export default ServiceCard