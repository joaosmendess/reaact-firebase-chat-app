import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
}
`;

export default GlobalStyles;