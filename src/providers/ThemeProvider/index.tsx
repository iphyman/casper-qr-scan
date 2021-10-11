import { ReactNode, useMemo } from "react";
import { ThemeProvider as CustomProvider } from "styled-components/macro";
import theme from "theme";
import { useIsDarkMode } from "data/user/hooks";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const darkMode = useIsDarkMode();

  const activeTheme = useMemo(() => theme(darkMode), [darkMode]);

  return <CustomProvider theme={activeTheme}>{children}</CustomProvider>;
}
