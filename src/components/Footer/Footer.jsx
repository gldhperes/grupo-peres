import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className="content">

                <div className="grupoPeres container">


                    <div className="matriz">

                        <div className="footer_icon">
                            <p>Grupo Peres</p>
                        </div>

                        <h3>Matriz</h3>

                        <p>Rua Professor Eladio Magalhães, 1369</p>
                        <p>Edson Queiroz - Fortaleza - CE</p>
                        <p>CEP </p>

                    </div>

                </div>

                <div className="contatos_footer container">
                    <h3>Contatos</h3>

                    <ul>
                        <li>
                            <ion-icon name="mail-outline"></ion-icon>
                            <p>peres@peresseguranca.com.br</p>
                        </li>

                        <li>
                            <ion-icon name="call-outline"></ion-icon>
                            <p>85 3241-4654</p>
                        </li>

                    </ul>

                    <div id="redes-sociais">
                        <ion-icon name="logo-facebook"></ion-icon>

                        <ion-icon name="logo-instagram"></ion-icon>

                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>














                </div>
            </div>

            <div className="divisor"></div>

            <div className="reservados">
                <p>
                    <span>Grupo Peres </span>
                    © 2024 - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer