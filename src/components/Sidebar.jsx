import { useContext, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { useNavigate } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { AuthContext } from '../context/AuthContext';
import { Image } from "primereact/image";
import Logo from "../assets/logo_CABE.png";

export const SidebarComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext)

  const confirm = (message, method) => {
    confirmDialog({
      message: message,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: method,
    });
};

  const handleToggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div style={{ position: 'fixed', margin: '10px' }} className="card d-flex justify-content-center">
        <div><ConfirmDialog /></div>
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ hide }) => (
            <div className="sidebar-root">
              <div className="toogle-sidebar">
              <img src={Logo} alt="Logo" className="sidebar-logo-image" />
                <span>
                  <Button type="button" onClick={(e) => hide(e)} icon="pi pi-times" className="btn btn-outline-secondary rounded-circle" style={{ height: '2rem', width: '2rem' }}></Button>
                </span>
              </div>
              <div className="overflow-auto">
                <ul style={{ padding: '0px' }} className="list-unstyled p-0 m-0 overflow-hidden">
                  <li className='li-sidebar'>
                    <Button onClick={() => navigate("/home")} style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-home me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Home</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button onClick={() => navigate("/roadmaps")} style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-map me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Roadmaps</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-book me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Cursos</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button onClick={() => navigate("/assignature")} style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-money-bill me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Assinaturas</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-calendar-times me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Eventos</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button onClick={() => navigate("/certificate")} style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar">
                      <i className="pi pi-bookmark me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Certificações</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button style={{ width: '100%' }} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100 style-button-sidebar"
                      onClick={() => confirm('Tem certeza de que deseja sair?', logout)}
                    >
                      <i className="pi pi-sign-out me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Sair</span>
                      <Ripple />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        />
        <div className="sidebar-toggle-button" onClick={handleToggleSidebar}>
          <Button icon="pi pi-bars" />
        </div>
      </div >
      {children}
      {
        !visible && (
          <div className="sidebar-logo">
            <Image src={Logo} alt="Logo" />
          </div>
        )
      }
    </>
  );
};
