import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

export const SidebarComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="card d-flex justify-content-center">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ hide }) => (
            <div className="sidebar-root">
              <div className="toogle-sidebar">
                <span>
                  <Button type="button" onClick={(e) => hide(e)} icon="pi pi-times" className="btn btn-outline-secondary rounded-circle" style={{ height: '2rem', width: '2rem' }}></Button>
                </span>
              </div>
              <div className="overflow-auto">
                <ul className="list-unstyled p-0 m-0 overflow-hidden">
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-home me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Home</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-map me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Roadmaps</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-book me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Cursos</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-money-bill me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Assinaturas</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-calendar-times me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Eventos</span>
                      <Ripple />
                    </Button>
                  </li>
                  <li className='li-sidebar'>
                    <Button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                      <i className="pi pi-bookmark me-2 icon-sidebar"></i>
                      <span className="fw-medium icon-sidebar">Certificações</span>
                      <Ripple />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        />
        <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
      </div>
      {children}
    </>
  );
};
