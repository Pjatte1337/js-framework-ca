// Import necessary dependencies
import { shallow } from "zustand/shallow";
import { useProductsStore } from "../../utils/create";
import { StyledCartItem } from "./styles";

// Define the CartItem component
export default function CartItem({ title, count, price, id, imageUrl }) {
  // Retrieve the necessary store methods from the useProductsStore hook
  const { addOne, subtractOne, clearCount } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
      subtractOne: state.subtractOne,
      clearCount: state.clearCount,
    }),
    shallow
  );

  // Define a function for calculating the subtotal
  function calcSubtotal(price, count) {
    return (price * count).toFixed(2);
  }

  // Render the CartItem component
  return (
    <StyledCartItem>
      <div className="product-info">
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p className="price">{calcSubtotal(price, count)} NOK</p>
          <div className="quantity">
            QTY:{" "}
            <button onClick={() => subtractOne(id)}>
              <span className="material-symbols-rounded">remove</span>
            </button>{" "}
            {count}
            <button onClick={() => addOne(id)}>
              <span className="material-symbols-rounded">add</span>
            </button>
          </div>
          <p>(Price per unit: {price} NOK)</p>
        </div>
      </div>
      <div>
        <button onClick={() => clearCount(id)}>
          <span className="material-symbols-rounded">X</span>
        </button>
      </div>
    </StyledCartItem>
  );
}
