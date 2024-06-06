import React, { useState } from "react";
import { Toast } from "primereact/toast";
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";
import '../../assets/css/Certificate.css';

export default function Certificate() {
    const navigate = useNavigate();
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const certificates = [
        { name: 'Gestão de P&DI', id: '1' },
        { name: 'Gestão do tempo/Produtividade', id: '2' },
        { name: 'Food fraude', id: '2' },
        { name: 'Inteligência emocional, geração de conflitos, comunicação assertiva no trabalho, cooperação e trabalho em equipe', id: '4' },
        { name: 'ParAuditor Líder IFS Foodis', id: '5' }
    ];

    const handleDownload = (certificate) => {
        // Lógica para download do certificado
    };

    const handleMouseEnter = (index) => {
        setSelectedCertificate(index);
    };

    const handleMouseLeave = () => {
        setSelectedCertificate(null);
    };

    const buttonTemplate = (certificate, index) => {
        return (
            <li
                key={index}
                className={`certificate-item ${selectedCertificate === index ? 'highlight' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                <div>{certificate.name}</div>
                <Button
                    icon="pi pi-download"
                    className="p-button-rounded p-button-text"
                    onClick={() => handleDownload(certificate)}
                />
            </li>
        );
    };

    function tela() {
        return (
            <SidebarComponent>
                <div className="certificate-container">
                    <h1 className="certificate-title">Meus certificados</h1>

                    <ul className="certificate-list">
                        {certificates.map((certificate, index) => (
                            <React.Fragment key={index}>
                                {buttonTemplate(certificate, index)}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </SidebarComponent>
        )
    };
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}
