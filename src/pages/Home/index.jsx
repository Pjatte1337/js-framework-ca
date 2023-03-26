// Import necessary dependencies
import React, { useEffect } from "react";

// Import components
import ProductCard from "../../components/ProductCard";

// Import styles
import { StyledPage } from "../pageStyles";

function Home({ products }) {
  useEffect(() => {
    document.title = "StoreTown | Homepage";
  }, []);

  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      imageUrl={product.imageUrl}
      title={product.title}
      price={product.price}
      discountedPrice={product.discountedPrice}
      description={product.description}
    />
  ));

  return (
    <StyledPage>
      <h1>All Products</h1>
      {productCards}
    </StyledPage>
  );
}

export default Home;