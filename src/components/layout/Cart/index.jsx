// Import necessary dependencies
import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";

// Import utils
import { useProductsStore } from "../../../utils/create";
// Import styles

import { StyledCart } from "./styles";
// Import pages

export default function Cart() {
  const { availableProducts } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
    }),
    shallow
  );

  const totalProducts = [];

  availableProducts.forEach((element) => {
    totalProducts.push(element.count);
  });

  function printTotal() {
    return totalProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  return (
    <StyledCart>
      <div className="cart-container">
        <Link to="/src/pages/Cart" className="cart-wrapper">
          <span className="material-symbols-rounded">shopping_bag</span>
          <span>{printTotal()}</span>
        </Link>
      </div>
    </StyledCart>
  );
}