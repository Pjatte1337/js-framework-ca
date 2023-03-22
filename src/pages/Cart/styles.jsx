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

/* Style for h1 element */
h1 {
  flex: 100%;
  text-align: center;
  text-decoration: underline;
}

/* Style for .purchase element */
  .purchase {
  flex: 0 0 65%;
}

/* Media query for smaller screens */
@media (max-width: ${({ theme }) => theme.break.medium}) {
  .purchase {
  flex: 0 0 100%;
}
}
`;