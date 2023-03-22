// Import necessary dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import utils
import { useProductsStore } from "../../utils/create";
import { shallow } from "zustand/shallow";

// Import styles
import { StyledCartPage } from "./styles";

// Import components
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";

// Define the Cart component
export default function Cart() {
  // Set the document title on mount
  useEffect(() => {
    document.title = "StoreTown | Cart";
  }, []);

  // Get the available products and the clearCart function from the store
  const { availableProducts, clearCart } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
      clearCart: state.clearCart,
    }),
    shallow
  );

  // Filter the available products to get only the items in the cart
  const cartItems = availableProducts.filter((item) => item.count > 0);

  // Calculate the total for each item and the total for the cart
  const total = cartItems.map((item) => item.count * item.price);
  const subtotal = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const vat = (subtotal * 0.25).toFixed(2);
  const totalAmount = (parseFloat(vat) + subtotal).toFixed(2);

  return (
    <StyledCartPage>
      <h1>Shopping Cart</h1>
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
            calcSubtotal={() => subtotal}
            calcVAT={() => vat}
            calcTotal={() => totalAmount}
            clearCart={clearCart}
          />
        </>
      ) : (
        <div>
          <div>Your shopping cart is empty. <Link to={`/`}>Go shopping</Link></div>
        </div>
      )}
    </StyledCartPage>
  );
}
