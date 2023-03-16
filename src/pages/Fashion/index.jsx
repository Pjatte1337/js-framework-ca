import React, { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import filterByTags from "../../utils/filter";

export default function Fashion({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Fashion";
  }, []);

  const fashionTags = ["fashion", "shoes", "bags", "glasses"];
  const fashion = filterByTags(products, fashionTags);

  return (
    <StyledPage>
      <h1>Fashion</h1>
      {fashion.map((item) => {
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