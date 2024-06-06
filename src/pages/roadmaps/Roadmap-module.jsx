import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import { CardCourseComponent } from "../../components/CardCourse";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { useParams } from "react-router-dom";

export const RoadmapModule = () => {
  const [filteredCursos, setFilteredCursos] = useState(null);
  const toast = useRef(null);
  const { nome } = useParams();

  useEffect(() => {
    findCursosByString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showError = (message) => {
    toast.current.show({
      severity: 'error', summary: 'Erro', detail: message, life: 3000,
    });
  };

  const findCursosByString = async () => {
    try {
      const data = await api.get(`/api/curso/roadmap?roadmap=${nome}&idUser=${localStorage.getItem('idAdmin')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setFilteredCursos(data.data);
    } catch (err) {
      showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
    }
  }

  function tela() {
    return (
      <SidebarComponent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
          <h1>Cursos do roadmap</h1>
          {filteredCursos && <h2 style={{ alignSelf: 'start' }}>Cursos de '{nome}'</h2>}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowX: 'auto', padding: '20px', width: '98%' }}>
            {filteredCursos ? filteredCursos.map((e) => {
              return CardCourseComponent(e);
            }) : <b></b>}
          </div>
        </div>
      </SidebarComponent>
    )
  }
  return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}