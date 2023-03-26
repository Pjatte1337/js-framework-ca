// Import styles
import styled from "styled-components";

export const StyledMessages = styled.div`
  text-align: center;

  h1 {
    text-transform: uppercase;
  }

  p {
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.color.support};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.5rem 1rem;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.support};
      border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    }
  }
`;
