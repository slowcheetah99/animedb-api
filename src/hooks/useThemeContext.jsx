import { useContext } from "react";
import { ColorModeContext } from "../utils/ToggleTheme";

export function useThemeContext() {
  const context = useContext(ColorModeContext);
  if (!context) {
    return "Must be inside theme context";
  }
  return context;
}
