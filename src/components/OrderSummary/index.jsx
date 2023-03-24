// Import necessary dependencies
import { Link } from "react-router-dom";

// Import components
import PrimaryButton from "../PrimaryButton";
// Import styles
import { StyledOrderSummary } from "./styles";

const OrderSummary = ({ calcSubtotal, calcVAT, calcTotal, clearCart }) => {
  return (
    <StyledOrderSummary>
      <h3>Order summary</h3>
      <div className="price-summary">
        <p>Subtotal</p>
        <p>{calcSubtotal()} NOK</p>
      </div>
      <div className="price-summary">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="price-summary">
        <p>VAT 25%</p>
        <p>{calcVAT()} NOK</p>
      </div>
      <div className="price-summary">
        <p className="total">Total</p>
        <p className="total">{calcTotal()} NOK</p>
      </div>
      <Link to={"/src/pages/Checkout"}>Checkout</Link>
      <PrimaryButton onClick={() => clearCart()} text={"Clear cart"} />
    </StyledOrderSummary>
  );
};

export default OrderSummary;
