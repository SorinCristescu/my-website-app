import Link from 'next/link';

import { HeaderContainer, Navbar } from './style';
import { A } from '../../styles/elements';

const Header = ({ isOpen, setIsOpen }) => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderContainer>
      <Link href="/">
        <A>LOGO</A>
      </Link>
      <button onClick={handleMenu}>
        <img src="./images/menu.svg" alt="menu button" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
