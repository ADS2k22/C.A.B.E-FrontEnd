import React from "react";
import "./styles.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { CascadeSelect } from "primereact/cascadeselect";

export function Form() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
      <h2>Cadastrar Novo Curso</h2>
      <div className="field">
        <CascadeSelect placeholder="Categoria" />
      </div>

      <div className="field">
        <InputText placeholder="Desafio" />
      </div>

      <div className="field">
        <InputText placeholder="Carga Horária" />
      </div>
      <Button label="Cadastrar"/>
    </div>
  );
}
