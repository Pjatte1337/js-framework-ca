import React, { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";

export default function Home({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Homepage";
  }, []);

  return (
    <>
      <StyledPage>
        <h1>All Products</h1>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              description={product.description}
            />
          );
        })}
      </StyledPage>
    </>
  );
}