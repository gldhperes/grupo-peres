import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ServiceTitles from "../../ComumVars/ServiceTitles.json"
import ComumRoutes from "../../ComumVars/ComumRoutes.js"

import './Header.css'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (!menuOpen) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("header").style.background = "red";
            } else {
                document.getElementById("header").style.background = "transparent";
            }
        }
    }

    function handleButtonClick() {
        if (menuOpen) {

            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }

    }

    return (

        <header id="header">

            <div className="flex logo">
                <Link to={ComumRoutes.Grupo_Peres_Route}>Logo</Link>
            </div>

            <nav id="navbar" className={menuOpen ? 'open' : ''}>
                <li>
                    <h3>Empresa</h3>

                    <ul className="dropdown">

                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            {/* <p>Grupo Peres</p> */}
                            <NavLink className="link" activeclassname="active" to={ComumRoutes.Grupo_Peres_Route}>Grupo Peres</NavLink>
                        </li>
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={ComumRoutes.Peres_Seguranca}>Peres Segurança</NavLink>
                        </li>
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={ComumRoutes.Genial}>Genial Serviços</NavLink>
                        </li>
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={ComumRoutes.P3}>P3 Segurança Eletrônica </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3>Serviços</h3>

                    <ul className="dropdown">
                        {ServiceTitles.services.map((service, index) => (
                            <li key={index}>
                                <ion-icon name="caret-forward-outline"></ion-icon>
                                <NavLink className="link" activeclassname="active" to={""}>{service.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </li>

                <li>
                    <h3>Segmentos</h3>

                    <ul className="dropdown">
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={""}>Serviço</NavLink>
                        </li>
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={""}>Serviço</NavLink>
                        </li>
                        <li>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                            <NavLink className="link" activeclassname="active" to={""}>Serviço</NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink className="link" activeclassname="active" to="/contatos">Contatos</NavLink>
                </li>

            </nav>

            <div id="redes-sociais">
                <ion-icon name="logo-facebook"></ion-icon>

                <ion-icon name="logo-instagram"></ion-icon>

                <ion-icon name="logo-twitter"></ion-icon>
            </div>

            <div id="header_menu">
                <button id="open_menu" onClick={handleButtonClick} className={menuOpen ? 'close' : ''}>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <button id="close_menu" onClick={handleButtonClick} className={menuOpen ? 'open' : ''}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

            </div>

        </header>


    )
}

export default Header