import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Navbar = styled.ul`
  position: absolute;
  top: 88px;
  left: 0;
  width: 100%;
  height: calc(100vh - 88px - 88px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
  padding-left: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;
