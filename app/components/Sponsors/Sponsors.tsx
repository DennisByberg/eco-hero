import HMLogo from '../../images/HM.png';
import powerLogo from '../../images/powerLogo.png';
import { Box, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import './Sponsors.scss';

function Sponsors() {
  return (
    <Flex
      gap={'3'}
      className='sponsors'
      align={'center'}
      justify={'center'}
      direction={'column'}
    >
      <Box>
        <Text size={'2'} className='sponsors__txt'>
          Sponsrade av:
        </Text>
      </Box>
      <Flex gap={'5'}>
        <Image width={50} src={HMLogo} alt='Logo of H&M' />
        <Image width={90} src={powerLogo} alt='Logo of Power' />
      </Flex>
    </Flex>
  );
}
export default Sponsors;
