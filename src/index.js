import './index.css';
import './media.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import Homepage from './components/Pages/Homepage/Homepage.jsx'
import Contatos from './components/ContactPage/Contatos.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


import ComumRoutes from './ComumVars/ComumRoutes.js';
import PeresSeguranca from './components/Pages/PeresSeguranca/PeresSeguranca.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(

    <BrowserRouter  >

        <div style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column'
        }}>

            <Header />

            <Routes>

                <Route path={ComumRoutes.Grupo_Peres_Route} exact element={<Homepage />} />
                <Route path={ComumRoutes.Peres_Seguranca} exact element={<PeresSeguranca />} />
                
                <Route path={ComumRoutes.Contatos} exact element={<Contatos />} />

            </Routes>
            <Footer />
        </div>

    </BrowserRouter>


);