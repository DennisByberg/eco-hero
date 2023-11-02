import Actions from './components/Actions/Actions';
import EcoWork from './components/EcoWork/EcoWork';
import GameHeroText from './components/GameHeroText/GameHeroText';
import NavBar from './components/NavBar/NavBar';
import RegisterEmailForm from './components/RegisterEmailForm/RegisterEmailForm';
import Sponsors from './components/Sponsors/Sponsors';
import Image from 'next/image';
import spaceImage from '@/app/images/hero-img.svg';

export default function Home() {
  return (
    <div className='home'>
      <div className='hero-img-container'>
        <Image
          className='hero-img-container__image'
          src={spaceImage}
          alt='space'
        ></Image>
        <NavBar />
        <GameHeroText />
        <RegisterEmailForm />
      </div>
      <Actions />
      <div className='home__eco-work'>
        <EcoWork />
      </div>
      <Sponsors />
    </div>
  );
}
