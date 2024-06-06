import React from "react";
import "./styles.css";
import { CascadeSelect } from "primereact/cascadeselect";
import { Button } from "primereact/button";

export function Card() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
      <h2>Deletar Curso</h2>
      <div className="field">
        <CascadeSelect placeholder="Categoria" />
      </div>

      <div className="field">
        <CascadeSelect placeholder="Desafio" />
      </div>

      <Button label="Deletar curso"/>
    </div>
  );
}
