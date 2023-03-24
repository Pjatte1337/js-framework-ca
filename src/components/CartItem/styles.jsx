// Importing styles using styled-components library
import styled from "styled-components";

// Defining the style for a cart item component using styled-components
export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  padding: 1rem;
  margin: 2rem 0;

  // Defining the style for the product info section
  .product-info {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  // Defining the style for the product image
  img {
    width: 8rem;
  }

  // Defining the style for the product title
  h2 {
    margin: 0;
  }

  // Defining the style for the product price
  .price {
    margin: 0.5rem 0 1rem;
  }

  // Defining the style for the quantity section
  .quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;
  }

  // Defining the style for the button component
  button {
    display: flex;
    border: none;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    border-radius: 4px;
    cursor: pointer;
    
    // Defining the style for the button on hover
    &:hover {
      opacity: 0.9;
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.hover};
    }
  }
`;
