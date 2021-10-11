import { DefaultTheme } from "styled-components/macro";
import { darkTheme } from "./darkTheme";
import { liteTheme } from "./liteTheme";

export default function theme(darkMode: boolean): DefaultTheme {
  return darkMode ? darkTheme : liteTheme;
}
