import React from "react";
import { CascadeSelect } from "primereact/cascadeselect";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { SidebarComponent } from "../../components/Sidebar";
import AccessDenied from "../access_denied/AccessDenied";

export default function Quiz() {

    function tela() {

        return (
            <SidebarComponent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                    <h2>Selecione a categoria de seu interesse</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                        <CascadeSelect placeholder="Categoria" />

                        <a href="/questions">
                            <Button label="Iniciar" component={Link} />
                        </a>

                    </div>
                </div>
            </SidebarComponent>
        );
    }

    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}