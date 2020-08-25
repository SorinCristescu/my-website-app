import styled from 'styled-components';
import { theme } from '../styles/theme';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  background-color: ${({ theme }) => theme.background.white};
`;

export const Main = styled.div`
  padding-top: 88px;
  width: 100%;
  height: calc(100vh - 88px - 88px);
  display: block;
`;

export const Menu = styled.ul`
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
