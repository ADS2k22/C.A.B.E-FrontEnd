import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { CardCourseComponent } from "../../components/CardCourse";

export default function Curso(){
    const [cursos, setCursos] = useState(null)
    const [cursosTec, setCursosTec] = useState(null);
    const [cursosSaude, setCursosSaude] = useState(null);
    const [cursosEngenharia, setCursosEngenharia] = useState(null);
    const [nome, setNome] = useState(null);
    const [filteredCursos, setFilteredCursos] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);

    const navigate = useNavigate();
    const toast = useRef(null);

    const showSuccess = (message) => {
        toast.current.show({
          severity: 'success', summary: 'Sucesso', detail: message, life: 3000,
        });
    };

    const showError = (message) => {
        toast.current.show({
          severity: 'error', summary: 'Erro', detail: message, life: 3000,
        });
    };

    const findCursos = async () => {
        try {
            const data = await api.get(`/api/curso?idUser=${localStorage.getItem('idAdmin')}`,  {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursos(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    const findTecnologiaCursos = async () => {
        try {
            const data = await api.get(`/api/curso/filtragem?categoria=Tecnologia&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursosTec(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    const findSaudeCursos = async () => {
        try {
            const data = await api.get(`/api/curso/filtragem?categoria=Saúde&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursosSaude(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    const findEngenhariaCursos = async () => {
        try {
            const data = await api.get(`/api/curso/filtragem?categoria=Engenharia&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursosEngenharia(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    const findFilteredCursos = async () => {
        try {
            const data = await api.get(`/api/curso/filtragem?nome=${nome}&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setFilteredCursos(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    useEffect(() => {
        findCursos();
        findTecnologiaCursos();
        findSaudeCursos();
        findEngenhariaCursos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function tela(){
        return(
            <SidebarComponent>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                    <h1>Cursos Ofertados</h1>
                    <div style={{ display: 'flex', gap: '10px'}}>
                        <span className="p-float-label">
                            <InputText id="nome" value={nome} onChange={(e) => setNome(e.target.value)} disabled={isFiltered} />
                            <label htmlFor="nome">Nome</label>
                        </span>
                        <Button rounded icon="pi pi-search" onClick={() => {findFilteredCursos(); setIsFiltered(true)}} disabled={isFiltered} />
                        <Button rounded icon="pi pi-filter-slash" onClick={() => {setIsFiltered(false); setFilteredCursos(null); setNome("")}} disabled={!isFiltered} />
                    </div>
                    {!isFiltered ? <h2 style={{ alignSelf: 'start'}}>Cursos de Tecnologia</h2> : <h2 style={{ alignSelf: 'start'}}>Cursos com o nome '{nome}'</h2>}
                    <div hidden={isFiltered} style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursosTec && isFiltered === false ? cursosTec.map((e) => {
                            return CardCourseComponent(e);
                        }) : isFiltered ? (filteredCursos ? filteredCursos.map((e) => {
                            return CardCourseComponent(e);
                        }) : <b></b>) : <b></b>}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start'}}>Cursos de Saúde</h2>
                    <div hidden={isFiltered} style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursosSaude && isFiltered === false ? cursosSaude.map((e) => {
                            return CardCourseComponent(e);
                        }) : <b></b>}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start'}}>Cursos de Engenharia</h2>
                    <div hidden={isFiltered} style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursosEngenharia && isFiltered === false ? cursosEngenharia.map((e) => {
                            return CardCourseComponent(e);
                        }) : <b></b>}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start'}}>Todos os cursos</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursos && isFiltered === false ? cursos.map((e) => {
                            return CardCourseComponent(e);
                        }) : <b></b>}
                    </div>
                </div>
            </SidebarComponent>
        )
    }
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}