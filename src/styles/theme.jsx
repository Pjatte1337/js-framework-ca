import { ThemeProvider } from "styled-components";

const myTheme = {
  color: {
    highlight: "#4f4f4f",
    support: "#e0e2e2",
    neutral: "#fff",
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