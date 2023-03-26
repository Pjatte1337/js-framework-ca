// Import necessary dependencies
import { useEffect } from "react";

// Import styles and components
import { StyledCheckoutPage } from "./styles";
import CheckoutForm from "../../components/CheckoutForm";

export default function Checkout() {
  // Set the document title on component mount
  useEffect(() => {
    document.title = "StoreTown | Checkout";
  }, []);

  return (
    <StyledCheckoutPage>
      <h1>Check Out</h1>
      <CheckoutForm />
    </StyledCheckoutPage>
  );
}
