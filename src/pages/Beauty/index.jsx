import React, { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import filterByTags from "../../utils/filter";

export default function Beauty({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Beauty";
  }, []);

  const beautyTags = ["beauty", "perfume", "shampoo"];
  const beauty = filterByTags(products, beautyTags);

  return (
    <StyledPage>
      <h1>Beauty</h1>
      {beauty.map((item) => {
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