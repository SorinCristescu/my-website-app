import Link from 'next/link';

import { HeaderContainer, Navbar } from './style';
import { A } from '../../styles/elements';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <A>home</A>
      </Link>

      <Navbar>
        <li>
          <Link href="/about">
            <A>about</A>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <A>portfolio</A>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <A>blog</A>
          </Link>
        </li>
        <li>
          <Link href="/estimator">
            <A>estimate your project</A>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <A>contact</A>
          </Link>
        </li>

        <li>
          <Link href="/register">
            <A>register</A>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <A>log in</A>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <A>log out</A>
          </Link>
        </li>

        <li>
          <Link href="/crm">
            <A>CRM</A>
          </Link>
        </li>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
