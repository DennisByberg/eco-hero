import { Flex, Text } from '@radix-ui/themes';
import './Actions.scss';
import Image from 'next/image';
import coinsLogo from '../../images/coinsLogo.svg';
import lightningLogo from '../../images/small-lightning.svg';
import earthLogo from '../../images/Earth.svg';

function Actions() {
  return (
    <Flex align={'center'} justify={'between'} className='actions'>
      <Flex gap={'3'}>
        <Image src={coinsLogo} alt='coinsLogo' />
        <Text>PLAY and earn real life rewards!</Text>
      </Flex>

      <Flex gap={'3'}>
        <Image src={lightningLogo} alt='lightningLogo' />
        <Text>DONATE and earn real life rewards!</Text>
      </Flex>

      <Flex gap={'3'}>
        <Image src={earthLogo} alt='earthLogo' />
        <Text>SAVE the world and be a hero</Text>
      </Flex>
    </Flex>
  );
}
export default Actions;
