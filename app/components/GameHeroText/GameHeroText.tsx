import './GameHeroText.scss';
import { useFontLuckiestGuy } from '@/app/fonts';

function GameHeroText() {
  return (
    <div className='hero-text'>
      <h1 className={`hero-text__title ${useFontLuckiestGuy.className}`}>
        eco hero
      </h1>
      <p className='hero-text__description'>
        Vad säger du om vi sa att du kan ta återvinning in i en spelvärld?
        Donera kläder för att stärka din Eco hero med superkrafter och samla
        poäng för att klicka hem fantastiska vinster. Låt oss göra återvinning
        till ett äventyr!{' '}
      </p>
    </div>
  );
}
export default GameHeroText;
