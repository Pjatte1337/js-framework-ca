// Import styles
import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .input-wrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.highlight};
  }

  .material-symbols-rounded{
    color:yellow;
  }

  ul {
    list-style-type: none;
    position: absolute;
    top: 57%;
    background-color: ${({ theme }) => theme.color.support};
    width: 100%;
  }

  li {
    transition: 0.5s;
    a {
      padding: 0.5rem 1rem;
      display: block;
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.color.neutral};
      background-color: ${({ theme }) => theme.color.support};
      &:hover {
        background-color: ${({ theme }) => theme.color.neutral};
        color: ${({ theme }) => theme.color.support};
        cursor: pointer;
      }
    }
  }

  .selected {
    background-color: ${({ theme }) => theme.color.highlight};
    a {
      color: ${({ theme }) => theme.color.support};
    }
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    grid-row-start: 2;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 6;
    border-right: none;
  }
`;