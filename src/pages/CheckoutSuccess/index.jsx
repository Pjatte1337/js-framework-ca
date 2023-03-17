import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Feedback from "../../components/Feedback";

export default function CheckoutSuccess() {
  useEffect(() => {
    document.title = "StoreTown | Purchase";
  }, []);

  return (
    <StyledPage>
      <Feedback
        title={"Thank you for your purchase"}
        message={
          "Your order is being shipped. You will receive an email with the tracking number shortly"
        }
      />
    </StyledPage>
  );
}