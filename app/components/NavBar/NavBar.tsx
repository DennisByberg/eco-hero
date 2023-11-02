import './NavBar.scss';
import Image from 'next/image';
import logo from '../../images/logo.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <Image className='navbar__logo' src={logo} alt='' />
    </nav>
  );
}
export default NavBar;
