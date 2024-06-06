import { Image } from "primereact/image";
import "../assets/css/card.css"


export const CardPropagandaComponent = (item) => {
  
  return (
    <>
      <div className='p-card card-course'>
        <Image src={item.image} alt="Usuario" width="max-content" height="max-content" />
      </div>
    </>
  ) 
}
