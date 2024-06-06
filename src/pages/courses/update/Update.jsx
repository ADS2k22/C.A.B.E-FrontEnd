import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { CascadeSelect } from "primereact/cascadeselect";

export default function Update() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <h2>Atualizar Curso</h2>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CascadeSelect placeholder="Categoria" />
                    <InputText placeholder="Atualizar Categoria" />
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CascadeSelect placeholder="Desafio" />
                    <InputText placeholder="Atualizar Desafio" />
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CascadeSelect placeholder="Carga Horária" />
                    <InputText placeholder="Nova Carga Horária" />
                </div>
                <Button label="Salvar alterações" />
            </div>
        </div>
    )
}