import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import message from "../../components/message";

export default function NotFound() {
  useEffect(() => {
    document.title = "StoreTown | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <message title={"we couldn't find the page"} />
    </StyledPage>
  );
}