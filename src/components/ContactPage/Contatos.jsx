import React from 'react';
import Icons from './Icons Contacts/Icons';

import './contatos.css';

const Contatos = () => {
    const [nome, setNome] = React.useState("");
    const [empresa, setEmpresa] = React.useState("");
    const [telefone, setTel] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o email
        console.log(`Email: ${email}, Message: ${message}`);
    };

    return (
        <>
            <div id='contatos' className='img'>

                <h1>Solicite um Orçamento</h1>

                <div className='contatos_cards'>

                    <div className='contatos_container'>

                        <form onSubmit={handleSubmit}>

                            <div>

                                <label>
                                    Nome:
                                    <input type="email" placeholder='Digite seu nome' value={nome} onChange={e => setNome(e.target.value)} required />
                                </label>
                                <label>
                                    Empresa:
                                    <input type="empresa" placeholder='Digite o nome da sua empresa' value={empresa} onChange={e => setEmpresa(e.target.value)} required />
                                </label>
                            </div>

                            <div>

                                <label>
                                    Telefone:
                                    <input type="email" placeholder='Digite seu telefone com DDD' value={telefone} onChange={e => setTel(e.target.value)} required />
                                </label>
                                <label>
                                    E-Mail:
                                    <input type="email" placeholder='Digite seu E-mail' value={email} onChange={e => setEmail(e.target.value)} required />
                                </label>
                            </div>

                            <div>

                                <label>
                                    Mensagem:
                                    <textarea id='textarea' value={message} onChange={e => setMessage(e.target.value)} required />
                                </label>
                            </div>

                            <div>
                                <input id='enviarEmailBtn' type="submit" value="Enviar" />
                            </div>
                        </form>

                    </div>

                    <div className='contatos_container'>

                        <div className='outrosContatos'>
                            <div className='contacts_list' >

                                <Icons
                                    icon={<ion-icon name="map-outline"></ion-icon>}

                                    detail={'Rua Professor Eládio Magalhães, 113'}
                                />

                                <Icons
                                    icon={<ion-icon name="call-outline"></ion-icon>}

                                    detail={'85 3241-4654'}
                                />

                                <Icons
                                    icon={<ion-icon name="logo-whatsapp"></ion-icon>}

                                    detail={'85 3241-4654'}
                                />

                                <Icons
                                    icon={<ion-icon name="mail-outline"></ion-icon>}

                                    detail={'peres@peresseguranca.com.br'}
                                />


                            </div>

                        </div>

                    </div>

                </div>


            </div>

            <div className='complement'></div>
        </>
    );
};

export default Contatos