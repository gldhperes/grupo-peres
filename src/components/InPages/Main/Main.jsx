import React from 'react'
import OrcamentoButton from '../../BotaoOrcamento/OrcamentoButton'

import "./Main.css"


const Main = ({ title, slogan, main_img }) => {
    const img_style = {
        backgroundImage: main_img,
    }

    return (
        <div className="inMain" style={img_style}>

            <div className="title">
                <h1 className='mainTitle'>{title}</h1>
                <p>{slogan}</p>
            </div>

            <OrcamentoButton />
        </div>
    )

}

export default Main