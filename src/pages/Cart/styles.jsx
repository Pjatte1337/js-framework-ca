// Import necessary dependencies
import styled from "styled-components";

// Define styles for the CartPage component using styled-components
export const StyledCartPage = styled.main`
  margin: 4rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  h1 {
    flex: 100%;
    text-align: center;
    text-decoration: underline;
  }

  .purchase {
    flex: 0 0 65%;
  }

  a {
    font-weight: bold;
    font-style: normal;
    color: ${({ theme }) => theme.color.highlight};
  }

  /* Media query for smaller screens */
  @media (max-width: ${({ theme }) => theme.break.medium}) {
    .purchase {
    flex: 0 0 100%;
    }
  }
`;