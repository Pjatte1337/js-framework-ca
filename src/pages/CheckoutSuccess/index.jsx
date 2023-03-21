import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Confirmation from "../../components/confirmation";

export default function CheckoutSuccess() {
  useEffect(() => {
    document.title = "StoreTown | Purchase";
  }, []);

  return (
    <StyledPage>
      <Confirmation
        title={"Thank you for your purchase"}
        message={
          "Your order is being shipped. You will receive an email with confirmation"
        }
      />
    </StyledPage>
  );
}