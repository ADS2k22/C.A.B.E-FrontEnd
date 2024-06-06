import { Image } from "primereact/image";
import { Rating } from 'primereact/rating';
import "../assets/css/card.css"


export const CardCourseComponent = (item) => {
  
  return (
    <>
      <div className='p-card card-course'>
        <i className={'check-conclusion ' + (item.concluido ? 'pi pi-check' : 'pi pi-spinner')}/>
        <Image src={item.image} alt="Usuario" width="250px" height="130px" />
        <Rating value={item.feedback} readOnly cancel={false} />
        <label className="title"> {item.curso_nome}</label>
        <div className="justify-between">
          <label className=""> {item.carga_horaria +'h' }</label>
          <label className=""> {item.categoria_nome}</label>
        </div>
      </div>
    </>
  ) 
}

// e.curso.nome
// image(static)
// e.curso.carga_horaria
// e.curso.categoria.nome
// e.curso.feedback
// e.concluido
