// Import necessary dependencies
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        margin: 0;
        font-family: sans-serif;
        color: ${({ theme }) => theme.color.highlight};
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;
