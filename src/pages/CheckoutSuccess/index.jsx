// Import necessary dependencies
import { useEffect } from "react";

// Import pages
import { StyledPage } from "../pageStyles";

// Import components
import ReturnMessage from "../../components/ReturnMessage";

export default function CheckoutSuccess() {
  useEffect(() => {
    document.title = "StoreTown | Purchase";
  }, []);

  return (
    <StyledPage>
      <ReturnMessage
        title={"Thank you for your purchase"}
        message={
          "Your order is being shipped. You will receive an email with confirmation"
        }
      />
    </StyledPage>
  );
}
