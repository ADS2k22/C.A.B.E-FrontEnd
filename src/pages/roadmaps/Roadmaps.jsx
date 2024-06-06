import { Card } from "primereact/card";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";
import '../../assets/css/roadmap.css';

import { ProgressBar } from 'primereact/progressbar';

export default function Roadmaps() {
  const toast = useRef(null);

  function tela() {
    return (
      <SidebarComponent>
        <div className="roadmap-page">
          <div className="roadmap-container">
            <Toast ref={toast} />
            <h1 className="roadmap-title">Roadmaps</h1>
            <p className="roadmap-subtitle">Acompanhe em tempo real o progresso dos seus roadmaps.</p>
            <div className="roadmap-root">
              <Card className="roadmap-card">
                <Fieldset legend="Análise e Desenvolvimento de Dados">
                  <div className="plan-details">
                    <p className="p-m-0">Progresso</p>
                    <div style={{ width: '100%' }} className="card">
                      <ProgressBar value={80}></ProgressBar>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }}>
                    <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                  </div>
                </Fieldset>
              </Card>
              <Card className="roadmap-card">
                <Fieldset legend="Farmácia">
                  <div className="plan-details">
                    <p className="p-m-0">Progresso</p>
                    <div style={{ width: '100%' }} className="card">
                      <ProgressBar value={20}></ProgressBar>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }}>
                    <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                  </div>
                </Fieldset>
              </Card>
              <Card className="roadmap-card">
                <Fieldset legend="Engenharia de Bioprocessos e Biotecnologia">
                  <div className="plan-details">
                    <p className="p-m-0">Progresso</p>
                    <div style={{ width: '100%' }} className="card">
                      <ProgressBar value={37}></ProgressBar>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }}>
                    <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                  </div>
                </Fieldset>
              </Card>
              <Card className="roadmap-card">
                <Fieldset legend="Ciência de Dados">
                  <div className="plan-details">
                    <p className="p-m-0">Progresso</p>
                    <div style={{ width: '100%' }} className="card">
                      <ProgressBar value={60}></ProgressBar>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }}>
                    <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                  </div>
                </Fieldset>
              </Card>
              <Card className="roadmap-card">
                <Fieldset legend="Tecno Enfermagem">
                  <div className="plan-details">
                    <p className="p-m-0">Progresso</p>
                    <div style={{ width: '100%' }} className="card">
                      <ProgressBar value={30}></ProgressBar>
                    </div>
                  </div>
                  <div style={{ margin: '20px' }} >
                    <Button label="Acompanhar" className="p-button-rounded p-button-primary" />
                  </div>
                </Fieldset>
              </Card>
            </div>
          </div>
          <p className="roadmap-footer">*Powered by ADS2K22</p>
        </div>
      </SidebarComponent>
    )
  }
  return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}
