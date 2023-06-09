// Import necessary dependencies
import { Link } from "react-router-dom";

// Import styles
import { StyledOrderSummary } from "./styles";

const OrderSummary = ({ calcSubtotal, calcVAT, calcTotal, clearCart }) => {
  return (
    <StyledOrderSummary>
      <h3>Order summary</h3>
      <div className="summary">
        <p>Product cost:</p>
        <p>{calcSubtotal()} NOK</p>
      </div>
      <div className="summary">
        <p>VAT 25%:</p>
        <p>{calcVAT()} NOK</p>
      </div>
      <div className="summary">
        <p className="total">Total:</p>
        <p className="total">{calcTotal()} NOK</p>
      </div>
      <Link to={"/src/pages/Checkout"}>Checkout</Link>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
