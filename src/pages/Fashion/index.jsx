// Import necessary dependencies
import React, { useEffect } from "react";

// Import components
import ProductCard from "../../components/ProductCard";

// Import utils
import filterByTags from "../../utils/filter";

// Import styles
import { StyledPage } from "../pageStyles";

export default function Fashion({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Fashion";
  }, []);

  const fashionTags = ["fashion", "shoes", "bags", "glasses"];
  const fashion = filterByTags(products, fashionTags);

  return (
    <StyledPage>
      <h1>Fashion</h1>
      {fashion.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          discountedPrice={item.discountedPrice}
          description={item.description}
        />
      ))}
    </StyledPage>
  );
}