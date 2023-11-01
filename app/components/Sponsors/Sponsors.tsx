import HMLogo from '../../images/HM.png';
import powerLogo from '../../images/powerLogo.png';
import Image from 'next/image';
import './Sponsors.scss';

function Sponsors() {
  return (
    <div className='sponsors'>
      <Image width={50} src={HMLogo} alt='Logo of H&M' />
      <Image width={90} src={powerLogo} alt='Logo of Power' />
    </div>
  );
}
export default Sponsors;
