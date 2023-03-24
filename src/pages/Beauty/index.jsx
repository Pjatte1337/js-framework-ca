// Import necessary dependencies
import React, { useEffect } from "react";

// Import components
import ProductCard from "../../components/ProductCard";

// Import utils
import filterByTags from "../../utils/filter";

// Import page styles
import { StyledPage } from "../pageStyles";

export default function Beauty({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Beauty";
  }, []);

  const beautyTags = ["beauty", "perfume", "shampoo"];
  const beautyProducts = filterByTags(products, beautyTags);

  return (
    <StyledPage>
      <h1>Beauty</h1>
      {beautyProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          discountedPrice={product.discountedPrice}
          description={product.description}
        />
      ))}
    </StyledPage>
  );
}
