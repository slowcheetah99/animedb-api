import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext();
export default function ToggleTheme({ children }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  function toggleColorMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
