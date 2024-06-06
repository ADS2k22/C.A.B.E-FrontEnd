import React, { useEffect, useRef, useState } from "react";
import AccessDenied from "../access_denied/AccessDenied";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import api from "../../services/api";
import { SidebarComponent } from "../../components/Sidebar";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import '../../assets/css/SelectedCourse.css';

export default function SelectedCourse() {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
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
            if (data.data.length > 0) {
                setSelectedVideo(data.data[0].video);
            }
        } catch (err) {
            showError('Ocorreu um erro inesperado ao processar a solicitação. ' + err.response.data.message);
        }
    };

    const updateVideoCompletionStatus = async (videoId, concluido) => {
        try {
            await api.patch(`/api/curso/video?idvideo=${videoId}&iduser=${localStorage.getItem('idAdmin')}`, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log(`Status de conclusão do vídeo ${videoId} atualizado para ${concluido}`);
        } catch (error) {
            console.error('Erro ao atualizar o status de conclusão do vídeo:', error);
        }
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    const toggleVideoCompletion = async (videoId) => {
        const updatedVideos = videos.map((videoObj) => {
            if (videoObj.video.id === videoId) {
                const newConcluido = !videoObj.concluido;
                updateVideoCompletionStatus(videoId, newConcluido);
                return { ...videoObj, concluido: newConcluido };
            }
            return videoObj;
        });
        setVideos(updatedVideos);
    };

    const returnVideos = (e) => {
        return (
            <li className='li-sidebar' key={e.video.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Checkbox
                        inputId={`video-${e.video.id}`}
                        checked={e.concluido}
                        onChange={() => toggleVideoCompletion(e.video.id)}
                        className="video-checkbox"
                        checkboxIcon={<input type="checkbox" className="p-checkbox-input" />}
                    />
                    <Button
                        onClick={() => handleVideoSelect(e.video)}
                        className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary transition-duration-150 transition-colors w-100 style-button-sidebar">
                        <i className="pi pi-video me-2 icon-sidebar"></i>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="fw-medium icon-sidebar">
                                {e.video.nome}
                            </span>
                            {e.concluido && <i className="pi pi-check icon-checked"></i>}
                        </div>
                    </Button>
                </div>
            </li>
        );
    };


    useEffect(() => {
        findCurso();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function tela() {
        return (
            <SidebarComponent>
                <div className="container">
                    <div className="video-section">
                        <iframe
                            className="video-frame"
                            src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo.url}` : null}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                        <div className="video-info">
                            <h1>{selectedVideo ? selectedVideo.curso.nome : null}</h1>
                            <h2>{selectedVideo ? selectedVideo.nome : null}</h2>
                        </div>
                    </div>
                    <div className="sidebar-section">
                        <h3>Vídeos do curso:</h3>
                        <ul className="video-list">
                            {videos.map((e) => returnVideos(e))}
                        </ul>
                    </div>
                </div>
                <Toast ref={toast} />
            </SidebarComponent>
        );
    }

    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />;
}
