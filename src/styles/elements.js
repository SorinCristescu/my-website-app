import styled from 'styled-components';
import { theme } from './theme';

export const Ul = styled.ul``;

export const Ol = styled.ol``;

export const Li = styled.li``;

export const A = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Img = styled.img``;

export const Grid = styled.div``;

export const GridItem = styled.div``;

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Section = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const FlexCol = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
`;

export const FlexRow = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
`;
