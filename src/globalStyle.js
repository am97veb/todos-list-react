import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
    
    *, ::after, ::before {
    box-sizing: inherit;
  }
    
  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.alto} ;
    font-family: "Montserrat", sans-serif;
    word-break: break-word;
  }
`;
