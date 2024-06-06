import { Avatar } from "primereact/avatar";
import { ProgressBar } from 'primereact/progressbar';

export const UserRankingComponent = ({ name, ranking, xp, image }) => {
  return (
    <>
      <div className='p-card'>
        <div className='justify-between'>
          <label className='ranking'>{ranking + 'º'}</label>
          <Avatar image={image} size="xlarge" shape="circle" />
          <label>{name}</label>
        </div>
        <ProgressBar value={xp}></ProgressBar>
      </div>
    </>
  )
}