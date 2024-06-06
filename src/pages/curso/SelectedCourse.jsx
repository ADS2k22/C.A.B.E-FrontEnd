import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Checkbox } from "primereact/checkbox";

export default function SelectedCourse(){
    const { id } = useParams();
    const [videos, setVideos] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const toast = useRef(null);

    const showError = (message) => {
        toast.current.show({
          severity: 'error', summary: 'Erro', detail: message, life: 3000,
        });
    };

    const findCurso = async () => {
        try {
            const data = await api.get(`/api/curso/videos?cursoid=${id}&idUser=${localStorage.getItem('idAdmin')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setVideos(data.data);
            setSelectedVideo(data.data[0].video)
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    }

    const returnVideos = (e) => {
        return (
            <li className='li-sidebar'>
                <Checkbox checked={e.concluido} />
                <Button onClick={() => setSelectedVideo(e.video)} style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary transition-duration-150 transition-colors w-100 style-button-sidebar">
                <i className="pi pi-video me-2 icon-sidebar"></i>
                <span className="fw-medium icon-sidebar">{e.video.nome}</span>
                <Ripple />
                </Button>
            </li>
        )
    }

    useEffect(() => {
        findCurso();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function tela(){
        return (
            <SidebarComponent>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', margin: '30px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <iframe 
                        width="1280px" 
                        height="720px" 
                        src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo.url}` : null}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen/>
                        <h1>{selectedVideo ? selectedVideo.curso.nome : null}: </h1><h2>{selectedVideo ? selectedVideo.nome : null}</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '85vh'}}>
                        <h3>Vídeos do curso:</h3>
                        <ul style={{ padding: '0px' }} className="list-unstyled p-0 m-0 overflow-hidden">
                            {videos ? videos.map((e) => {
                                return returnVideos(e);
                            }): null}
                        </ul>
                    </div>
                </div>
            </SidebarComponent>
        )
    }

    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}