import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../../utils/stateManagement";
import { shallow } from "zustand/shallow";
import { StyledCartPage } from "./styles";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";

export default function Cart() {
  useEffect(() => {
    document.title = "StoreTown | Cart";
  }, []);

  const { availableProducts, clearCart } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
      clearCart: state.clearCart,
    }),
    shallow
  );

  const cartItems = availableProducts.filter((item) => {
    return item.count > 0;
  });

  let total = [];

  cartItems.forEach((item) => {
    total.push(item.count * item.price);
  });

  function calcSubtotal() {
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return sum.toFixed(2);
  }

  function calcVAT() {
    const sum = calcSubtotal();
    return ((sum * 25) / 100).toFixed(2);
  }

  function calcTotal() {
    const vat = parseFloat(calcVAT());
    const subtotal = parseFloat(calcSubtotal());
    return (vat + subtotal).toFixed(2);
  }

  return (
    <StyledCartPage>
      <h1>Shopping cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="purchase">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                count={item.count}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <OrderSummary
            calcSubtotal={calcSubtotal}
            calcVAT={calcVAT}
            calcTotal={calcTotal}
            clearCart={clearCart}
          />
        </>
      ) : (
        <div>
          <div>There are no items in the cart</div>
          <Link to={`/`}>Go shopping</Link>
        </div>
      )}
    </StyledCartPage>
  );
}