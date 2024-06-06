import { Card } from "primereact/card";
import { useRef, useEffect, useState } from "react";
import { Toast } from "primereact/toast";
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";
import '../../assets/css/roadmap.css';

import { Carousel } from 'primereact/carousel';
import { ProgressBar } from 'primereact/progressbar';

export default function Roadmaps() {
  const toast = useRef(null);
  const [roadmaps, setRoadmaps] = useState([]);

  const getProductsData = [
    {
      title: 'Análise e Desenvolvimento de Dados',
      value: 80
    },
    {
      title: 'Farmácia',
      value: 30
    },
    {
      title: 'Engenharia de Bioprocessos e Biotecnologia',
      value: 40
    },
    {
      title: 'Ciência de Dados',
      value: 60
    },
    {
      title: 'Tecno Enfermagem',
      value: 30
    },
  ];

  function tela() {
    return (
      <SidebarComponent>
        <div className="roadmap-page">
          <div className="roadmap-container">
            <Toast ref={toast} />
            <h1 className="roadmap-title">Roadmaps</h1>
            <p className="roadmap-subtitle">Acompanhe em tempo real o progresso dos seus roadmaps.</p>
            <div className="card roadmap-root">
              {
                getProductsData.map((item) => {
                  return (
                    <Card className="roadmap-card">
                      <Fieldset legend={item.title}>
                        <div className="plan-details">
                          <p className="p-m-0">Progresso</p>
                          <div style={{ width: '100%' }} className="card">
                            <ProgressBar value={item.value}></ProgressBar>
                          </div>
                        </div>
                        <div style={{ margin: '20px' }}>
                          <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                        </div>
                      </Fieldset>
                    </Card>
                  )
                })
              }
            </div>
          </div>
          <p className="roadmap-footer">*Powered by ADS2K22</p>
        </div>
      </SidebarComponent>
    )
  }

  return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}
