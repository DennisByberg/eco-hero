import './Actions.scss';
import Image from 'next/image';
import coinsLogo from '../../images/coinsLogo.svg';
import lightningLogo from '../../images/small-lightning.svg';
import earthLogo from '../../images/earth.svg';

function Actions() {
  return (
    <div className='actions'>
      <div className='actions__container'>
        <Image src={coinsLogo} alt='coinsLogo' />
        <p>SPELA och tjäna verkliga belöningar!</p>
      </div>

      <div className='actions__container'>
        <Image src={lightningLogo} alt='lightningLogo' />
        <p>DONERA och tjäna verkliga belöningar!</p>
      </div>

      <div className='actions__container'>
        <Image src={earthLogo} alt='earthLogo' />
        <p>RÄDDA världen och bli en hjälte</p>
      </div>
    </div>
  );
}
export default Actions;
