import React from 'react'
import ServiceCard from './ServiceCard/ServiceCard'

import './NossosServicos.css'

const NossosServicos = ({ services }) => {
    return (
        <section id="nossosServicos">
            <h2 className='mainTitle'>conheça nossos serviços</h2>

            <div id="services">

                { services.map((item, index) => (

                    <ServiceCard key={index} img={item.img} serviceName={item.title}></ServiceCard>

                ))}

            </div>

        </section>
    )
}

export default NossosServicos
