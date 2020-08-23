import Link from 'next/link';

import { NavContainer } from './style';

import { A } from '../../styles/elements';
const Navigation = () => {
  const { links, direction, fontSize } = props;
  return (
    <NavContainer direction={direction}>
      {links &&
        links.map((link, index) => (
          <Link key={index} href={link.href}>
            <A fontSize={fontSize}>home</A>
          </Link>
        ))}
    </NavContainer>
  );
};

export default index;
