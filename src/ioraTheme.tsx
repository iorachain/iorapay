import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#5bae81",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#2E384C",
    },
    neutral: {
      main: "#fafafa",
    },
  },
});

export default theme;
