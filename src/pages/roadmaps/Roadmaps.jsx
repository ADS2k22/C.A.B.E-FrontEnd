import { Card } from "primereact/card";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { Fieldset } from 'primereact/fieldset';
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";
import '../../assets/css/roadmap.css';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from "primereact/button";

export default function Roadmaps() {
  const toast = useRef(null);

  const getProductsData = [
    {
      title: 'ADS',
      value: 80
    },
    {
      title: 'Farmacia',
      value: 30
    },
    {
      title: 'Eng. BioP. e BioT',
      value: 40
    },
    {
      title: 'Ciencia de Dados',
      value: 60
    },
    {
      title: 'Tec. Enfermagem',
      value: 30
    },
  ];

  function renderRoadmaps() {
    return (
      <SidebarComponent>
        <div className="roadmap-page">
          <div className="roadmap-container">
            <Toast ref={toast} />
            <h1 className="roadmap-title">Roadmaps</h1>
            <p className="roadmap-subtitle">Acompanhe em tempo real o progresso dos seus roadmaps.</p>
            <div className="card roadmap-root">
              {getProductsData.map((item, index) => (
                <Card key={index} className="roadmap-card">
                  <Fieldset legend={item?.title}>
                    <div className="plan-details">
                      <p className="p-m-0">Progresso</p>
                      <div style={{ width: '100%' }} className="card">
                        <ProgressBar value={item?.value}></ProgressBar>
                      </div>
                    </div>
                    <div style={{ margin: '20px' }}>
                      <a href={`/roadmaps/${item?.title}`}>
                        <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                      </a>
                    </div>
                  </Fieldset>
                </Card>
              ))}
            </div>
          </div>
          <p className="roadmap-footer">*Powered by ADS2K22</p>
        </div>
      </SidebarComponent>
    );
  }

  return (localStorage.getItem('authenticated') === 'true') ? renderRoadmaps() : <AccessDenied />
}
