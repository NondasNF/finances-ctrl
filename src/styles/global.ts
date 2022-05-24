import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --text-title: #363F5F;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
  html {
    // font-size: 16px;
    @media (max-width: 1000px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 768px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
