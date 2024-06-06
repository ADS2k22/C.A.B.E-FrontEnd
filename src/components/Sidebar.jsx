import { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export const SidebarComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);

  return (
    <>
      <div className="card d-flex justify-content-center">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ hide }) => (
            <div className="min-vh-100 d-flex position-relative lg-static bg-dark">
              <div id="app-sidebar-2" className="bg-dark h-100 d-block flex-shrink-0 position-absolute lg-static start-0 top-0 z-1 border-end border-secondary user-select-none" style={{ width: '280px' }}>
                <div className="d-flex flex-column h-100">
                  <div className="d-flex align-items-center justify-content-between px-4 pt-3">
                    <span>
                      <Button type="button" onClick={(e) => hide(e)} icon="pi pi-times" className="btn btn-outline-secondary rounded-circle" style={{ height: '2rem', width: '2rem' }}></Button>
                    </span>
                  </div>
                  <div className="overflow-auto">
                    <ul className="list-unstyled p-3 m-0">
                      <li>
                        <StyleClass nodeRef={btnRef1} selector="@next" enterActiveClassName="slidedown" leaveToClassName="d-none" leaveActiveClassName="slideup">
                          <div ref={btnRef1} className="p-ripple p-3 d-flex align-items-center justify-content-between text-secondary cursor-pointer">
                            <span className="fw-medium">FAVORITES</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        <ul className="list-unstyled p-0 m-0 overflow-hidden">
                          <li>
                            <button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                              <i className="pi pi-home me-2"></i>
                              <span className="fw-medium">Dashboard</span>
                              <Ripple />
                            </button>
                          </li>
                          <li>
                            <button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                              <i className="pi pi-bookmark me-2"></i>
                              <span className="fw-medium">Bookmarks</span>
                              <Ripple />
                            </button>
                          </li>
                          <li>
                            <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="d-none" enterActiveClassName="slidedown" leaveToClassName="d-none" leaveActiveClassName="slideup">
                              <button ref={btnRef2} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                                <i className="pi pi-chart-line me-2"></i>
                                <span className="fw-medium">Reports</span>
                                <i className="pi pi-chevron-down ms-auto me-1"></i>
                                <Ripple />
                              </button>
                            </StyleClass>
                            <ul className="list-unstyled py-0 ps-3 pe-0 m-0 d-none overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                              <li>
                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="d-none" enterActiveClassName="slidedown" leaveToClassName="d-none" leaveActiveClassName="slideup">
                                  <button ref={btnRef3} className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                                    <i className="pi pi-chart-line me-2"></i>
                                    <span className="fw-medium">Revenue</span>
                                    <i className="pi pi-chevron-down ms-auto me-1"></i>
                                    <Ripple />
                                  </button>
                                </StyleClass>
                                <ul className="list-unstyled py-0 ps-3 pe-0 m-0 d-none overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                                  <li>
                                    <button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                                      <i className="pi pi-table me-2"></i>
                                      <span className="fw-medium">View</span>
                                      <Ripple />
                                    </button>
                                  </li>
                                  <li>
                                    <button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                                      <i className="pi pi-search me-2"></i>
                                      <span className="fw-medium">Search</span>
                                      <Ripple />
                                    </button>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <button className="p-ripple d-flex align-items-center cursor-pointer p-3 rounded text-secondary hover-bg-dark transition-duration-150 transition-colors w-100">
                                  <i className="pi pi-chart-line me-2"></i>
                                  <span className="fw-medium">Expenses</span>
                                  <Ripple />
                                </button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
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
