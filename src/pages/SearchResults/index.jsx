// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import components
import Message from "../../components/ReturnMessage";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";

// Import utils
import { url } from "../../utils/constants";

// Import styles
import { StyledPage } from "../pageStyles";

export default function SearchResults() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { q } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const data = await response.json();

        //set document title including product name
        document.title = "StoreTown | Search results";

        setData(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [q]);

  if (isLoading || !data) {
    return <Loader />;
  }

  if (isError) {
    return <Message title={"An error occurred"} />;
  }

  const query = data.filter((product) => {
    return product.title.toLowerCase().includes(q);
  });

  return (
    <StyledPage>
      {query.length > 0 ? (
        query.map((item) => {
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
        })
      ) : (
        <message
          title={"oops..."}
          message={"not found"}
        />
      )}
    </StyledPage>
  );
}