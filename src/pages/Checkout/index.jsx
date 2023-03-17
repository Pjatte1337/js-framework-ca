import { useEffect } from "react";
import { StyledCheckoutPage } from "./styles";
import CheckoutForm from "../../components/CheckoutForm";

export default function Checkout() {
  useEffect(() => {
    document.title = "StoreTown | Checkout";
  }, []);

  return (
    <StyledCheckoutPage>
      <h1>Check out</h1>
      <CheckoutForm />
    </StyledCheckoutPage>
  );
}