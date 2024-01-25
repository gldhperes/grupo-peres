import React, { useState } from 'react'

import Dep from './Dep/Dep'

import './Depoimentos.css'

const Depoimentos = () => {

    const [selectedItem, setSelectedItem] = useState(0);
    const totalItems = 2; // total number of slides

    const handleChange = (event) => {
        setSelectedItem(Number(event.target.value));
    };

    const handleLeftClick = () => {
        setSelectedItem(oldValue => (oldValue > 0 ? oldValue - 1 : totalItems - 1));
    };

    const handleRightClick = () => {
        setSelectedItem(oldValue => (oldValue < totalItems - 1 ? oldValue + 1 : 0));
    };

    const slideShow = {
        '--selected-item': selectedItem,
    };
    
    return (
        <section id="depoimentos">

            <div id='depTitle'>
                <h3 className='mainTitle'>Reconhecimento</h3>
            </div>


            <div className='slide-show' style={slideShow}>
                <button className="slide_button button_left" onClick={handleLeftClick}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>

                <div className="slider-list">

                    <Dep img={""} name={"Matheus Ximenes"} cargo={"Presidente Empresa X"}
                        dep={"Desta maneira, a revolução dos costumes estende o alcance e a importância dos conhecimentos estratégicos para atingir a excelência."}
                    ></Dep>


                    <Dep img={""} name={"Gustavo Souza"} cargo={"Diretor Empresa Y"}
                        dep={"Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a contínua expansão de nossa atividade pode nos levar a considerar a reestruturação do levantamento das variáveis envolvidas."}
                    ></Dep>
                </div>

                <button className="slide_button button_right" onClick={handleRightClick}>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
            </div>

            <div className="slide-controller">
                <input type="radio" name="slide" value="0" checked={selectedItem === 0} onChange={handleChange} />
                <input type="radio" name="slide" value="1" checked={selectedItem === 1} onChange={handleChange} />
                {/* <input type="radio" name="slide" value="2" checked={selectedItem === 2} onChange={handleChange} />
                <input type="radio" name="slide" value="3" checked={selectedItem === 3} onChange={handleChange} /> */}
            </div>



        </section >
    )
}

export default Depoimentos