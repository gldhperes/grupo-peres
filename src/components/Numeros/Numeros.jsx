import React from 'react'
import AreasAtuantes from '../Aeras Atuantes/AreasAtuantes'

import "./Numeros.css"

const Numeros = () => {
  return (
    <section id="numeros">


      <div className="nossosNumeros_container">

        <div className="numerosTitle">
          <h3 className='mainTitle'>Nossos Números</h3>
        </div>

        <div className="nossosNumeros_content ">

          <NumCard
            icon={<ion-icon name="accessibility-outline"></ion-icon>}
            num="456"
            title="algo"
          />

          <NumCard
            icon={<ion-icon name="accessibility-outline"></ion-icon>}
            num="456"
            title="algo"
          />

          <NumCard
            icon={<ion-icon name="accessibility-outline"></ion-icon>}
            num="456"
            title="algo"
          />

          <NumCard
            icon={<ion-icon name="accessibility-outline"></ion-icon>}
            num="456"
            title="algo"
          />
          
        </div>

      </div>

    </section>
  )
}

const NumCard = ({ icon, num, title }) => {

  return (
    <div className="num">

      <div className="numContent">
        {icon}
        <p> {num} </p>
      </div>

      <h3>{title}</h3>
    </div>
  )
}

export default Numeros