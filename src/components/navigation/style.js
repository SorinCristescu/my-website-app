import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  list-style: none;
`;
