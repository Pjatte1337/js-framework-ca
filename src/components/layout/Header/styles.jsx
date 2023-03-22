import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 4rem;
  padding: 1rem;
  .menu {
    display: none;
  }
  .cart-container {
    justify-self: center;
    align-self: center;
  }
  .cart-wrapper {
    color: ${({ theme }) => theme.color.highlight};
    text-decoration: none;
    position: relative;
  }
  .material-symbols-rounded {
    font-size: 2rem;
  }
  .cart-wrapper :nth-child(2) {
    position: absolute;
    bottom: 100%;
    left: 70%;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    border-radius: 50%;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.1rem;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.break.medium}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1rem repeat(3, 1fr) 4rem 1rem;
    padding: 1rem 0;
    img {
      height:200px;
      width:320px;
    }
    .cart-container {
      position: relative ;
      top: 200px;
      left: 0px;
    }
    .menu {
      display: block;
      grid-row-start: 2;
      grid-column-start: 1;
      grid-row-end: 3;
      grid-column-end: 3;
      width: 2.5rem;
      border: none;
      color: ${({ theme }) => theme.color.highlight};
      background-color: ${({ theme }) => theme.color.neutral};
      cursor: pointer;
    }
`;