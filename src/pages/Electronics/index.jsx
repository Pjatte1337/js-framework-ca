// Import necessary dependencies
import React, { useEffect } from "react";

// Import components
import ProductCard from "../../components/ProductCard";

// Import utils
import filterByTags from "../../utils/filter";
// Import pages
import { StyledPage } from "../pageStyles";

export default function Electronics({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Electronics";
  }, []);

  const electronicsTags = ["electronics", "headphones", "watch"];
  const electronics = filterByTags(products, electronicsTags);

  return (
    <StyledPage>
      <h1>Electronics</h1>
      {electronics.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            discountedPrice={item.discountedPrice}
            description={item.description}
          />
        );
      })}
    </StyledPage>
  );
}