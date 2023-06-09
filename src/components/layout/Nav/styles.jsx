// Import styles
import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  grid-column: -1/1;
  font-size: 1.1rem;

  ul {
    
    display: flex;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    transition: 0.5s;
    font-weight:bold;
    &:hover {
      border-radius: 30px;
      background-color: ${({ theme }) => theme.color.neutral};
      border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
      cursor: pointer;
      a {
        color: ${({ theme }) => theme.color.support};
      }
    }
    a {
      display: block;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.highlight};
    }
  }

  .active {
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.neutral}`};
  }
  
  @media (max-width: ${({ theme }) => theme.break.medium}) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ul {
      flex-direction: column;
    }
  }
`;