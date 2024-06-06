import React from "react";
import { CascadeSelect } from "primereact/cascadeselect";

export default function Courses(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <h2>Qual curso você está procurando?</h2>
            <div className="field">
                <CascadeSelect placeholder="Escolha a área" />
            </div>
            <div>
                <CascadeSelect placeholder="Escolha o curso" />
            </div>
        </div>
    )
}
