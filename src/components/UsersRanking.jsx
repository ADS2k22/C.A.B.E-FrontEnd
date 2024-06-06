import { UserRankingComponent } from './UserRanking';
import '../assets/css/userList.css';
import manSample1 from '../../src/assets/images/manSample1.png';
import manSample2 from '../../src/assets/images/manSample2.png';
import womanSample2 from '../../src/assets/images/womanSample2.png';

export const UsersRankingComponent = ({ children }) => {
  return (
    <>
      <div className='user-list'>
        <UserRankingComponent image={manSample1} name={'Luan'} ranking={1} xp={87} />
        <UserRankingComponent image={womanSample2} name={'Gabriela'} ranking={2} xp={55} />
        <UserRankingComponent image={manSample2} name={'Rodrigo'} ranking={3} xp={21} />
      </div>
    </>
  )
}