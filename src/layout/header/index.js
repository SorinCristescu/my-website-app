import Link from 'next/link';

import { HeaderContainer, Navbar } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>home</a>
      </Link>

      <Navbar>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>register</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>log in</a>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <a>log out</a>
          </Link>
        </li>
        <li>
          <Link href="/estimator">
            <a>estimate your project</a>
          </Link>
        </li>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
