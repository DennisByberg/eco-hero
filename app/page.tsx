import GameHeroText from './components/GameHeroText/GameHeroText';
import RegisterEmailForm from './components/RegisterEmailForm/RegisterEmailForm';

export default function Home() {
  return (
    <div className='home'>
      <GameHeroText />
      <div>
        <RegisterEmailForm />
      </div>
    </div>
  );
}
