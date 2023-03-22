import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  width: 17rem;
  padding: 1rem;
  img {
    max-width: 100%;
    height: 400px;
    align-self: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  .promo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .promo-container-hidden {
    display: none;
  }
  .old-price {
    text-decoration: line-through;
    color: ${({ theme }) => theme.color.support};
  }
  .discount {
    background-color: red;
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.3rem;
    border-radius: 4px;
    font-weight:bold;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 0;
    text-align: center;
    &:hover {
      color: ${({ theme }) => theme.color.hover};
      background-color: ${({ theme }) => theme.color.neutral};
      border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
    }
  }
 
  ${({ location }) =>
    location.includes("/src/pages/Product") &&
    `
    flex-direction: row-reverse;
    width: 80%;
    gap: 1rem;
     img,
     .product-data {
     max-width: 50%;
     }
  `}

  @media (max-width: ${({ theme }) => theme.break.small}) {
    flex-direction: column;
    img,
    .product-data {
      max-width: 100%;
    }
  }
`;