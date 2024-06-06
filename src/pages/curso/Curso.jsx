import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { Card } from "primereact/card";

export default function Curso(){
    const [cursos, setCursos] = useState(null)
    const [page, setPage] = useState(0)

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

    const findCursos = async (method) => {
        try {
            if (method === 'up'){
                let number = page + 1;
                setPage(number);
            } else if (method === 'down'){
                let number = page - 1;
                setPage(number);
            } else if (method === 'first'){
                setPage(0);
            } 
            const data = await api.get((method === 'up' ? 
                `/api/curso?page=${page + 1}` : method === 'down' ? 
                `/api/curso?page=${page - 1}` : method === 'first' ? 
                '/api/curso?page=0' : `/api/curso?page=${page}`),  {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCursos(data.data);
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    useEffect(() => {
        findCursos('first');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cursosBody = (e) => {
        return (
            <Card>
                <h2>{e.curso.nome}</h2>
            </Card>
        )
    }

    console.log(cursos);

    function tela(){
        return(
            <SidebarComponent>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                    <h1>Cursos ofertados</h1>
                    <h2 style={{ alignSelf: 'start'}}>Cursos de Tecnologia</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '100%' }}>
                        {cursos ? cursos.map((e) => {
                            return cursosBody(e);
                        }) : <b></b>}
                    </div>
                    <h2 style={{ alignSelf: 'start'}}>Cursos de Saúde</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '100%' }}>
                        {cursos ? cursos.map((e) => {
                            return cursosBody(e);
                        }) : <b></b>}
                    </div>
                    <h2 style={{ alignSelf: 'start'}}>Cursos de Engenharia</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '100%' }}>
                        {cursos ? cursos.map((e) => {
                            return cursosBody(e);
                        }) : <b></b>}
                    </div>
                    <h2 style={{ alignSelf: 'start'}}>Todos os cursos</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '100%' }}>
                        {cursos ? cursos.map((e) => {
                            return cursosBody(e);
                        }) : <b></b>}
                    </div>
                </div>
            </SidebarComponent>
        )
    }
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}