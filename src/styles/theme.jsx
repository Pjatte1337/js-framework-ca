// Import necessary dependencies
import { ThemeProvider } from "styled-components";

const myTheme = {
  color: {
    highlight: "#ebeb14 ", // gul
    support: "#ffffff ", // hvit
    neutral: "#000000 ", // Svart
    background: "#408EC6 ", // Blue
    alert: "grey ", 
  },
  break: {
    medium: "900px",
    small: "550px",
  },
  border: {
    thickness: "1px",
    type: "solid",

  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
);

export default Theme;
