import styled from "styled-components";

export const StyledContactForm = styled.form`
display: flex;
flex-direction: column;
border: ${({ theme }) =>
  `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
width: 60rem;
padding: 1rem;
margin-left: 1rem;
h2 {
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 900;
}
  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
  }
  input {
    height: 2rem;
  }
  textarea {
    height: 6rem;
  }
  .error-message {
    font-size: 0.85rem;
    margin: 0 0 1.5rem;
    color: red;
  }
  .button-container {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;