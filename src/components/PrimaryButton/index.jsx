// Import styles
import { StyledPrimaryButton } from "./styles";

const PrimaryButton = ({ text, onClick }) => {
  return <StyledPrimaryButton onClick={onClick}>{text}</StyledPrimaryButton>;
  };
  
  export default PrimaryButton;