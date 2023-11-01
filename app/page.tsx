import Actions from './components/Actions/Actions';
import EcoWork from './components/EcoWork/EcoWork';
import GameHeroText from './components/GameHeroText/GameHeroText';
import RegisterEmailForm from './components/RegisterEmailForm/RegisterEmailForm';
import Sponsors from './components/Sponsors/Sponsors';

export default function Home() {
  return (
    <div className='home'>
      <GameHeroText />
      <RegisterEmailForm />
      <Actions />
      <div className='home__eco-work'>
        <EcoWork />
      </div>
      <Sponsors />
    </div>
  );
}
