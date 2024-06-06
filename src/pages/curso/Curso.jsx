import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import { CardCourseComponent } from "../../components/CardCourse";

export default function Curso() {
    const [cursos, setCursos] = useState([]);
    const [cursosTec, setCursosTec] = useState([]);
    const [cursosSaude, setCursosSaude] = useState([]);
    const [cursosEngenharia, setCursosEngenharia] = useState([]);
    const [nomeForm, setNomeForm] = useState('');
    const [filteredCursos, setFilteredCursos] = useState([]);
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

    const fetchCursos = async (url, setState) => {
        try {
            const response = await api.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setState(response.data || []);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação.');
        }
    };

    useEffect(() => {
        fetchCursos(`/api/curso?idUser=${localStorage.getItem('idAdmin')}`, setCursos);
        fetchCursos(`/api/curso/filtragem?categoria=Tecnologia&idUser=${localStorage.getItem('idAdmin')}`, setCursosTec);
        fetchCursos(`/api/curso/filtragem?categoria=Saúde&idUser=${localStorage.getItem('idAdmin')}`, setCursosSaude);
        fetchCursos(`/api/curso/filtragem?categoria=Engenharia&idUser=${localStorage.getItem('idAdmin')}`, setCursosEngenharia);
    }, []);

    const findFilteredCursos = async () => {
        try {
            const response = await api.get(`/api/curso/filtragem?nome=${nomeForm}&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setFilteredCursos(response.data || []);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação.');
        }
    };

    function tela() {
        return (
            <SidebarComponent>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                    <Toast ref={toast} />
                    <h1>Cursos Ofertados</h1>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span className="p-float-label">
                            <InputText id="nome" value={nomeForm} onChange={(e) => setNomeForm(e.target.value)} disabled={isFiltered} />
                            <label htmlFor="nome">Nome</label>
                        </span>
                        <Button rounded icon="pi pi-search" onClick={() => { findFilteredCursos(); setIsFiltered(true); }} disabled={isFiltered} />
                        <Button rounded icon="pi pi-filter-slash" onClick={() => { setIsFiltered(false); setFilteredCursos([]); setNomeForm(''); }} disabled={!isFiltered} />
                    </div>
                    <h2 style={{ alignSelf: 'start' }}>{isFiltered ? `Cursos com o nome '${nomeForm}'` : 'Cursos de Tecnologia'}</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {!isFiltered ? cursosTec.map((e) => <CardCourseComponent key={e.id} {...e} />) : filteredCursos.map((e) => <CardCourseComponent key={e.id} {...e} />)}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start' }}>Cursos de Saúde</h2>
                    <div hidden={isFiltered} style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursosSaude.map((e) => <CardCourseComponent key={e.id} {...e} />)}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start' }}>Cursos de Engenharia</h2>
                    <div hidden={isFiltered} style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursosEngenharia.map((e) => <CardCourseComponent key={e.id} {...e} />)}
                    </div>
                    <h2 hidden={isFiltered} style={{ alignSelf: 'start' }}>Todos os cursos</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
                        {cursos.map((e) => <CardCourseComponent key={e.id} {...e} />)}
                    </div>
                </div>
            </SidebarComponent>
        )
    }

    return localStorage.getItem('authenticated') === 'true' ? tela() : <AccessDenied />
}