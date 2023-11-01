import EcoWork from './components/EcoWork/EcoWork';
import GameHeroText from './components/GameHeroText/GameHeroText';
import RegisterEmailForm from './components/RegisterEmailForm/RegisterEmailForm';
import Sponsors from './components/Sponsors/Sponsors';

export default function Home() {
  return (
    <div className='home'>
      <div className='home__game-form'>
        <GameHeroText />
        <RegisterEmailForm />
      </div>
      <div className='home__eco'>
        <EcoWork />
      </div>
      <Sponsors />
    </div>
  );
}
