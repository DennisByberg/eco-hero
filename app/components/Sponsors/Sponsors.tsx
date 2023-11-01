import HMLogo from '../../images/HM.png';
import powerLogo from '../../images/powerLogo.png';
import { Box, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import './Sponsors.scss';

function Sponsors() {
  return (
    <Flex className='sponsors' justify={'center'} gap={'9'}>
      <Image width={50} src={HMLogo} alt='Logo of H&M' />
      <Image width={90} src={powerLogo} alt='Logo of Power' />
    </Flex>
  );
}
export default Sponsors;
