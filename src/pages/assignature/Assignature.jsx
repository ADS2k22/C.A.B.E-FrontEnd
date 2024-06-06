import { Card } from "primereact/card";
import React, { useRef } from "react";
import Logo from "../../assets/ADS2K22.png";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";
import '../../assets/css/Assignature.css';

export default function Assignature() {
  const toast = useRef(null);

  function tela() {
    return (
      <SidebarComponent>
        <div className="assignature-page">
          <div className="assignature-container">
            <Toast ref={toast} />
            <div className="assignature-logo">
              <Image src={Logo} alt="Logo" height="200px" />
            </div>
            <h1 className="assignature-title">Planos</h1>
            <p className="assignature-subtitle">Escolha o plano que mais combina com você.</p>
            <div className="assignature-plans">
              <Card className="assignature-card">
                <Fieldset legend="Plano Mensal">
                  <div className="plan-details">
                    <div>
                      <h2 className="p-m-0">Plano Mensal</h2>
                      <p className="p-m-0">R$ 49,99/mês</p>
                    </div>
                    <div>
                      <Button label="Assine agora" className="p-button-rounded p-button-primary" />
                    </div>
                  </div>
                </Fieldset>
              </Card>
              <Card className="assignature-card promo">
                <Fieldset legend="Plano Anual">
                  <div className="plan-details">
                    <div>
                      <h2 className="p-m-0">Plano Anual</h2>
                      <p className="p-m-0">R$ 29,99/mês <span className="promo-label">Promoção!</span></p>
                    </div>
                    <div>
                      <Button label="Assine agora" className="p-button-rounded p-button-primary" />
                    </div>
                  </div>
                </Fieldset>
              </Card>
            </div>
          </div>
          <p className="assignature-footer">*Powered by ADS2K22</p>
        </div>
      </SidebarComponent>
    )
  }
  return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}
