import React from 'react'
import { Link } from 'react-router-dom'
import ComumRoutes from '../../ComumVars/ComumRoutes'

import "./orcamentoButton.css"

const OrcamentoButton = () => {
    return (
        <>
            <Link className="orcamentoBtn" to={ComumRoutes.Contatos}>Solicite um Orçamento</Link>
        </>
    )
}

export default OrcamentoButton;
