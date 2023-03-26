// Import styles
import styled from "styled-components";

export const StyledOrderSummary = styled.div`
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  box-shadow: 0px 0px 9px 2px rgba(235,235,20,0.63);
  webkit-box-shadow: 0px 0px 9px 2px rgba(235,235,20,0.63);
  -moz-box-shadow: 0px 0px 9px 2px rgba(235,235,20,0.63);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0;
  height: fit-content;
  flex: 0 0 30%;

  h3 {
    margin: 0 0 1rem;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.support};
    p {
      margin: 0.5rem 0;
    }
    .total {
      font-weight: 700;
      margin: 1rem 0;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.5rem 0;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.support};
      border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.break.medium}) {
    flex: 0 0 100%;
  }
`;