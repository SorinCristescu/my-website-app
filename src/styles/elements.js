import styled from 'styled-components';
import { theme } from './theme';

export const Ul = styled.ul``;

export const Ol = styled.ol``;

export const Li = styled.li``;

export const A = styled.a`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary}!important;
  text-align: ${(props) => props.textAlign};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover}!important;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primaryHover}!important;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryHover}!important;
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
