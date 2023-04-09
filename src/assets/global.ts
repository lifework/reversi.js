import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, p, span, li, label, input, textarea {
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  *::before, ::after {
    box-sizing: inherit;
  }

  button {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type="text"], textarea, select {
    -webkit-appearance: none;
    font-size: 16px !important;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;

export const StorybookResetCss = createGlobalStyle`
  .sb-show-main.sb-main-padded {
    padding: 0;
  }
`;
