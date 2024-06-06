import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../../assets/css/events.css';

import { Card } from "primereact/card";
import { Fieldset } from 'primereact/fieldset';

import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import AccessDenied from '../access_denied/AccessDenied';
import { SidebarComponent } from '../../components/Sidebar';

const Events = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            imagem: 'https://biopark.com.br/_next/image/?url=https%3A%2F%2Fbiopark.com.br%2Fuploads%2F25_CARD_SITE_641e8c7d59.png&w=640&q=100', // Exemplo de URL de imagem
            nome: 'Circuito BPK 26º Edição',
            descricao: 'Encontro de geração de negócios e networkin.\nApresentação de pitches e exposição de empresas.',
            local: 'Biopark - Auditório UFPR',
            data: '2024-07-07',
            horario: '19:30',
            concluido: false,
        },
        {
            id: 2,
            imagem: 'https://media.licdn.com/dms/image/C4D22AQGLsR_C27uCiw/feedshare-shrink_800/0/1647604807592?e=2147483647&v=beta&t=JkNxJMCP31Z9P5nfkyUguxz_7d5lq2DwX6ja6_5TQaE', // Exemplo de URL de imagem
            nome: 'WorkShop Prático',
            descricao: 'Introdução aos Biomateriais: Aplicação de poímeros naturais como revestimento antibacteriano no implante espinhal e outros dispositivos médicos',
            local: 'Biopark - Edifício Charles Darwin, Sala 102',
            data: '2024-07-01',
            horario: '19:30',
            concluido: false,
        },
        {
            id: 3,
            imagem: 'https://media.licdn.com/dms/image/D4D22AQGGqFNPgeoAvg/feedshare-shrink_800/0/1715086548430?e=2147483647&v=beta&t=CKbiHi3rVW2Fnoqc9U23QCDLF50umSMLMfYcx_ZSu50', // Exemplo de URL de imagem
            nome: 'Inteligencia Artificial e Data Science',
            descricao: 'Palestra de introdução aplicação e tendencias da intelingencia artificial \n Dr. Danillo Roberto Pereira',
            local: 'Biopark - Auditório UFPR',
            data: '2024-07-14',
            horario: '20:00',
            concluido: false,
        },
    ]);

    const [novoEvento, setNovoEvento] = useState({
        imagem: '',
        nome: '',
        descricao: '',
        local: '',
        data: '',
        horario: '',
    });

    const [exibirModalNovoEvento, setExibirModalNovoEvento] = useState(false);
    const [exibirModalInscricao, setExibirModalInscricao] = useState(false);
    const [emailInscricao, setEmailInscricao] = useState('');
    const [eventoEmEdicao, setEventoEmEdicao] = useState(null);
    const [exibirModalEdicao, setExibirModalEdicao] = useState(false);

    const handleExcluirEvento = (id) => {
        setEvents(events.filter((evento) => evento.id !== id));
    };

    const handleEditarEvento = (evento) => {
        setEventoEmEdicao({ ...evento });
        setExibirModalEdicao(true); // Exibe o modal de edição
    };

    const handleMarcarConcluido = (id) => {
        setEvents(
            events.map((evento) =>
                evento.id === id ? { ...evento, concluido: !evento.concluido } : evento
            )
        );
    };

    const handleInscreverEvento = () => {
        // Implemente a lógica de inscrição aqui
        console.log('Inscrever email:', emailInscricao);
        setExibirModalInscricao(false);
        setEmailInscricao('');
    };

    const handleCadastrarEvento = () => {
        setEvents([...events, { ...novoEvento, id: events.length + 1 }]);
        setNovoEvento({
            imagem: '',
            nome: '',
            descricao: '',
            local: '',
            data: '',
            horario: '',
        });
        setExibirModalNovoEvento(false);
    };

    const handleAtualizarEvento = () => {
        // Encontre o índice do evento a ser atualizado
        const index = events.findIndex((evento) => evento.id === eventoEmEdicao.id);

        // Atualize o evento na lista
        setEvents([
            ...events.slice(0, index),
            eventoEmEdicao, // Novo evento com os dados atualizados
            ...events.slice(index + 1),
        ]);

        // Limpe o estado de edição e feche o modal
        setEventoEmEdicao(null);
        setExibirModalEdicao(false);
    };

    const toast = useRef(null);
    const navigate = useNavigate();

    function tela() {
        return (
            <SidebarComponent>
                <div className="events-page">
                    <div className="events-container">
                        <Toast ref={toast} />
                        <div className='add-events'>
                            <div className="p-col-12">
                                <h2>Eventos</h2>
                            </div>
                        </div>
                        <div className='layout-events'>
                            <div className='root-events'>
                                <Button style={{position: 'absolute', top: '15px', right: '80px'}} label="Novo Evento" onClick={() => setExibirModalNovoEvento(true)}/>
                                {events.map((evento) => (
                                    <div key={evento.id} className="p-col-12 p-md-6 p-lg-4">
                                        <Fieldset>
                                            <div className="p-carda">
                                                <img style={{ height: '300px', width: '300px' }} src={evento.imagem} alt={evento.nome} />
                                                <div className="p-card-body">
                                                    <h5 className="p-card-title">{evento.nome}</h5>
                                                    <p className="p-card-text">{evento.descricao}</p>
                                                    <p>
                                                        <strong>Local:</strong> {evento.local}
                                                    </p>
                                                    <p>
                                                        <strong>Data:</strong> {evento.data}
                                                    </p>
                                                    <p>
                                                        <strong>Horário:</strong> {evento.horario}
                                                    </p>
                                                    <div className="p-grid align-buttons">
                                                        <div className="p-col-12 p-md-6">
                                                            <Button
                                                                label="Excluir"
                                                                className="p-button-danger"
                                                                onClick={() => handleExcluirEvento(evento.id)}
                                                            />
                                                        </div>
                                                        <div className="p-col-12 p-md-6">
                                                            <Button
                                                                label="Editar"
                                                                onClick={() => handleEditarEvento(evento)}
                                                            />
                                                        </div>
                                                        <div className="p-col-12 p-md-6">
                                                            <Button
                                                                label={
                                                                    evento.concluido ? 'Não disponível' : 'Disponível'
                                                                }
                                                                onClick={() => handleMarcarConcluido(evento.id)}
                                                            />
                                                        </div>
                                                        <div className="p-text-center">
                                                            <Button
                                                                label="Inscrever-se"
                                                                onClick={() => setExibirModalInscricao(true)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fieldset>
                                    </div>
                                ))}
                                
                                {/* Modal de edição */}
                                <Dialog
                                    header="Editar Evento"
                                    visible={exibirModalEdicao}
                                    onHide={() => setExibirModalEdicao(false)}
                                >
                                    <div className="p-fluid p-formgrid p-grid">
                                        {/* Campos de edição do evento */}
                                        <div className="p-field p-col-12">
                                            <label htmlFor="imagem">URL da Imagem:</label>
                                            <InputText
                                                id="imagem"
                                                type="text"
                                                value={eventoEmEdicao?.imagem || ''}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        imagem: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="nome">Nome do Evento:</label>
                                            <InputText
                                                id="nome"
                                                type="text"
                                                value={eventoEmEdicao?.nome}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        nome: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="descricao">Descrição:</label>
                                            <InputText
                                                id="descricao"
                                                type="text"
                                                value={eventoEmEdicao?.descricao}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        descricao: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="local">Local:</label>
                                            <InputText
                                                id="local"
                                                type="text"
                                                value={eventoEmEdicao?.local}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        local: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="data">Data:</label>
                                            <Calendar
                                                id="data"
                                                value={new Date(eventoEmEdicao?.data)}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        data: e.value.toISOString().slice(0, 10),
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="horario">Horário:</label>
                                            <InputText
                                                id="horario"
                                                type="time"
                                                value={eventoEmEdicao?.horario}
                                                onChange={(e) =>
                                                    setEventoEmEdicao({
                                                        ...eventoEmEdicao,
                                                        horario: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-col-12">
                                            <Button
                                                label="Atualizar"
                                                onClick={handleAtualizarEvento}
                                            />
                                        </div>
                                    </div>
                                </Dialog>

                                {/* Modal de inscrição */}
                                <Dialog
                                    header="Inscrição no Evento"
                                    visible={exibirModalInscricao}
                                    onHide={() => setExibirModalInscricao(false)}
                                >
                                    <div className="p-fluid">
                                        <div className="p-field">
                                            <label htmlFor="email">Digite seu email:</label>
                                            <InputText
                                                id="email"
                                                type="email"
                                                value={emailInscricao}
                                                onChange={(e) => setEmailInscricao(e.target.value)}
                                            />
                                        </div>
                                        <Button
                                            label="Enviar Inscrição"
                                            onClick={handleInscreverEvento}
                                        />
                                    </div>
                                </Dialog>

                                {/* Modal de cadastro de evento */}
                                <Dialog
                                    header="Cadastrar Novo Evento"
                                    visible={exibirModalNovoEvento}
                                    onHide={() => setExibirModalNovoEvento(false)}
                                >
                                    <div className="p-fluid p-formgrid p-grid">
                                        <div className="p-field p-col-12">
                                            <label htmlFor="imagem">URL da Imagem:</label>
                                            <InputText
                                                id="imagem"
                                                type="text"
                                                value={novoEvento.imagem}
                                                onChange={(e) =>
                                                    setNovoEvento({ ...novoEvento, imagem: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="nome">Nome do Evento:</label>
                                            <InputText
                                                id="nome"
                                                type="text"
                                                value={novoEvento.nome}
                                                onChange={(e) =>
                                                    setNovoEvento({ ...novoEvento, nome: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <label htmlFor="descricao">Descrição:</label>
                                            <InputTextarea
                                                id="descricao"
                                                value={novoEvento.descricao}
                                                onChange={(e) =>
                                                    setNovoEvento({ ...novoEvento, descricao: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12 p-md-6">
                                            <label htmlFor="local">Local:</label>
                                            <InputText
                                                id="local"
                                                type="text"
                                                value={novoEvento.local}
                                                onChange={(e) =>
                                                    setNovoEvento({ ...novoEvento, local: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12 p-md-6">
                                            <label htmlFor="data">Data:</label>
                                            <Calendar
                                                id="data"
                                                value={new Date(novoEvento.data)}
                                                onChange={(e) =>
                                                    setNovoEvento({
                                                        ...novoEvento,
                                                        data: e.value.toISOString().slice(0, 10),
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="p-field p-col-12 p-md-6">
                                            <label htmlFor="horario">Horário:</label>
                                            <InputText
                                                id="horario"
                                                type="time"
                                                value={novoEvento.horario}
                                                onChange={(e) =>
                                                    setNovoEvento({ ...novoEvento, horario: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarComponent>
        );
    }

    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
};

export default Events;