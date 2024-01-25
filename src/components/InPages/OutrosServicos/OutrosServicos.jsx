import React from 'react'
import { Link } from 'react-router-dom'

import './OutrosServicos.css'

const OutrosServicos = ({ emp1, emp2 }) => {
    return (
        <section className="outrosServicos">

            <div className='os-card'>

                <div
                    className="img os-img"
                    style={{ backgroundImage: emp1?.img }}
                ></div>

                <h3 className="os-emp" >{emp1?.title}</h3>

                <p className="os-desc">{emp1?.desc}</p>

                <Link className='linkToOtherEmpresa' to={emp1?.link}>Saiba Mais</Link>
            </div>



            <div className='os-card'>
                <div
                    className="img os-img"
                    style={{ backgroundImage: emp2?.img }}
                ></div>

                <h3 className="os-emp">{emp2?.title}</h3>

                <p className="os-desc">{emp2?.desc}</p>

                <Link className='linkToOtherEmpresa' to={emp2?.link}>Saiba Mais</Link>
            </div>

        </section>
    )
} 

export default OutrosServicos