import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Message from "../../components/ReturnMessage";

export default function CheckoutSuccess() {
  useEffect(() => {
    document.title = "StoreTown | Purchase";
  }, []);

  return (
    <StyledPage>
      <Message
        title={"Thank you for your purchase"}
        message={
          "Your order is being shipped. You will receive an email with confirmation"
        }
      />
    </StyledPage>
  );
}