import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Link from 'next/link';

import { A } from '../styles/elements';
import { H4 } from '../styles/typography';

// COMPONENTS
import Header from './header';
import Footer from './footer';

import { LayoutContainer, Main, Menu } from './style';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menu = useRef(null);
  console.log('layout', isOpen);
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menu.current,
        0.8,
        {
          ease: 'SlowMo.InOut',
          x: '-100%',
          opacity: 0
        },
        {
          ease: 'SlowMo.InOut',
          x: '0',
          opacity: 1
        }
      );
    } else {
      gsap.fromTo(
        menu.current,
        0.8,
        {
          ease: 'SlowMo.InOut',
          x: 0,
          opacity: 1
        },
        {
          ease: 'SlowMo.InOut',
          x: '-100%',
          opacity: 0
        }
      );
    }
  }, [menu]);
  return (
    <LayoutContainer>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Menu ref={menu}>
        <li>
          <Link href="/about">
            <A>
              <H4>about</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <A>
              <H4>portfolio</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <A>
              <H4>blog</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <A>
              <H4>contact</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <A>
              <H4>register</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <A>
              <H4>log in</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <A>
              <H4>log out</H4>
            </A>
          </Link>
        </li>
        <li>
          <Link href="/estimator">
            <A>
              <H4>estimate your project</H4>
            </A>
          </Link>
        </li>
      </Menu>
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
