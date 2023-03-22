import { ThemeProvider } from "styled-components";

const myTheme = {
  color: {
    highlight: "#ffff00",
    support: "#ffffff",
    neutral: "#000000",
    hover: "#ffff00", 
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