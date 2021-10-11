import { createGlobalStyle } from "styled-components/macro";
import "inter-ui";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, :after, :before {
    box-sizing: border-box;
}

html {
  min-height: 100%;
  color: ${({ theme }) => theme.text200};
  background-color: ${({ theme }) => theme.bg100};
  font-family: "Inter", "system-ui";
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

`;
