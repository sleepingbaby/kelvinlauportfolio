import { createTheme } from "@mui/material";

export const lightThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#76b2c7",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#f7f7f7",
      paper: "#fff",
    },
    text: {
      primary: "#15190a",
      secondary: "#dce8bf",
      disabled: "#041225",
      hint: "#041225",
    },
  },
};

// Dark theme options
export const darkThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#4895b1",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#1a1a1a",
      paper: "#d79ec8",
    },
    text: {
      primary: "#fff",
      secondary: "#041225",
      disabled: "#041225",
      hint: "#041225",
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
