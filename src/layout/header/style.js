import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 88px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  li {
    padding: 0 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export const Navbar = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;
