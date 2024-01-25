import React from 'react'

import Areas_Atuantes from '../../ComumVars/AreasAtuantesList.js'

import './AreasAtuantes.css'

const AreasAtuantes = () => {
    return (
        <div className="areas-atuantes">

            <h3 className='mainTitle'>Áreas Atuantes</h3>

            <div className="atuacao-container">

                {Areas_Atuantes.map((item, index) => (

                    <div key={index} className="atuacao-card">

                        {item.icon}

                        <p>{item.title}</p>
                        
                    </div>

                ))}

            </div>
        </div>
    )
}

export default AreasAtuantes