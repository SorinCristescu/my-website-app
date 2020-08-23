import styled from 'styled-components';
import { theme } from './theme';

export const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 65px;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const H2 = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const H3 = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const H4 = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const H5 = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const H6 = styled.h6`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const P = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Strong = styled.strong`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Small = styled.small`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Code = styled.code`
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Em = styled.em`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Blockquote = styled.blockquote`
  font-family: Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;
