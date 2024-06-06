import React from "react";
import { CascadeSelect } from "primereact/cascadeselect";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Quiz() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <h2>Selecione a categoria de seu interesse</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <CascadeSelect placeholder="Categoria" />

                <a href="/questions">
                    <Button label="Ir para a Rota" component={Link} />
                </a>
    
            </div>
        </div>
    );
}