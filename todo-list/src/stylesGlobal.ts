import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    .hide {
      display: none !important;
    }

    & main {
      min-height: 71vh;
      text-align: center;
      padding: 2rem;

      & h2 {
        margin-bottom: 0.8rem;
      }
    }
  }
`
