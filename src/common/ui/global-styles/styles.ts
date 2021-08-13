import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #333;
  }

  li, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  input, textarea {
    outline: none;
  }
  
  button {
    border: 0;
    outline: none;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    background: #F5F6FA;
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }
`;
