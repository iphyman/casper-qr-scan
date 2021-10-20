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
.main-enter {
    position: absolute;
    transform: translateX(-110%);
}

.main-enter-active {
  transform: translateX(0%);
  transition: all 400ms ease;
}

.main-exit {
  position: absolute;
}
.main-exit-active {
  transform: translateX(-240%);
}

.secondary-enter {
  position: absolute;
  transform: translateX(110%);
}
.secondary-enter-active {
  transform: translateX(0%);
  transition: all 400ms ease;
}

.secondary-exit {
  position: absolute;
}
.secondary-exit-active {
  transform: translateX(240%);
}

body {
  overflow-x: hidden;
}

html {
  min-height: 100%;
  color: ${({ theme }) => theme.text200};
  background-color: ${({ theme }) => theme.bg100};
  font-family: "Inter", "system-ui";
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
}

`;
