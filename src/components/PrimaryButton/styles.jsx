import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.highlight};
  color: ${({ theme }) => theme.color.neutral};
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.025rem;
  margin: 1rem 0;
  &:hover {
    background-color: ${({ theme }) => theme.color.neutral};
    color: ${({ theme }) => theme.color.support};
    border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }
`;