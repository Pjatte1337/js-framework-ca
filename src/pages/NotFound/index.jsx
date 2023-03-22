import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Message from "../../components/Message";

export default function NotFound() {
  useEffect(() => {
    document.title = "StoreTown | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <Message title={"we couldn't find the page"} />
    </StyledPage>
  );
}