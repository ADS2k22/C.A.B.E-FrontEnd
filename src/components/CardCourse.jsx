import React from 'react';
import { Image } from "primereact/image";
import { Rating } from 'primereact/rating';
import "../assets/css/card.css"

export const CardCourseComponent = (item) => {

  const returnAleatorio = () => {
    const min = 200;
    const max = 250;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <a href={`/curso/${item.curso.id}`} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
      <div className='p-card card-course'>
        <i className={'check-conclusion ' + (item.concluido ? 'pi pi-check' : 'pi pi-spinner')} />
        <Image src={`https://picsum.photos/250/${returnAleatorio()}`} alt="Usuario" width="250px" height="130px" />
        <Rating value={item.curso.feedback} readOnly cancel={false} />
        <label className="title"> {item.curso.nome}</label>
        <div className="justify-between">
          <label className=""> {item.curso.carga_horaria + 'h'}</label>
          <label className=""> {item.curso.categoria.nome}</label>
        </div>
      </div>
    </a>
  )
};
