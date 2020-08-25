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

  button {
    width: 35px;
    height: auto;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    cursor: pointer;
  }

  img {
    width: 30px;
    height: auto;
  }

  button:focus {
    outline: none;
  }

  li {
    padding: 0 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
