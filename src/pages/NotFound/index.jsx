// Importing necessary dependencies
import React, { useEffect } from "react";

// Importing components
import { StyledPage } from "../pageStyles";
import Message from "../../components/ReturnMessage";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "StoreTown | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <Message title={"We couldn't find the page."} />
    </StyledPage>
  );
}
