import React from 'react'
import OrcamentoButton from '../BotaoOrcamento/OrcamentoButton'

import "./Main.css"

const Main = () => {
   
    return (
        <section id="main" className="main img">

            <div id="intro">
                <p>
                    Evidentemente, a competitividade nas transações comerciais
                    obstaculiza a apreciação da importância dos
                    procedimentos normalmente adotados.
                </p>

                <p>
                    Todas estas questões, devidamente ponderadas,
                    levantam dúvidas sobre se a complexidade dos estudos
                    efetuados assume importantes posições no estabelecimento
                    dos paradigmas corporativos.
                </p>

                <OrcamentoButton />
            </div>

        </section>
    )
}

export default Main