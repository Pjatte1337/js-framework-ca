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
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 1rem;
    text-align: center;
    &:hover {
      color: ${({ theme }) => theme.color.support};
      background-color: ${({ theme }) => theme.color.neutral};
      border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    }
  }
`;
