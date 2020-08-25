import styled from 'styled-components';
import { theme } from './theme';

export const H1 = styled.h1`
  font-family: MonumentExtended, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 65px;
  font-weight: ultrabold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
`;

export const H2 = styled.h2`
  font-family: MonumentExtended, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: ultrabold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  font-family: MonumentExtended, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 30px;
  font-weight: ultrabold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-family: MonumentExtended, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 26px;
  font-weight: ultrabold;
  line-height: 1;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
  padding: 0;
  margin: 10px;
`;

export const H5 = styled.h5`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: extrabold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
`;

export const H6 = styled.h6`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: extrabold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
  text-transform: uppercase;
`;

export const P = styled.p`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Strong = styled.strong`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Small = styled.small`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: regular;
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
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;

export const Blockquote = styled.blockquote`
  font-family: Manrope, Arial, Helvetica, sans-serif;
  font-style: ${(props) => props.style};
  font-size: 48px;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${(props) => props.textAlign};
`;
