// importing styles
import styled from "styled-components";

export const StyledCheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  box-shadow: 0px 0px 9px 2px rgba(235, 235, 20, 0.63);
  webkit-box-shadow: 0px 0px 9px 2px rgba(235, 235, 20, 0.63);
  -moz-box-shadow: 0px 0px 9px 2px rgba(235, 235, 20, 0.63);
  width: 60rem;
  padding: 1rem;
  margin-left: 1rem;

  h2 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 900;
  }

  input,
  select {
    display: block;
    width: 100%;
    height: 2rem;
    margin-top: 0.5rem;

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  .small-field {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .payment {
    margin-top: 2rem;
  }

  .cvv {
    max-width: 75px;
  }

  .error-message {
    font-size: 1rem;
    margin: 0 0 1.5rem;
    color:${({ theme }) => theme.color.support};
    font-weight: bold;
  }
  
  .button-container {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
