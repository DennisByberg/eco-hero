import './Actions.scss';
import Image from 'next/image';
import coinsLogo from '../../images/coinsLogo.svg';
import lightningLogo from '../../images/small-lightning.svg';
import earthLogo from '../../images/earth.svg';
import { useFontRajdhani } from '@/app/fonts';

function Actions() {
  return (
    <div className={`actions ${useFontRajdhani}`}>
      <div className='actions__container'>
        <Image src={coinsLogo} alt='coinsLogo' />
        <p>
          <strong>SPELA</strong> och tjäna verkliga belöningar!
        </p>
      </div>

      <div className='actions__container'>
        <Image src={lightningLogo} alt='lightningLogo' />
        <p>
          <strong>DONERA</strong> och tjäna verkliga belöningar!
        </p>
      </div>

      <div className='actions__container'>
        <Image src={earthLogo} alt='earthLogo' />
        <p>
          <strong>RÄDDA</strong> världen och bli en hjälte!
        </p>
      </div>
    </div>
  );
}
export default Actions;
