import React from "react";
import './styles.css'
import { CascadeSelect } from "primereact/cascadeselect";
import { ListBox } from 'primereact/listbox';   

export default function Read() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
    <h2>Listar Cursos Disponíveis</h2>
    <div className="field">
      <CascadeSelect placeholder="Categoria" />
    </div>

    <div className="field">
      <ListBox placeholder="Desafio" />
    </div>
  </div>
  );
}
