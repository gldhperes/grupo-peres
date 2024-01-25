import React from "react";

import Main from "../../Main/Main.jsx";
import Apresentacao from "../../Apresentacao/Apresentacao.jsx";
import NossaMissao from "../../NossaMissao/NossaMissao.jsx";
import NossosServicos from "../../NossosServicos/NossosServicos.jsx";
import Numeros from "../../Numeros/Numeros.jsx";
import AreasAtuantes from "../../Aeras Atuantes/AreasAtuantes.jsx";
import Depoimentos from "../../Depoimentos/Depoimentos.jsx";
import Clientes from "../../Clientes/Clientes.jsx";

import HomepageServices from '../../../ComumVars/HomepageServices.js'

import './Homepage.css'

const Homepage = () => {

    return (
        <div id="homepage">

            <Main></Main>
            <Apresentacao></Apresentacao>
            <NossaMissao></NossaMissao>
            <NossosServicos services={HomepageServices}></NossosServicos>
            <Numeros></Numeros>
            <AreasAtuantes />
            <Depoimentos></Depoimentos>
            <Clientes></Clientes>

        </div>

    )
}

export default Homepage;