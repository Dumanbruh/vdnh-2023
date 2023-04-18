import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eb3333",
    },
    secondary: {
      main: "#08E6E7",
      contrastText: "#000000",
    },
    text: {
      //@ts-ignore
      navbar: "#1E2229",
    },
    background: {
      default: "#fff",
      //@ts-ignore
      navbar: "#fff",
    },
    button: {
      main: "#191D23",
    },
  },
});

export default theme;
