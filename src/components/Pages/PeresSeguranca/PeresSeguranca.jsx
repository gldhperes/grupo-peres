import React from 'react'

import Main from "../../InPages/Main/Main.jsx"
import Presentation from '../../InPages/Presentation/Presentation.jsx'
import OutrosServicos from '../../InPages/OutrosServicos/OutrosServicos.jsx'
import AreasAtuantes from '../../Aeras Atuantes/AreasAtuantes'
import NossosServicos from '../../NossosServicos/NossosServicos.jsx'
import PeressegurancaServices from '../../../ComumVars/PeresSegurancaServices.js'

import EmpresasCard from '../../../ComumVars/EmpresasCard.js'

import "./peresseguranca.css"

const PeresSeguranca = () => {
  return (
    <>
      <section id="peresseguranca" className="img">

        <Main title="Peres Segurança" slogan={"Qualidade e Confiança"} />

        <Presentation
          title="Know-How na área"
          content={"O atendimento a diversos segmentos do mercado traz a oportunidade de criar soluções de melhores práticas, envolvendo treinamento e capacitação contínua de seus profissionais, tecnologia de última geração e um time estratégico que realiza estudos completos e customizados de maior nível de segurança patrimonial e melhor custo/benefício."}
        />

        <NossosServicos services={PeressegurancaServices}></NossosServicos>

        <AreasAtuantes />

        <OutrosServicos
          emp1={EmpresasCard[0].Genial}
          emp2={EmpresasCard[0].P3}
        />

      </section>

    </>

  )
}

export default PeresSeguranca;